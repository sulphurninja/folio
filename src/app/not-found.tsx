import Link from "next/link";
import { Wordmark } from "@/components/site/Wordmark";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <Wordmark className="text-[1.8rem] text-paper" />
      <h1 className="headline mt-10 text-[2rem] text-paper">This issue is off the stand.</h1>
      <p className="mt-3 font-sans text-fog-dim">The page you asked for is not in the archive.</p>
      <Link href="/" className="btn-gold mt-8">
        Return to the reading room
      </Link>
    </div>
  );
}
