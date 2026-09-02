"""Generate the Prime Crest brand kit for the flipbook issues.

Outputs:
  public/brand/logo-primecrest.png      transparent lockup (crest + wordmark, cream, red period)
  public/brand/barcode-primecrest.png   decorative Code128 + scannable QR -> theprimecrest.com
  public/issues/espey/backcover.jpg     Insights-style rotated cover collage, ink wash
"""
import os
import random

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWSREADER = os.path.join(ROOT, "scripts", "newsreader.ttf")
INTER = os.path.join(ROOT, "scripts", "inter.ttf")
BRAND = os.path.join(ROOT, "public", "brand")

CREAM = (244, 239, 230, 255)
ACCENT = (196, 48, 58, 255)  # PrimeCrest accent red, brightened for dark grounds
INK = (18, 17, 16)


def font(path, size, wght, opsz=None):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([opsz, wght] if opsz is not None else [wght])
    except Exception:
        pass
    return f


def draw_crest(draw, x, y, h, fill):
    """Angular double-chevron peak from Logo.tsx (viewBox 0 0 32 28)."""
    sc = h / 28.0

    def P(px, py):
        return (x + px * sc, y + py * sc)

    draw.polygon([P(16, 2), P(28, 16), P(22, 16), P(16, 8.5), P(10, 16), P(4, 16)], fill=fill)
    inner = (*fill[:3], 128)
    draw.polygon([P(16, 12), P(24, 22), P(20, 22), P(16, 16.5), P(12, 22), P(8, 22)], fill=inner)


def make_logo():
    name_f = font(NEWSREADER, 220, 640, opsz=72)
    name = "PrimeCrest"
    probe = Image.new("RGBA", (10, 10))
    d = ImageDraw.Draw(probe)
    name_w = d.textlength(name, font=name_f)
    dot_w = d.textlength(".", font=name_f)
    asc, desc = name_f.getmetrics()

    crest_h = 170
    crest_w = crest_h * (32 / 28)
    gap = 46
    pad = 30

    w = int(crest_w + gap + name_w + dot_w + pad * 2)
    h = int(asc + desc + pad * 2)
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    crest_y = pad + asc - crest_h - 12
    draw_crest(draw, pad, crest_y, crest_h, CREAM)
    draw.text((pad + crest_w + gap, pad), name, font=name_f, fill=CREAM)
    draw.text((pad + crest_w + gap + name_w, pad), ".", font=name_f, fill=ACCENT)

    bbox = img.getbbox()
    img = img.crop((bbox[0] - 8, bbox[1] - 8, bbox[2] + 8, bbox[3] + 8))
    out = os.path.join(BRAND, "logo-primecrest.png")
    img.save(out)
    print("saved:", out, img.size)


def make_barcode():
    import qrcode
    from barcode import Code128
    from barcode.writer import ImageWriter

    tmp = os.path.join(BRAND, "_tmp_code128")
    Code128("THEPRIMECREST", writer=ImageWriter()).save(
        tmp,
        options={
            "module_height": 22.0,
            "module_width": 0.32,
            "quiet_zone": 1.5,
            "write_text": False,
            "background": "white",
            "foreground": "black",
        },
    )
    bars = Image.open(tmp + ".png").convert("RGB")
    os.remove(tmp + ".png")

    qr = qrcode.QRCode(border=1, box_size=10, error_correction=qrcode.constants.ERROR_CORRECT_M)
    qr.add_data("https://theprimecrest.com")
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")

    H = 220
    label_f = font(INTER, 26, 700)
    label = "THEPRIMECREST.COM"

    bars_h = 150
    bars_w = int(bars.width * (bars_h / bars.height))
    bars = bars.resize((bars_w, bars_h), Image.NEAREST)

    qr_side = 180
    qr_img = qr_img.resize((qr_side, qr_side), Image.NEAREST)

    pad = 24
    gap = 26
    w = pad + bars_w + gap + qr_side + pad
    plate = Image.new("RGB", (w, H), "white")
    plate.paste(bars, (pad, 18))
    plate.paste(qr_img, (pad + bars_w + gap, (H - qr_side) // 2))

    d = ImageDraw.Draw(plate)
    track = label_f.size * 0.18
    lw = sum(label_f.getlength(c) for c in label) + track * (len(label) - 1)
    x = pad + (bars_w - lw) / 2
    y = 18 + bars_h + 8
    for ch in label:
        d.text((x, y), ch, font=label_f, fill=(10, 10, 10))
        x += label_f.getlength(ch) + track

    out = os.path.join(BRAND, "barcode-primecrest.png")
    plate.save(out)
    print("saved:", out, plate.size)


def make_backcover():
    src_dir = os.path.join(ROOT, "public", "issues", "espey")
    names = ["cover.jpg", "wood.jpg", "expo.jpg", "gaze.jpg", "hands.jpg"]
    tiles = [Image.open(os.path.join(src_dir, n)).convert("RGB") for n in names]

    # Page canvas 1000x1414; build an oversized collage, rotate it, crop centre.
    PW, PH = 1000, 1414
    big = int((PW**2 + PH**2) ** 0.5) + 400
    collage = Image.new("RGB", (big, big), INK)

    tile_w, tile_h = 240, 330
    gap = 14
    rng = random.Random(26)
    cols = big // (tile_w + gap) + 2
    rows = big // (tile_h + gap) + 2
    for r in range(rows):
        for c in range(cols):
            t = tiles[(r * cols + c + rng.randrange(2)) % len(tiles)]
            th = tile_h
            tw = int(t.width * (th / t.height))
            t = t.resize((tw, th), Image.LANCZOS)
            left = max(0, (tw - tile_w) // 2)
            t = t.crop((left, 0, left + tile_w, th))
            x = c * (tile_w + gap) - (tile_w // 2 if r % 2 else 0)
            collage.paste(t, (x, r * (tile_h + gap)))

    collage = collage.rotate(8, resample=Image.BICUBIC, expand=False)
    cx, cy = collage.width // 2, collage.height // 2
    page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))

    # Deep ink wash so the collage reads as texture, brand sits on top.
    wash = Image.new("RGB", (PW, PH), INK)
    page = Image.blend(page, wash, 0.78)

    # Vignette: darker edges, slightly lifted centre.
    vig = Image.new("L", (PW, PH), 0)
    dv = ImageDraw.Draw(vig)
    dv.ellipse((-PW * 0.35, -PH * 0.25, PW * 1.35, PH * 1.25), fill=46)
    page = Image.composite(Image.blend(page, wash, -0.0), page, vig.point(lambda v: 0))
    dark = Image.new("RGB", (PW, PH), (8, 7, 6))
    edge = Image.new("L", (PW, PH), 110)
    de = ImageDraw.Draw(edge)
    de.ellipse((PW * -0.25, PH * -0.18, PW * 1.25, PH * 1.18), fill=0)
    page = Image.composite(dark, page, edge)

    out = os.path.join(src_dir, "backcover.jpg")
    page.save(out, "JPEG", quality=88)
    print("saved:", out, page.size)


def make_coverart():
    """Front cover plate: blurred ground with the subject anchored bottom-right,
    leaving a clean left column and headroom for masthead + cover lines."""
    from PIL import ImageEnhance, ImageFilter

    src = os.path.join(ROOT, "public", "issues", "espey", "cover.jpg")
    PW, PH = 1000, 1414
    photo = Image.open(src).convert("RGB")

    # Ground: the same photo blown up, blurred, and darkened.
    scale = max(PW / photo.width, PH / photo.height) * 1.15
    bg = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.LANCZOS)
    bx = (bg.width - PW) // 2
    by = (bg.height - PH) // 2
    bg = bg.crop((bx, by, bx + PW, by + PH))
    bg = bg.filter(ImageFilter.GaussianBlur(48))
    bg = ImageEnhance.Brightness(bg).enhance(0.32)

    # Subject: sharp, ~88% page height, anchored bottom-right.
    sh = int(PH * 0.88)
    sw = int(photo.width * (sh / photo.height))
    subj = photo.resize((sw, sh), Image.LANCZOS)
    strip_w = 660
    left = (sw - strip_w) // 2 + 30  # bias right to keep his chair arm
    subj = subj.crop((max(0, left), 0, max(0, left) + strip_w, sh))
    sx, sy = PW - strip_w, PH - sh

    # Seam mask: multiplied left-edge and top-edge fades for a smooth corner.
    from PIL import ImageChops

    fade_w, fade_h = 210, 170
    mh = Image.new("L", (strip_w, sh), 255)
    dm = ImageDraw.Draw(mh)
    for x in range(fade_w):
        dm.line([(x, 0), (x, sh)], fill=int(255 * (x / fade_w)))
    mv = Image.new("L", (strip_w, sh), 255)
    dv = ImageDraw.Draw(mv)
    for y in range(fade_h):
        dv.line([(0, y), (strip_w, y)], fill=int(255 * (y / fade_h)))
    mask = ImageChops.multiply(mh, mv)
    bg.paste(subj, (sx, sy), mask)

    # Gentle bottom-left vignette so the name block reads.
    grad = Image.new("L", (1, 320))
    for y in range(320):
        grad.putpixel((0, y), int(120 * (y / 320)))
    dark = Image.new("RGB", (PW, 320), (8, 9, 8))
    bg.paste(dark, (0, PH - 320), grad.resize((PW, 320)))

    out = os.path.join(ROOT, "public", "issues", "espey", "coverart.jpg")
    bg.save(out, "JPEG", quality=90)
    print("saved:", out, bg.size)


if __name__ == "__main__":
    make_logo()
    make_barcode()
    make_backcover()
    make_coverart()
