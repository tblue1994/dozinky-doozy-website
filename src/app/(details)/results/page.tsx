import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const h2ClassNames = "text-2xl";

export default function Results() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Fastest Known Time</h1>
      <h2 className={h2ClassNames}>Steve Morin - 9 hours 8 minutes - 2024</h2>
      <Link
        href="/2024-results.pdf"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2024 Results
      </Link>
    </div>
  );
}
