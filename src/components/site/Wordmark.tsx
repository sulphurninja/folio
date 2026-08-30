/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string | null;
  light?: boolean;
}) {
  const mark = (
    <span className={cn("inline-flex items-center gap-3 whitespace-nowrap", className)}>
      <img src="/brand/logo-fortiora.png" alt="" className="h-[1.3em] w-auto" aria-hidden />
      <span className="flex flex-col justify-center gap-[0.14em] leading-none">
        <span className="font-sans text-[0.58em] font-bold tracking-[0.3em] text-paper">
          FORTIORA
        </span>
        <span className="font-sans text-[0.28em] font-semibold tracking-[0.52em] text-[#e8c56b]">
          EDITIONS
        </span>
      </span>
    </span>
  );
  if (!href) return mark;
  return (
    <Link href={href} className="no-underline">
      {mark}
    </Link>
  );
}
