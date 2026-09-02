"""Foskaris issue photography: semantic copies, coverart, backcover collage."""
import os
import random
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "issues", "foskaris")
os.makedirs(OUT, exist_ok=True)

PW, PH = 1680, 2240  # 2x magazine canvas
CHARCOAL = (28, 28, 28)
MAGENTA = (232, 67, 147)
CREAM = (244, 239, 230)


def save(im, name, quality=90):
    path = os.path.join(OUT, name)
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True)
    print("saved", path, im.size)


def fit_cover(im, size, focus=(0.52, 0.28)):
    tw, th = size
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    cx, cy = int(nw * focus[0]), int(nh * focus[1])
    left = max(0, min(nw - tw, cx - tw // 2))
    top = max(0, min(nh - th, cy - th // 2))
    return im.crop((left, top, left + tw, top + th))


def left_clear(im, strength=0.78, width=0.38):
    w, h = im.size
    overlay = Image.new("RGB", (w, h), CHARCOAL)
    mask = Image.new("L", (w, h), 0)
    md = ImageDraw.Draw(mask)
    band = int(w * width)
    for x in range(band):
        a = int(255 * strength * (1 - x / band) ** 1.2)
        md.line([(x, 0), (x, h)], fill=a)
    return Image.composite(overlay, im, mask)


studio = Image.open(os.path.join(OUT, "extract_p1_i0.jpg")).convert("RGB")
kitchen = Image.open(os.path.join(OUT, "extract_p1_i1.jpg")).convert("RGB")
magenta = Image.open(os.path.join(OUT, "extract_p7_i0.jpg")).convert("RGB")

# Named masters
save(studio, "cover.jpg", 92)
save(studio, "portrait.jpg", 92)
save(magenta, "portrait2.jpg", 92)
save(kitchen, "kitchen.jpg", 92)

# Produce / counter crop from the kitchen frame
kw, kh = kitchen.size
produce = kitchen.crop((0, int(kh * 0.58), kw, kh))
save(produce, "produce.jpg", 90)

# Coverart: portrait pinned high and slightly right, charcoal left column.
# Face lives in the top half so a 60% page crop (object-position top) keeps it clear of the slab.
art = fit_cover(studio, (PW, PH), focus=(0.58, 0.22))
art = ImageEnhance.Contrast(art).enhance(1.06)
art = ImageEnhance.Color(art).enhance(1.04)
# Soft charcoal wash behind a sharp subject strip on the right.
bg = art.filter(ImageFilter.GaussianBlur(36))
bg = ImageEnhance.Brightness(bg).enhance(0.42)
subj = fit_cover(studio, (int(PW * 0.68), PH), focus=(0.50, 0.20))
subj = ImageEnhance.Contrast(subj).enhance(1.08)
sheet = bg.copy()
sx = PW - subj.width + 20
# Left-edge fade on the subject strip
fade = Image.new("L", subj.size, 255)
fd = ImageDraw.Draw(fade)
fw = 180
for x in range(fw):
    fd.line([(x, 0), (x, PH)], fill=int(255 * (x / fw)))
sheet.paste(subj, (sx, 0), fade)
sheet = left_clear(sheet, strength=0.55, width=0.32)
save(sheet, "coverart.jpg", 92)

# Back cover collage — rotated tiles, charcoal wash, faint magenta cast
names = ["portrait.jpg", "kitchen.jpg", "portrait2.jpg", "produce.jpg", "cover.jpg"]
tiles = [Image.open(os.path.join(OUT, n)).convert("RGB") for n in names]
big = int((PW**2 + PH**2) ** 0.5) + 500
collage = Image.new("RGB", (big, big), CHARCOAL)
tile_w, tile_h = 420, 560
gap = 16
rng = random.Random(26)
cols = big // (tile_w + gap) + 2
rows = big // (tile_h + gap) + 2
for r in range(rows):
    for c in range(cols):
        t = tiles[(r * cols + c + rng.randrange(3)) % len(tiles)]
        th = tile_h
        tw = int(t.width * (th / t.height))
        t = t.resize((tw, th), Image.LANCZOS)
        left = max(0, (tw - tile_w) // 2)
        t = t.crop((left, 0, left + tile_w, th))
        x = c * (tile_w + gap) - (tile_w // 2 if r % 2 else 0)
        collage.paste(t, (x, r * (tile_h + gap)))

collage = collage.rotate(7, resample=Image.BICUBIC, expand=False)
cx, cy = collage.width // 2, collage.height // 2
page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))
wash = Image.new("RGB", (PW, PH), CHARCOAL)
page = Image.blend(page, wash, 0.74)
# Magenta veil, very light
veil = Image.new("RGB", (PW, PH), MAGENTA)
page = Image.blend(page, veil, 0.06)
dark = Image.new("RGB", (PW, PH), (12, 12, 12))
edge = Image.new("L", (PW, PH), 130)
de = ImageDraw.Draw(edge)
de.ellipse((PW * -0.22, PH * -0.16, PW * 1.22, PH * 1.16), fill=0)
page = Image.composite(dark, page, edge)
save(page, "backcover.jpg", 88)
print("done")
