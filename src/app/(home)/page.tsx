import Image from "next/image";
import { lusitana } from "../ui/fonts";
import { RegisterLink } from "@/app/components/RegisterLink";

export default function Home() {
  return (
    <main className="text-white">
      <div className="text-center my-6">
        <h1>
          <Image
            priority
            src="/logo_light.svg"
            alt="Dozinky Doozy words on a red banner surrounded by a wreath of wheat stalks, blue flowers, and bicycle wheel."
            width={400}
            height={0}
          />
        </h1>
        <h2 className={`${lusitana.className} text-4xl mt-[-2rem]`}>
          Reap What You Sow
        </h2>
      </div>
      <div className="text-center">
        <h4 className="text-lg">September 28, 2024</h4>
        <p>Some description about the super cool event!</p>
        <div className="my-4">
          <RegisterLink className="text-xl" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl">Sponsors</h3>
      </div>
      <div>
        <p>Dozinky def</p>
        <Image src="/dozynki.jpg" alt="Dozinky" width={400} height={0} />
        <p>Doozy def</p>
        <Image
          src="/harvest_festival.jpg"
          alt="Harvest Festival"
          width={400}
          height={0}
        />
      </div>
    </main>
  );
}
