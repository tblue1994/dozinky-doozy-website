import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center pb-4">
      <Image
        src={"/logo_black.svg"}
        alt="Logo"
        width={4501}
        height={4501}
        className="w-28 h-auto"
      />
      <div className="flex flex-row items-center gap-2">
        <Link href="https://www.instagram.com/dozinkydoozy/" target="_blank">
          <Image
            className="w-auto h-7"
            src="/instagram.png"
            alt="Instagram"
            width={60}
            height={60}
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61558073317871"
          target="_blank"
        >
          <Image
            className="w-auto h-7"
            src="/facebook.png"
            alt="Facebook"
            width={60}
            height={60}
          />
        </Link>
        <Link
          href="/contact"
        >
          <Image
            className="w-auto h-7"
            src="/email.png"
            alt="Contact Us"
            width={60}
            height={60}
          />
        </Link>
      </div>
    </footer>
  );
};
