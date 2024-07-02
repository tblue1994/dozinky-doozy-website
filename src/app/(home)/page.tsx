import Image from "next/image";
import { RegisterLink } from "@/app/components/RegisterLink";
import { LogoTaglineHeader } from "../components/LogoTagline";
import { Definition } from "../components/Definition";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LogoTaglineHeader />
      <div className="p-8 max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl mt-2">Saturday, September 28, 2024, 8 AM</h1>
          <h2 className="text-2xl my-2">
            <Link
              href="https://lpnnrd.org/outdoor-recreation/czechland-lake-recreation-area/"
              target="_blank"
              className="hover:text-venetian-red-700"
            >
              Czechland Lake Recreation Area
            </Link>
          </h2>
          <p>
            Come join us in riding 120 miles of beautiful gravel in the Bohemian
            Alps of Prague, Nebraska.
          </p>
          <div className="my-4">
            <RegisterLink className="text-xl">2024 Registration</RegisterLink>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="col-span-1">
            <Definition
              word="Dozinky"
              pronunciation="doh-ZHIN-kee"
              partOfSpeech="noun"
              definition="A Slavic harvest festival celebrated across Central and Eastern
                Europe with a Variety of customs and traditions. One thing that all
                of these festivals celebrate is the culmination of a hard
                year's work and the rewards gained in return."
              className="h-full flex flex-col justify-center"
            />
          </div>
          <Image
            src="/harvest_festival.webp"
            alt="Harvest Festival"
            width={2059}
            height={1433}
            className="col-span-1"
          />
          <div className="col-span-1 md:order-last">
            <Definition
              word="Doozy"
              pronunciation="DOO-zee"
              partOfSpeech="noun"
              definition="Something that is extraordinary or outstanding of its kind. I won't gonna sugar coat it, this one's going to be a challenge! However, you can't truly achieve something without a chance of failure. I believe you have what it takes. Do you?"
              className="h-full flex flex-col justify-center"
            />
          </div>
          <Image
            src="/dozynki.webp"
            alt="Harvest Festival"
            width={2059}
            height={1433}
            className="col-span-1"
          />
        </div>
      </div>
    </>
  );
}
