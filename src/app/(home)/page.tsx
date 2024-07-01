import Image from "next/image";
import { metamorphous } from "../ui/fonts";
import { RegisterLink } from "@/app/components/RegisterLink";
import { LogoTagline } from "../components/LogoTagline";
import { Definition } from "../components/Definition";

export default function Home() {
  return (
    <main className="p-8">
      <div className="text-center">
        <Image
          src="/background.jpg"
          alt="A gravel road surrounded by fields that turns into a rolling hill in the distance."
          width={2048}
          height={1367}
          className="absolute right-0 top-0 z-1000"
          priority
        />
        <LogoTagline />
      </div>
      <div className="text-center flex flex-col gap-4">
        <h4 className="text-xl mt-2">September 28, 2024</h4>
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
          src="/harvest_festival.jpg"
          alt="Harvest Festival"
          width={2059}
          height={1433}
          className="col-span-1"
        />
      </div>
    </main>
  );
}
