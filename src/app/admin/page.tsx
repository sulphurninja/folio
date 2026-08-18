"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/components/admin/api";
import { formatDate } from "@/lib/utils";

type Mag = {
  _id: string;
  title: string;
  slug: string;
  issueLabel: string;
  published: boolean;
  pages: unknown[];
  updatedAt: string;
};

export default function AdminHome() {
  const router = useRouter();
  const [items, setItems] = useState<Mag[]>([]);
  const [title, setTitle] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const data = await api<{ items: Mag[] }>("/api/admin/magazines");
    setItems(data.items);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load().catch((e) => setError(e.message));
  }, []);

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setBusy(true);
    try {
      const data = await api<{ item: Mag }>("/api/admin/magazines", {
        method: "POST",
        body: JSON.stringify({ title }),
      });
      router.push(`/admin/magazines/${data.item._id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create.");
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="kicker">The desk</p>
          <h1 className="headline mt-2 text-[2rem] text-paper">Issues</h1>
        </div>
        <form onSubmit={create} className="flex gap-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New issue title"
            className="field w-56"
          />
          <button type="submit" disabled={busy} className="btn-gold whitespace-nowrap">
            New issue
          </button>
        </form>
      </div>
      {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}

      <ul className="mt-10 divide-y divide-line border-t border-line">
        {items.map((m) => (
          <li key={m._id}>
            <Link
              href={`/admin/magazines/${m._id}`}
              className="flex items-center justify-between py-4 no-underline"
            >
              <div>
                <p className="font-sans text-[0.95rem] font-medium text-paper">{m.title}</p>
                <p className="mt-0.5 font-sans text-[0.78rem] text-fog-dim">
                  {m.issueLabel || "Untitled issue"} · {m.pages?.length || 0} pages ·{" "}
                  {m.published ? "Published" : "Draft"}
                </p>
              </div>
              <span className="font-sans text-[0.75rem] text-fog-dim">{formatDate(m.updatedAt)}</span>
            </Link>
          </li>
        ))}
        {!items.length ? (
          <li className="py-12 font-sans text-fog-dim">No issues yet. Start one above.</li>
        ) : null}
      </ul>
    </div>
  );
}
