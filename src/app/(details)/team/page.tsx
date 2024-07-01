import { headerText } from "@/app/ui/fonts";
import Image from "next/image";

export default function Team() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div className="col-span-1">
        <Image
          src="/organizer.webp"
          alt="Organizer Trevor Slawnyk on a black gravel bike as he finishes a gravel race."
          className="w-auto"
          width={2048}
          height={2149}
          priority
        />
      </div>
      <div className="col-span-1 flex flex-col gap-3 pt-4">
        <div>
          <span>
            <h2 className="text-base font-semibold uppercase">Organizer</h2>
            <h1 className={`${headerText.className} text-4xl`}>
              Trevor Slawnyk
            </h1>
          </span>

          <h3 className="text-xl">
            Gravel Enthusiast and Ice Cream Connoisseur
          </h3>
        </div>
        <p>
          I started the Doozy in 2024 after the Sto Mil called it quits. The
          Bohemian Alps are such an iconic part of my gravel journey, I just
          knew there needed to be an event out here!
        </p>
      </div>
    </div>
  );
}
