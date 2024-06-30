import Image from "next/image";
import { metamorphous } from "../ui/fonts";
import { RegisterLink } from "@/app/components/RegisterLink";

export default function Home() {
  return (
    <main className="text-black">
      <div className="text-center my-6">
        <h1 className="w-auto">
          <Image
            priority
            src="/logo_light.svg"
            alt="Dozinky Doozy word mark on a red banner surrounded by a wreath of wheat stalks, blue flowers, and bicycle wheel."
            className="w-full"
            width={400}
            height={0}
          />
        </h1>
        <h2 className={`${metamorphous.className} text-4xl -mt-8 uppercase`}>
          Reap What You Sow
        </h2>
      </div>
      <div className="text-center">
        <h4 className="text-lg">September 28, 2024</h4>
        <p>
          Come join us in riding 120 miles of beautiful gravel in the Bohemian
          Alps.
        </p>
        <div className="my-4">
          <RegisterLink className="text-xl" />
        </div>
        <br />
        <p className="text-xs italic">
          Site under construction. Check back later for more details.
        </p>
      </div>
    </main>
  );
}
