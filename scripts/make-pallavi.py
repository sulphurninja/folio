"""Pallavi Pande issue photography: copy, crops, coverart, backcover."""
import os
from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = r"E:\Builds\magz\pallavi"
OUT = os.path.join(ROOT, "public", "issues", "pallavi")
os.makedirs(OUT, exist_ok=True)

PW, PH = 1680, 2240  # 2x magazine canvas
OXBLOOD = (122, 29, 58)
DARK = (26, 10, 16)


def save(im, name, quality=90):
    path = os.path.join(OUT, name)
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True)
    print("saved", path, im.size)


def fit_cover(im, size, focus=(0.55, 0.32)):
    tw, th = size
    sw, sh = im.size
    scale = max(tw / sw, th / sh)
    nw, nh = int(sw * scale), int(sh * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    cx, cy = int(nw * focus[0]), int(nh * focus[1])
    left = max(0, min(nw - tw, cx - tw // 2))
    top = max(0, min(nh - th, cy - th // 2))
    return im.crop((left, top, left + tw, top + th))


def left_vignette(im, strength=0.82, width=0.44):
    w, h = im.size
    overlay = Image.new("RGB", (w, h), DARK)
    mask = Image.new("L", (w, h), 0)
    md = ImageDraw.Draw(mask)
    band = int(w * width)
    for x in range(band):
        a = int(255 * strength * (1 - x / band) ** 1.12)
        md.line([(x, 0), (x, h)], fill=a)
    return Image.composite(overlay, im, mask)


def warm(im):
    im = ImageEnhance.Color(im).enhance(1.05)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    r, g, b = im.split()
    r = r.point(lambda v: min(255, int(v * 1.03)))
    b = b.point(lambda v: int(v * 0.97))
    return Image.merge("RGB", (r, g, b))


def darken(im, amount=0.58):
    overlay = Image.new("RGB", im.size, DARK)
    return Image.blend(im, overlay, amount)


stand = Image.open(os.path.join(SRC, "pallavi photo.jfif.jpeg")).convert("RGB")
magic = Image.open(os.path.join(SRC, "pallavi.jfif.jpeg")).convert("RGB")
business = Image.open(os.path.join(SRC, "pallavi p.jfif.jpeg")).convert("RGB")
awards = Image.open(os.path.join(SRC, "pallavi pho.jfif.jpeg")).convert("RGB")
logo = Image.open(os.path.join(SRC, "WhatsApp Image 2026-08-26 at 3.05.57 AM.jpeg")).convert("RGB")

# Named masters
save(stand, "cover.jpg", 92)
save(fit_cover(stand, (PW, PH), (0.5, 0.22)), "portrait.jpg", 92)
save(magic, "magic.jpg", 92)
save(business, "business.jpg", 92)
save(awards, "awards.jpg", 92)
save(logo, "dtocs.jpg", 92)
save(fit_cover(business, (PW, PH), (0.52, 0.28)), "feature.jpg", 91)
save(fit_cover(stand, (PW, PH), (0.48, 0.18)), "close.jpg", 91)

# Coverart: subject pinned right, dark open left column for type
cw, ch = stand.size
# trim a little left gray so she sits further right
trimmed = stand.crop((int(cw * 0.08), 0, cw, ch))
tw, th = trimmed.size
scale = PH / th
nw, nh = int(tw * scale), PH
sheet = trimmed.resize((nw, nh), Image.LANCZOS)
canvas = Image.new("RGB", (PW, PH), DARK)
ox = PW - nw + 90
# blurred bleed into the left column
bleed = sheet.crop((0, 0, 120, nh)).resize((max(ox + 120, 1), PH), Image.LANCZOS)
bleed = bleed.filter(ImageFilter.GaussianBlur(22))
bleed = ImageEnhance.Brightness(bleed).enhance(0.38)
canvas.paste(bleed, (0, 0))
canvas.paste(sheet, (ox, 0))
coverart = left_vignette(warm(canvas), strength=0.86, width=0.48)
wash = Image.new("RGB", (PW, PH), OXBLOOD)
wm = Image.new("L", (PW, PH), 0)
wd = ImageDraw.Draw(wm)
for x in range(int(PW * 0.42)):
    wd.line([(x, 0), (x, PH)], fill=int(36 * (1 - x / (PW * 0.42))))
coverart = Image.composite(wash, coverart, wm)
# keep the upper-left even darker so the title at the top of the column reads
top = Image.new("RGB", (PW, int(PH * 0.38)), DARK)
tm = Image.new("L", (PW, int(PH * 0.38)), 0)
td = ImageDraw.Draw(tm)
band = int(PW * 0.5)
for x in range(band):
    for y in range(int(PH * 0.38)):
        pass
for x in range(band):
    td.line([(x, 0), (x, int(PH * 0.38))], fill=int(90 * (1 - x / band) ** 0.9))
coverart.paste(Image.composite(top, coverart.crop((0, 0, PW, int(PH * 0.38))), tm), (0, 0))
save(coverart, "coverart.jpg", 91)

# Backcover: 2×2 collage, ink + oxblood wash
bc = Image.new("RGB", (PW, PH), DARK)
tiles = [
    (fit_cover(stand, (PW // 2, PH // 2), (0.5, 0.2)), (0, 0)),
    (fit_cover(magic, (PW // 2, PH // 2), (0.5, 0.28)), (PW // 2, 0)),
    (fit_cover(business, (PW // 2, PH // 2), (0.5, 0.3)), (0, PH // 2)),
    (fit_cover(awards, (PW // 2, PH // 2), (0.5, 0.28)), (PW // 2, PH // 2)),
]
for tile, pos in tiles:
    bc.paste(tile, pos)
bc = darken(warm(bc), 0.64)
grade = Image.new("RGB", (PW, PH), OXBLOOD)
bc = Image.blend(bc, grade, 0.16)
vig = Image.new("L", (PW, PH), 0)
vd = ImageDraw.Draw(vig)
vd.ellipse([-220, -180, PW + 220, PH + 100], fill=220)
vig = vig.filter(ImageFilter.GaussianBlur(86))
bc = Image.composite(bc, Image.new("RGB", (PW, PH), DARK), vig)
save(bc, "backcover.jpg", 90)

print("done")
