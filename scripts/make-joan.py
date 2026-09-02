"""Joan Gillman issue assets: semantic JPEGs, cover plate, back cover."""
import os
import random

from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "issues", "joan", "_extract")
OUT = os.path.join(ROOT, "public", "issues", "joan")

NAVY = (26, 39, 68)
GOLD = (201, 162, 39)
CREAM = (244, 239, 230)
INK = (12, 16, 28)

PW, PH = 1000, 1414


def jpg(src_name, dest_name, max_edge=2000, quality=90):
    img = Image.open(os.path.join(SRC, src_name)).convert("RGB")
    w, h = img.size
    scale = min(1.0, max_edge / max(w, h))
    if scale < 1:
        img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    dest = os.path.join(OUT, dest_name)
    img.save(dest, "JPEG", quality=quality, optimize=True)
    print("saved:", dest, img.size)
    return dest


def fill_cover(photo, position="right"):
    """Navy open-sky left, portrait parked on the right so type never sits on the face."""
    sky = Image.new("RGB", (PW, PH), NAVY)
    lift = Image.new("RGB", (PW, PH), (42, 56, 88))
    vgrad = Image.new("L", (1, PH))
    for y in range(PH):
        vgrad.putpixel((0, y), int(90 * (1 - abs((y / PH) - 0.28) * 1.4)))
    sky = Image.composite(lift, sky, vgrad.resize((PW, PH)))

    sh = int(PH * 0.98)
    sw = int(photo.width * (sh / photo.height))
    subj = photo.resize((sw, sh), Image.LANCZOS)
    strip_w = 540
    left = max(0, (sw - strip_w) // 2 + 48)
    subj = subj.crop((left, 0, min(sw, left + strip_w), sh))
    if subj.width < strip_w:
        pad = Image.new("RGB", (strip_w, sh), NAVY)
        pad.paste(subj, (strip_w - subj.width, 0))
        subj = pad
    sx, sy = PW - strip_w + 8, PH - sh

    fade_w, fade_h = 240, 160
    mh = Image.new("L", (strip_w, sh), 255)
    dm = ImageDraw.Draw(mh)
    for x in range(fade_w):
        dm.line([(x, 0), (x, sh)], fill=int(255 * (x / fade_w)))
    mv = Image.new("L", (strip_w, sh), 255)
    dv = ImageDraw.Draw(mv)
    for y in range(fade_h):
        dv.line([(0, y), (strip_w, y)], fill=int(255 * (y / fade_h)))
    mask = ImageChops.multiply(mh, mv)
    sky.paste(subj, (sx, sy), mask)

    # Keep the left two-fifths navy so the cream masthead and gold title hold.
    panel_w = int(PW * 0.56)
    panel = Image.new("RGB", (panel_w, PH), NAVY)
    pm = Image.new("L", (panel_w, PH), 0)
    for x in range(panel_w):
        t = 1 - (x / panel_w) ** 1.15
        for y in range(PH):
            pm.putpixel((x, y), int(235 * t))
    sky.paste(panel, (0, 0), pm)

    foot = Image.new("L", (1, 280))
    for y in range(280):
        foot.putpixel((0, y), int(140 * (y / 280)))
    sky.paste(Image.new("RGB", (PW, 280), INK), (0, PH - 280), foot.resize((PW, 280)))
    return sky


def make_coverart():
    photo = Image.open(os.path.join(SRC, "p08_i0.png")).convert("RGB")
    art = fill_cover(photo)
    out = os.path.join(OUT, "coverart.jpg")
    art.save(out, "JPEG", quality=91, optimize=True)
    print("saved:", out, art.size)
    # OG / fallback cover uses the same plate
    art.save(os.path.join(OUT, "cover.jpg"), "JPEG", quality=91, optimize=True)
    print("saved:", os.path.join(OUT, "cover.jpg"), art.size)


def make_backcover():
    names = ["p03_i0.png", "p08_i0.png", "p04_i0.png", "p07_i0.png", "p06_i0.png", "p09_i0.png"]
    tiles = [Image.open(os.path.join(SRC, n)).convert("RGB") for n in names]
    big = int((PW**2 + PH**2) ** 0.5) + 380
    collage = Image.new("RGB", (big, big), INK)
    tile_w, tile_h, gap = 250, 340, 12
    rng = random.Random(26)
    cols = big // (tile_w + gap) + 2
    rows = big // (tile_h + gap) + 2
    for r in range(rows):
        for c in range(cols):
            t = tiles[(r * cols + c + rng.randrange(3)) % len(tiles)]
            th = tile_h
            tw = int(t.width * (th / t.height))
            t = t.resize((max(tw, tile_w), th), Image.LANCZOS)
            left = max(0, (t.width - tile_w) // 2)
            t = t.crop((left, 0, left + tile_w, th))
            x = c * (tile_w + gap) - (tile_w // 2 if r % 2 else 0)
            collage.paste(t, (x, r * (tile_h + gap)))
    collage = collage.rotate(7, resample=Image.BICUBIC, expand=False)
    cx, cy = collage.width // 2, collage.height // 2
    page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))
    wash = Image.new("RGB", (PW, PH), NAVY)
    page = Image.blend(page, wash, 0.82)
    dark = Image.new("RGB", (PW, PH), INK)
    page = Image.blend(page, dark, 0.18)
    out = os.path.join(OUT, "backcover.jpg")
    page.save(out, "JPEG", quality=88, optimize=True)
    print("saved:", out, page.size)


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    jpg("p08_i0.png", "portrait.jpg")
    jpg("p09_i0.png", "portrait-studio.jpg")
    jpg("p03_i0.png", "conference.jpg")
    jpg("p04_i0.png", "nasdaq.jpg")
    jpg("p07_i0.png", "award.jpg")
    jpg("p06_i0.png", "woman-year.jpg")
    make_coverart()
    make_backcover()
