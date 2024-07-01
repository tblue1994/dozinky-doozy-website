import Image from "next/image";

export const LogoTagline = () => {
  return (
    <div className="flex flex-col h-auto">
      <h1>
        <Image
          priority
          src="/logo_light.svg"
          alt="Dozinky Doozy words on a red banner surrounded by a wreath of wheat stalks, blue flowers, and bicycle wheel."
          width={4501}
          height={4501}
          className="w-2/3 h-auto mx-auto my-[-10%] z-1000"
        />
      </h1>
      <h2 className="text-4xl uppercase w-2/3 mx-auto">
        <Image
          priority
          src="/tagline.png"
          alt="Reap What You Sow"
          width={4501}
          height={600}
        />
      </h2>
    </div>
  );
};
