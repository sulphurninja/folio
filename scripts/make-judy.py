"""Generate the Judy Stevens issue assets for the flipbook.

Outputs:
  public/issues/judy/coverart.jpg     Cover with teal gradient and abstract elements
  public/issues/judy/backcover.jpg    Collage-style back cover
  public/issues/judy/portrait.jpg     Placeholder portrait
  public/issues/judy/lecture.jpg      Placeholder lecture hall
  public/issues/judy/wisdom.jpg       Placeholder wisdom imagery
"""
import os
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "issues", "judy")
NEWSREADER = os.path.join(ROOT, "scripts", "newsreader.ttf")
INTER = os.path.join(ROOT, "scripts", "inter.ttf")

FOREST = (15, 31, 24)
RACING = (30, 61, 47)
CREAM = (244, 239, 230)
INK = (8, 14, 11)

# kept for older placeholder generators
TEAL = RACING
TEAL_DEEP = FOREST
AMBER = CREAM
PAPER = CREAM


def font(path, size, wght, opsz=None):
    f = ImageFont.truetype(path, size)
    try:
        f.set_variation_by_axes([opsz, wght] if opsz is not None else [wght])
    except Exception:
        pass
    return f


def make_gradient(size, color1, color2, vertical=True):
    """Create a gradient image."""
    w, h = size
    img = Image.new("RGB", (w, h))
    for i in range(h if vertical else w):
        ratio = i / (h if vertical else w)
        r = int(color1[0] * (1 - ratio) + color2[0] * ratio)
        g = int(color1[1] * (1 - ratio) + color2[1] * ratio)
        b = int(color1[2] * (1 - ratio) + color2[2] * ratio)
        if vertical:
            for j in range(w):
                img.putpixel((j, i), (r, g, b))
        else:
            for j in range(h):
                img.putpixel((i, j), (r, g, b))
    return img


def make_coverart():
    """PrimeCrest cover plate: dark left column, subject anchored right."""
    from PIL import ImageEnhance, ImageFilter, ImageChops

    src = os.path.join(OUT_DIR, "lecture.jpg")
    if not os.path.exists(src):
        src = os.path.join(OUT_DIR, "wisdom.jpg")
    PW, PH = 1000, 1414
    photo = Image.open(src).convert("RGB")

    scale = max(PW / photo.width, PH / photo.height) * 1.2
    bg = photo.resize((int(photo.width * scale), int(photo.height * scale)), Image.LANCZOS)
    bx = (bg.width - PW) // 2
    by = (bg.height - PH) // 2
    bg = bg.crop((bx, by, bx + PW, by + PH))
    bg = bg.filter(ImageFilter.GaussianBlur(42))
    bg = ImageEnhance.Brightness(bg).enhance(0.28)
    wash = Image.new("RGB", (PW, PH), FOREST)
    bg = Image.blend(bg, wash, 0.42)

    sh = int(PH * 0.9)
    sw = int(photo.width * (sh / photo.height))
    subj = photo.resize((sw, sh), Image.LANCZOS)
    strip_w = 620
    left = max(0, sw - strip_w)
    subj = subj.crop((left, 0, left + strip_w, sh))
    sx, sy = PW - strip_w, PH - sh

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
    bg.paste(subj, (sx, sy), mask)

    # Clear left column for masthead + stacked title.
    col = Image.new("RGB", (380, PH), FOREST)
    cg = Image.new("L", (380, PH), 0)
    dc = ImageDraw.Draw(cg)
    for x in range(380):
        dc.line([(x, 0), (x, PH)], fill=int(210 * (1 - x / 380)))
    bg.paste(col, (0, 0), cg)

    grad = Image.new("L", (1, 360))
    for y in range(360):
        grad.putpixel((0, y), int(150 * (y / 360)))
    dark = Image.new("RGB", (PW, 360), INK)
    bg.paste(dark, (0, PH - 360), grad.resize((PW, 360)))

    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, "coverart.jpg")
    bg.save(out, "JPEG", quality=90)
    print("saved:", out, bg.size)
    cover_out = os.path.join(OUT_DIR, "cover.jpg")
    bg.save(cover_out, "JPEG", quality=90)
    print("saved:", cover_out)


def make_backcover():
    """Insights-style rotated collage, forest wash — PrimeCrest back plate."""
    names = ["lecture.jpg", "wisdom.jpg", "portrait.jpg"]
    tiles = []
    for n in names:
        p = os.path.join(OUT_DIR, n)
        if os.path.exists(p):
            tiles.append(Image.open(p).convert("RGB"))
    if not tiles:
        tiles = [Image.new("RGB", (400, 560), RACING)]

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
            tw = int(t.width * (tile_h / t.height))
            t = t.resize((tw, tile_h), Image.LANCZOS)
            left = max(0, (tw - tile_w) // 2)
            t = t.crop((left, 0, min(left + tile_w, tw), tile_h))
            if t.width < tile_w:
                pad = Image.new("RGB", (tile_w, tile_h), INK)
                pad.paste(t, ((tile_w - t.width) // 2, 0))
                t = pad
            x = c * (tile_w + gap) - (tile_w // 2 if r % 2 else 0)
            collage.paste(t, (x, r * (tile_h + gap)))

    collage = collage.rotate(8, resample=Image.BICUBIC, expand=False)
    cx, cy = collage.width // 2, collage.height // 2
    page = collage.crop((cx - PW // 2, cy - PH // 2, cx + PW // 2, cy + PH // 2))

    wash = Image.new("RGB", (PW, PH), FOREST)
    page = Image.blend(page, wash, 0.78)
    dark = Image.new("RGB", (PW, PH), INK)
    edge = Image.new("L", (PW, PH), 110)
    de = ImageDraw.Draw(edge)
    de.ellipse((PW * -0.25, PH * -0.18, PW * 1.25, PH * 1.18), fill=0)
    page = Image.composite(dark, page, edge)

    out = os.path.join(OUT_DIR, "backcover.jpg")
    page.save(out, "JPEG", quality=88)
    print("saved:", out, page.size)


def make_portrait():
    """Create an abstract portrait placeholder."""
    size = (600, 600)
    img = make_gradient(size, TEAL, TEAL_DEEP)
    draw = ImageDraw.Draw(img, "RGBA")
    
    # Abstract person silhouette using circles and shapes
    cx, cy = size[0] // 2, size[1] // 2 - 40
    
    # Head
    draw.ellipse([cx - 70, cy - 120, cx + 70, cy + 20], fill=(*PAPER[:3], 60))
    
    # Shoulders
    draw.ellipse([cx - 150, cy + 40, cx + 150, cy + 200], fill=(*PAPER[:3], 40))
    
    # Subtle amber accent
    draw.ellipse([cx - 30, cy - 80, cx + 30, cy - 20], fill=(*AMBER[:3], 30))
    
    out = os.path.join(OUT_DIR, "portrait.jpg")
    img.save(out, "JPEG", quality=90)
    print("saved:", out, img.size)


def make_lecture():
    """Create an abstract lecture hall image."""
    PW, PH = 1000, 700
    img = make_gradient((PW, PH), (25, 40, 50), TEAL_DEEP)
    draw = ImageDraw.Draw(img, "RGBA")
    
    # Abstract rows of seats/audience
    rng = random.Random(1987)
    for row in range(8):
        y = 200 + row * 55
        for col in range(20):
            x = col * 55 + rng.randint(-10, 10)
            w = 40 + rng.randint(-5, 5)
            h = 35 + rng.randint(-5, 5)
            alpha = 30 + row * 5
            draw.ellipse([x, y, x + w, y + h], fill=(*PAPER[:3], alpha))
    
    # Podium/stage area at front
    draw.rectangle([PW // 2 - 100, 80, PW // 2 + 100, 180], fill=(*AMBER[:3], 60))
    
    # Light from above
    for r in range(200, 0, -5):
        alpha = int(20 * (1 - r / 200))
        draw.ellipse([PW // 2 - r, 0 - r // 2, PW // 2 + r, r], fill=(*PAPER[:3], alpha))
    
    out = os.path.join(OUT_DIR, "lecture.jpg")
    img.save(out, "JPEG", quality=90)
    print("saved:", out, img.size)


def make_wisdom():
    """Create an abstract wisdom/knowledge image."""
    PW, PH = 1000, 700
    img = make_gradient((PW, PH), TEAL, (20, 50, 60))
    draw = ImageDraw.Draw(img, "RGBA")
    
    # Concentric circles representing growth and wisdom
    cx, cy = PW // 2, PH // 2
    for r in range(50, 400, 30):
        alpha = int(40 * (1 - r / 400))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(*AMBER[:3], alpha + 20), width=2)
    
    # Central glow
    for r in range(100, 0, -5):
        alpha = int(60 * (1 - r / 100))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*AMBER[:3], alpha))
    
    # Abstract tree/branches of knowledge
    rng = random.Random(2000)
    for _ in range(12):
        angle = rng.uniform(0, 6.28)
        length = rng.randint(150, 300)
        import math
        x2 = cx + int(math.cos(angle) * length)
        y2 = cy + int(math.sin(angle) * length)
        draw.line([cx, cy, x2, y2], fill=(*PAPER[:3], 30), width=3)
    
    out = os.path.join(OUT_DIR, "wisdom.jpg")
    img.save(out, "JPEG", quality=90)
    print("saved:", out, img.size)


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    make_coverart()
    make_backcover()
