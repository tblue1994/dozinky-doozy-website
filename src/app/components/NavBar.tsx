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
    <nav className="flex shrink-0 items-center px-4 w-full">
      <Link href="\" className="mr-auto">
        <Image
          priority
          src={`/wordmark_${textColor}.svg`}
          alt="Logo"
          width={120}
          height={120}
        />
      </Link>
      <Link href="/routes" className={linkClassNames}>
        Routes
      </Link>
      <Link href="/team" className={linkClassNames}>
        The Team
      </Link>
      <Link href="/lodging" className={linkClassNames}>
        Lodging
      </Link>
      <RegisterLink />
    </nav>
  );
};
