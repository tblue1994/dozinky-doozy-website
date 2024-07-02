import Image from "next/image";
import Link from "next/link";
import { RegisterLink } from "./RegisterLink";

export const NavBar = ({
  textColor = "black",
}: {
  textColor?: "white" | "black";
}) => {
  const linkClassNames = `mx-2 text-${textColor} hover:underline`;
  return (
    <nav className="flex shrink-0 items-center pt-1 px-4 w-full z-10">
      <Link href="\" className="mr-auto hover:opacity-85">
        <Image
          priority
          src={`/wordmark_${textColor}.svg`}
          alt="Logo"
          width={120}
          height={120}
          className="my-[-16%]"
        />
      </Link>
      <Link href="/routes" className={linkClassNames}>
        Routes
      </Link>
      <Link href="/team" className={linkClassNames}>
        Team
      </Link>
      <Link href="/lodging" className={linkClassNames}>
        Lodging
      </Link>
      <RegisterLink className="ml-2" />
    </nav>
  );
};
