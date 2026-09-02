"""Kohila Sivas issue photography: copy, crops, coverart, backcover."""
import os
import shutil
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = r"E:\Builds\magz\kohila"
OUT = os.path.join(ROOT, "public", "issues", "kohila")
os.makedirs(OUT, exist_ok=True)

PW, PH = 1680, 2240  # 2x magazine canvas
COPPER = (176, 86, 31)
DARK = (26, 16, 8)


def save(im, name, quality=90):
    path = os.path.join(OUT, name)
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True)
    print("saved", path, im.size)


def crop_rel(im, box):
    """box is (l, t, r, b) in 0–1 fractions."""
    w, h = im.size
    return im.crop((int(box[0] * w), int(box[1] * h), int(box[2] * w), int(box[3] * h)))


def fit_cover(im, size, focus=(0.55, 0.38)):
    tw, th = size
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    cx, cy = int(nw * focus[0]), int(nh * focus[1])
    left = max(0, min(nw - tw, cx - tw // 2))
    top = max(0, min(nh - th, cy - th // 2))
    return im.crop((left, top, left + tw, top + th))


def left_vignette(im, strength=0.72, width=0.42):
    w, h = im.size
    overlay = Image.new("RGB", (w, h), DARK)
    mask = Image.new("L", (w, h), 0)
    md = ImageDraw.Draw(mask)
    band = int(w * width)
    for x in range(band):
        a = int(255 * strength * (1 - x / band) ** 1.15)
        md.line([(x, 0), (x, h)], fill=a)
    return Image.composite(overlay, im, mask)


def warm(im, factor=1.08):
    im = ImageEnhance.Color(im).enhance(1.06)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, int(v * 1.04)))
    b = b.point(lambda v: int(v * 0.96))
    return Image.merge("RGB", (r, g, b))


def darken(im, amount=0.55):
    overlay = Image.new("RGB", im.size, DARK)
    return Image.blend(im, overlay, amount)


speak = Image.open(os.path.join(SRC, "photo1.jpeg")).convert("RGB")
piano = Image.open(os.path.join(SRC, "photo2.jpeg")).convert("RGB")
door = Image.open(os.path.join(SRC, "photo3.jpeg")).convert("RGB")

# Named masters
save(piano, "cover.jpg", 92)
save(speak, "speak.jpg", 92)
save(door, "portrait.jpg", 92)
save(piano, "piano.jpg", 92)

# Coverart: fill height, pin subject to the right, dark left column for 280px type
cw, ch = piano.size
scale = PH / ch
nw, nh = int(cw * scale), PH
sheet = piano.resize((nw, nh), Image.LANCZOS)
canvas = Image.new("RGB", (PW, PH), DARK)
# sit the photo on the right so the left stays clear of her face
ox = PW - nw + 40
canvas.paste(sheet, (ox, 0))
# bleed a sliver of the photo's left edge into the dark panel
edge = sheet.crop((0, 0, 80, nh)).resize((max(PW - nw, 1) + 80, PH), Image.LANCZOS)
edge = edge.filter(ImageFilter.GaussianBlur(18))
canvas.paste(edge, (0, 0))
canvas.paste(sheet, (ox, 0))
coverart = left_vignette(warm(canvas), strength=0.78, width=0.46)
# slight copper wash on the left
wash = Image.new("RGB", (PW, PH), COPPER)
wm = Image.new("L", (PW, PH), 0)
wd = ImageDraw.Draw(wm)
for x in range(int(PW * 0.38)):
    wd.line([(x, 0), (x, PH)], fill=int(28 * (1 - x / (PW * 0.38))))
coverart = Image.composite(wash, coverart, wm)
save(coverart, "coverart.jpg", 91)

# Backcover: three-up collage, heavily darkened
bc = Image.new("RGB", (PW, PH), DARK)
tiles = [
    (fit_cover(speak, (PW, PH // 2), (0.42, 0.28)), (0, 0)),
    (fit_cover(piano, (PW // 2, PH // 2), (0.55, 0.35)), (0, PH // 2)),
    (fit_cover(door, (PW // 2, PH // 2), (0.5, 0.28)), (PW // 2, PH // 2)),
]
for tile, pos in tiles:
    bc.paste(tile, pos)
bc = darken(warm(bc), 0.62)
# copper grade
grade = Image.new("RGB", (PW, PH), COPPER)
bc = Image.blend(bc, grade, 0.12)
# vignette
vig = Image.new("L", (PW, PH), 0)
vd = ImageDraw.Draw(vig)
vd.ellipse([-200, -160, PW + 200, PH + 80], fill=220)
vig = vig.filter(ImageFilter.GaussianBlur(80))
bc = Image.composite(bc, Image.new("RGB", (PW, PH), DARK), vig)
save(bc, "backcover.jpg", 90)

# Mosaic tiles (square-ish, 720x720)
save(fit_cover(door, (720, 720), (0.5, 0.22)), "mosaic-door.jpg")
save(fit_cover(speak, (720, 720), (0.38, 0.22)), "mosaic-speak.jpg")
save(fit_cover(piano, (720, 720), (0.58, 0.22)), "mosaic-piano.jpg")
save(fit_cover(speak, (720, 720), (0.72, 0.42)), "mosaic-stage.jpg")

# Extra editorial crops
save(fit_cover(speak, (PW, PH), (0.4, 0.3)), "feature.jpg")
save(fit_cover(door, (PW, PH), (0.52, 0.28)), "close.jpg")

# Drop leftover PDF extracts
for name in os.listdir(OUT):
    if name.startswith("extract_"):
        os.remove(os.path.join(OUT, name))
        print("removed", name)

print("done")
