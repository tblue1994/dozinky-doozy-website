import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const h2ClassNames = "text-2xl";

export default function Results() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Course Record</h1>
      <h2 className={h2ClassNames}>
        Stephano Porter - 8 hours 56 minutes - 2025
      </h2>
      <Link
        href="/results-2025.pdf"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2025 Results
      </Link>
      <Link
        href="/2024-results.pdf"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2024 Results
      </Link>
      <br />
      <h1 className={`${headerText.className} text-4xl`}>Photos</h1>
      <h2 className={h2ClassNames}>2025</h2>
      <Link
        href="https://gallery.ericturner.photography/-dozinkydoozy/gallery"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2025 - Eric Turner Photography
      </Link>
      <Link
        href="https://matttakespictures.zenfoliosite.com/dozinky-doozy-2025"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2025 - Matt Pearson Photography
      </Link>
      <h2 className={h2ClassNames}>2024</h2>
      <Link
        href="https://gallery.ericturner.photography/-dozinkydoozy/gallery"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2024 - Eric Turner Photography
      </Link>
      <Link
        href="https://matttakespictures.zenfoliosite.com/dozinky-doozy-2024"
        target="_blank"
        className={`${h2ClassNames} underline hover:text-venetian-red-600`}
      >
        2024 - Matt Pearson Photography
      </Link>
    </div>
  );
}
