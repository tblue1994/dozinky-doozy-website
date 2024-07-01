import Image from "next/image";
import { RegisterLink } from "@/app/components/RegisterLink";
import { LogoTagline } from "../components/LogoTagline";
import { Definition } from "../components/Definition";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <LogoTagline />
      <div className="p-8">
        <div className="text-center my-12">
          <h3 className="text-xl mt-2">Saturday, September 28, 2024</h3>
          <p className="text-lg mb-2">
            <Link
              href="https://lpnnrd.org/outdoor-recreation/czechland-lake-recreation-area/"
              target="_blank"
              className="hover:text-venetian-red-700"
            >
              Czechland Lake Recreation Area
            </Link>
          </p>
          <p>
            Come join us in riding 120 miles of beautiful gravel in the Bohemian
            Alps of Prague, Nebraska.
          </p>
          <div className="my-4">
            <RegisterLink className="text-xl" />
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
              className="my-4"
            />
            <Definition
              word="Doozy"
              pronunciation="DOO-zee"
              partOfSpeech="noun"
              definition="Something that is extraordinary or outstanding of its kind. I ain't gonna sugar coat it, folks. This one's gonna to be a challenge!"
            />
          </div>
          <Image
            src="/harvest_festival.webp"
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
