"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Wordmark } from "@/components/site/Wordmark";
import { api } from "@/components/admin/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not sign in.");
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center px-5">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <Wordmark className="text-[1.8rem] text-paper" href={null} />
        <p className="mt-3 font-sans text-[0.9rem] text-fog-dim">The desk. Sign in to publish an issue.</p>
        <label className="label mt-8">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
        />
        <label className="label mt-4">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="field"
        />
        {error ? <p className="mt-3 font-sans text-[0.8rem] text-red-400">{error}</p> : null}
        <button type="submit" disabled={busy} className="btn-gold mt-6 w-full">
          {busy ? "Signing in…" : "Enter"}
        </button>
      </form>
    </div>
  );
}
