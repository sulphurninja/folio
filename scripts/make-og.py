"""Compose a branded Open Graph card (1200x630) for a Fortiora Editions issue.

Usage:
  python scripts/make-og.py <slug> "<title>" "<kicker>"   -> public/issues/<slug>/og.jpg
  python scripts/make-og.py --default                     -> public/og-default.jpg

Layout: dark editorial panel left (lockup, kicker, title, publisher line),
issue cover bleeding in from the right with a gradient seam.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NEWSREADER = os.path.join(ROOT, "scripts", "newsreader.ttf")
INTER = os.path.join(ROOT, "scripts", "inter.ttf")
MARK = os.path.join(ROOT, "public", "brand", "logo-fortiora.png")

W, H = 1200, 630
S = 2  # supersample
CREAM = (244, 239, 230)
GOLD = (232, 197, 107)
DIM = (244, 239, 230, 168)


def font(path, size, wght, opsz=None):
    f = ImageFont.truetype(path, size * S)
    try:
        f.set_variation_by_axes([opsz, wght] if opsz is not None else [wght])
    except Exception:
        pass
    return f


def tracked(draw, xy, text, fnt, track_em, fill):
    x, y = xy
    track_px = fnt.size * track_em
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += fnt.getlength(ch) + track_px
    return x - track_px


def base_canvas():
    img = Image.new("RGB", (W * S, H * S), (13, 10, 7))
    grad = Image.new("L", (1, H * S))
    for y in range(H * S):
        grad.putpixel((0, y), int(18 + 26 * (y / (H * S))))
    img.paste(Image.merge("RGB", [grad.resize((W * S, H * S))] * 3).point(lambda v: v), (0, 0),
              Image.new("L", (W * S, H * S), 26))
    return img


def draw_lockup(img, draw, x, y, mark_h=54, brand="fortiora"):
    if brand == "primecrest":
        pc = Image.open(os.path.join(ROOT, "public", "brand", "logo-primecrest.png")).convert("RGBA")
        ph = 58 * S
        pw = int(pc.width * (ph / pc.height))
        pc = pc.resize((pw, ph), Image.LANCZOS)
        img.alpha_composite(pc, (x, y))
        return y + ph
    mark = Image.open(MARK).convert("RGBA")
    mw = int(mark.width * (mark_h * S / mark.height))
    mark = mark.resize((mw, mark_h * S), Image.LANCZOS)
    img.alpha_composite(mark, (x, y))
    fx = x + mw + 26 * S
    name_f = font(INTER, 26, 700)
    sub_f = font(INTER, 13, 600)
    tracked(draw, (fx, y + 4 * S), "FORTIORA", name_f, 0.3, CREAM)
    tracked(draw, (fx, y + 40 * S), "EDITIONS", sub_f, 0.52, GOLD)
    return y + mark_h * S


def wrap_title(draw, title, fnt, max_w):
    words = title.split()
    lines, cur = [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if draw.textlength(trial, font=fnt) <= max_w or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines[:3]


def make_issue(slug, title, kicker, brand="fortiora"):
    cover_path = os.path.join(ROOT, "public", "issues", slug, "cover.jpg")
    img = base_canvas().convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")

    # Cover art right side, gradient seam into the panel
    cover = Image.open(cover_path).convert("RGB")
    ch = H * S
    cw = int(cover.width * (ch / cover.height))
    cover = cover.resize((cw, ch), Image.LANCZOS)
    cx = W * S - cw
    img.paste(cover, (max(cx, int(W * S * 0.46)), 0))
    seam_w = int(W * S * 0.34)
    seam = Image.new("L", (seam_w, 1))
    for x in range(seam_w):
        seam.putpixel((x, 0), int(255 * (1 - x / seam_w)))
    seam = seam.resize((seam_w, ch))
    dark = Image.new("RGBA", (seam_w, ch), (13, 10, 7, 255))
    img.paste(dark, (int(W * S * 0.46), 0), seam)
    # subtle full-frame darkening at bottom for footer legibility
    foot_grad = Image.new("L", (1, 160 * S))
    for y in range(160 * S):
        foot_grad.putpixel((0, y), int(150 * (y / (160 * S))))
    img.paste(Image.new("RGBA", (W * S, 160 * S), (10, 8, 6, 255)),
              (0, H * S - 160 * S), foot_grad.resize((W * S, 160 * S)))

    PAD = 72 * S
    draw_lockup(img, draw, PAD, 64 * S, brand=brand)

    kick_f = font(INTER, 19, 650)
    tracked(draw, (PAD, 236 * S), kicker.upper(), kick_f, 0.24, GOLD)

    title_size, line_h = (74, 82) if len(title) <= 46 else (54, 62)
    title_f = font(NEWSREADER, title_size, 640, opsz=72)
    lines = wrap_title(draw, title, title_f, int(W * S * 0.52))
    ty = 286 * S
    for line in lines:
        draw.text((PAD, ty), line, font=title_f, fill=CREAM)
        ty += line_h * S

    foot_f = font(INTER, 15, 600)
    foot = (
        "PRIMECREST  ·  A PRODUCT OF FORTIORA GROUP  ·  THEPRIMECREST.COM"
        if brand == "primecrest"
        else "PUBLISHED BY FORTIORA GROUP  ·  THEFORTIORA.COM"
    )
    tracked(draw, (PAD, (H - 92) * S), foot, foot_f, 0.22, DIM)

    out = os.path.join(ROOT, "public", "issues", slug, "og.jpg")
    img.convert("RGB").resize((W, H), Image.LANCZOS).save(out, "JPEG", quality=90)
    print("saved:", out)


def make_default():
    img = base_canvas().convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    mark = Image.open(MARK).convert("RGBA")
    mh = 150 * S
    mw = int(mark.width * (mh / mark.height))
    mark = mark.resize((mw, mh), Image.LANCZOS)
    img.alpha_composite(mark, ((W * S - mw) // 2, 128 * S))

    name_f = font(INTER, 44, 700)
    sub_f = font(INTER, 18, 600)
    nw = sum(name_f.getlength(c) for c in "FORTIORA") + name_f.size * 0.3 * 7
    tracked(draw, ((W * S - nw) / 2, 330 * S), "FORTIORA", name_f, 0.3, CREAM)
    sw = sum(sub_f.getlength(c) for c in "EDITIONS") + sub_f.size * 0.52 * 7
    tracked(draw, ((W * S - sw) / 2, 396 * S), "EDITIONS", sub_f, 0.52, GOLD)

    tag_f = font(NEWSREADER, 26, 460, opsz=24)
    tag = "Magazines, as they were meant to be held."
    tw = draw.textlength(tag, font=tag_f)
    draw.text(((W * S - tw) / 2, 452 * S), tag, font=tag_f, fill=DIM)

    foot_f = font(INTER, 14, 600)
    foot = "PUBLISHED BY FORTIORA GROUP LLC  ·  THEFORTIORA.COM"
    fw = sum(foot_f.getlength(c) for c in foot) + foot_f.size * 0.22 * (len(foot) - 1)
    tracked(draw, ((W * S - fw) / 2, (H - 78) * S), foot, foot_f, 0.22, (244, 239, 230, 120))

    out = os.path.join(ROOT, "public", "og-default.jpg")
    img.convert("RGB").resize((W, H), Image.LANCZOS).save(out, "JPEG", quality=90)
    print("saved:", out)


if __name__ == "__main__":
    if "--default" in sys.argv:
        make_default()
    else:
        args = [a for a in sys.argv[1:] if not a.startswith("--")]
        brand = "primecrest" if "--primecrest" in sys.argv else "fortiora"
        slug, title, kicker = args[0], args[1], args[2]
        make_issue(slug, title, kicker, brand=brand)
