"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/site/Wordmark";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";
  const [busy, setBusy] = useState(false);

  if (isLogin) return <>{children}</>;

  async function logout() {
    setBusy(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-dvh bg-stage">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4">
          <div className="flex items-center gap-6">
            <Wordmark className="text-[1.4rem] text-paper" href="/admin" />
            <nav className="flex items-center gap-4 font-sans text-[0.82rem]">
              <Link
                href="/admin"
                className={`no-underline ${pathname === "/admin" ? "text-paper" : "text-fog-dim hover:text-paper"}`}
              >
                Issues
              </Link>
              <Link href="/" className="text-fog-dim no-underline hover:text-paper">
                Reading room
              </Link>
            </nav>
          </div>
          <button
            type="button"
            onClick={logout}
            disabled={busy}
            className="font-sans text-[0.78rem] text-fog-dim hover:text-paper disabled:opacity-50"
          >
            Sign out
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-5 py-10">{children}</main>
    </div>
  );
}
