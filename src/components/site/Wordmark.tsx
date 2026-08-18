import Link from "next/link";
import { cn } from "@/lib/utils";

export function Wordmark({
  className = "",
  href = "/",
  light = true,
}: {
  className?: string;
  href?: string | null;
  light?: boolean;
}) {
  const mark = (
    <span className={cn("wordmark inline-block whitespace-nowrap", className)}>
      Folio
      <span className={light ? "text-accent" : "text-accent"}>.</span>
    </span>
  );
  if (!href) return mark;
  return (
    <Link href={href} className="no-underline">
      {mark}
    </Link>
  );
}
