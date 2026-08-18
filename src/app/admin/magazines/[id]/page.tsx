"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Trash2, Upload } from "lucide-react";
import { api } from "@/components/admin/api";
import { thumbUrl } from "@/lib/utils";

type Page = {
  _id: string;
  url: string;
  caption?: string;
};

type Mag = {
  _id: string;
  title: string;
  slug: string;
  issueLabel: string;
  description: string;
  coverImage: string;
  published: boolean;
  pages: Page[];
};

export default function MagazineEditor() {
  const { id } = useParams<{ id: string }>();
  const [mag, setMag] = useState<Mag | null>(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = useCallback(async () => {
    if (!id) return;
    const data = await api<{ item: Mag }>(`/api/admin/magazines/${id}`);
    setMag(data.item);
  }, [id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load().catch((e) => setError(e.message));
  }, [load]);

  async function save(patch: Partial<Mag> & { pageOrder?: string[]; pagesMeta?: Page[] }) {
    if (!id) return;
    setSaving(true);
    try {
      const data = await api<{ item: Mag }>(`/api/admin/magazines/${id}`, {
        method: "PUT",
        body: JSON.stringify(patch),
      });
      setMag(data.item);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onFiles(files: FileList | null) {
    if (!files?.length || !id) return;
    setUploading(true);
    setError("");
    try {
      const form = new FormData();
      Array.from(files).forEach((f) => form.append("files", f));
      const data = await api<{ item: Mag }>(`/api/admin/magazines/${id}/pages`, {
        method: "POST",
        body: form,
      });
      setMag(data.item);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function removePage(pageId: string) {
    if (!id) return;
    const data = await api<{ item: Mag }>(
      `/api/admin/magazines/${id}/pages?pageId=${pageId}`,
      { method: "DELETE" },
    );
    setMag(data.item);
  }

  function move(i: number, dir: -1 | 1) {
    if (!mag) return;
    const next = [...mag.pages];
    const j = i + dir;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setMag({ ...mag, pages: next });
    save({ pageOrder: next.map((p) => p._id) });
  }

  if (!mag) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="loader-bar w-24">
          <span />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Link href="/admin" className="font-sans text-[0.8rem] text-fog-dim no-underline hover:text-paper">
        ← All issues
      </Link>
      <h1 className="headline mt-4 text-[2rem] text-paper">{mag.title}</h1>
      {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="label">Title</label>
            <input
              className="field"
              value={mag.title}
              onChange={(e) => setMag({ ...mag, title: e.target.value })}
              onBlur={() => save({ title: mag.title })}
            />
          </div>
          <div>
            <label className="label">Issue label</label>
            <input
              className="field"
              value={mag.issueLabel}
              placeholder="Vol. I · Spring 2026"
              onChange={(e) => setMag({ ...mag, issueLabel: e.target.value })}
              onBlur={() => save({ issueLabel: mag.issueLabel })}
            />
          </div>
          <div>
            <label className="label">Description</label>
            <textarea
              className="field min-h-24"
              value={mag.description}
              onChange={(e) => setMag({ ...mag, description: e.target.value })}
              onBlur={() => save({ description: mag.description })}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => save({ published: !mag.published })}
              className={mag.published ? "btn-ghost" : "btn-gold"}
              disabled={saving}
            >
              {mag.published ? "Unpublish" : "Publish"}
            </button>
            {mag.published ? (
              <Link href={`/m/${mag.slug}`} className="font-sans text-[0.82rem] text-accent no-underline">
                Open in the reading room
              </Link>
            ) : null}
          </div>
        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-line-strong bg-stage-2 px-6 py-12 text-center transition hover:border-accent">
          <Upload className="h-6 w-6 text-accent" />
          <p className="mt-3 font-sans text-[0.9rem] text-paper">
            {uploading ? "Uploading pages…" : "Drop page images here"}
          </p>
          <p className="mt-1 font-sans text-[0.78rem] text-fog-dim">
            JPG or PNG, in reading order. First page becomes the cover.
          </p>
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
        </label>
      </div>

      <h2 className="mt-12 font-sans text-[0.75rem] font-bold uppercase tracking-[0.14em] text-fog">
        Pages · {mag.pages.length}
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mag.pages.map((p, i) => (
          <li key={p._id} className="overflow-hidden rounded-md border border-line bg-stage-2">
            <div className="relative aspect-[3/4] bg-stage-3">
              <Image src={thumbUrl(p.url, 480)} alt="" fill className="object-cover" sizes="280px" />
              <span className="absolute left-2 top-2 rounded bg-ink/70 px-2 py-0.5 font-sans text-[0.7rem] tabular-nums text-paper">
                {i + 1}
              </span>
            </div>
            <div className="space-y-2 p-3">
              <input
                className="field py-1.5 text-[0.8rem]"
                placeholder={i === 0 ? "Cover" : `Page ${i + 1} caption`}
                value={p.caption || ""}
                onChange={(e) => {
                  const pages = mag.pages.map((x) =>
                    x._id === p._id ? { ...x, caption: e.target.value } : x,
                  );
                  setMag({ ...mag, pages });
                }}
                onBlur={() => save({ pagesMeta: mag.pages })}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <button type="button" className="tool-btn h-8 w-8" onClick={() => move(i, -1)}>
                    <ArrowUp className="h-3.5 w-3.5" />
                  </button>
                  <button type="button" className="tool-btn h-8 w-8" onClick={() => move(i, 1)}>
                    <ArrowDown className="h-3.5 w-3.5" />
                  </button>
                </div>
                <button
                  type="button"
                  className="tool-btn h-8 w-8 text-red-400"
                  onClick={() => removePage(p._id)}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
