import Image from "next/image";

export const LogoTaglineHeader = () => {
  return (
    <header className="flex flex-col h-auto pt-16 pb-4 bg-gravel-roads bg-cover bg-bottom bg-white bg-blend-lighten bg-opacity-15">
      <Image
        priority
        src="/logo_light.svg"
        alt="Dozinky Doozy words on a red banner surrounded by a wreath of wheat stalks, blue flowers, and bicycle wheel."
        width={4501}
        height={4501}
        className="w-1/2 h-auto mx-auto my-[-10%] mt-[-20%] sm:mt-[-10%]"
      />
      <Image
        priority
        src="/tagline.png"
        alt="Reap What You Sow"
        width={4501}
        height={600}
        className="w-1/2 h-auto mx-auto"
      />
    </header>
  );
};
