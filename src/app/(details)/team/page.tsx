import { headerText } from "@/app/ui/fonts";
import Image from "next/image";
import { Suspense } from "react";

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
          Started the Doozy in 2024. I love all things gravel and the Bohemian
          Alps are no exception. I rode one of my first gravel events in the
          Alps and was smitten with the area. These roads and their champagne gravel are just so
          iconic &mdash; I knew we had to keep an event out here.
        </p>
        <p>I hope you find the Alps as enchanting as I do!</p>
      </div>
    </div>
  );
}
