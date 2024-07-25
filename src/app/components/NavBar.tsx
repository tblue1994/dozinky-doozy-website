import Image from "next/image";
import Link from "next/link";
import { RegisterLink } from "./RegisterLink";
import clsx from "clsx";

const aboutChildren = [
  { href: "/routes", text: "Routes" },
  { href: "/sponsors", text: "Sponsors" },
  // TODO: rules and faq pages
  // { href: "/rules", text: "Rules" },
  // { href: "/faq", text: "FAQ" },
];

const teamChildren = [
  { href: "/team", text: "Team" },
  { href: "/contact", text: "Contact" },
];

export const NavBar = ({
  textColor = "black",
}: {
  textColor?: "white" | "black";
}) => {
  const baseLinkClassNames = `mx-1 md:mx-2 text-${textColor}`
  const linkClassNames = `${baseLinkClassNames} hover:underline`;
  const popoverParentClassNames = `${baseLinkClassNames} group relative flex-shrink-0`;
  const popoverClassNames = clsx(
    'hidden group-hover:block absolute right-0 bg-opacity-85 rounded p-1 text-right',{
    'bg-sapphire-300': textColor === 'white',
    'bg-sapphire-200': textColor === 'black',
  });

  return (
    <nav className="flex shrink-0 items-center pt-1 px-4 w-full z-10">
      <Link href="\" className="mr-auto hover:opacity-85 flex-shrink-1 md:flex-shrink-0">
        <Image
          priority
          src={`/wordmark_${textColor}.svg`}
          alt="Logo"
          width={120}
          height={120}
          className="my-[-16%]"
        />
      </Link>
      <span className={popoverParentClassNames}>
        About &#9662;
        <ul className={popoverClassNames}>
          {aboutChildren.map(({ href, text}) => (
            <li key={href}>
              <Link href={href} className={linkClassNames}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </span>
      <span className={popoverParentClassNames}>
        TEAM &#9662;
        <ul className={popoverClassNames}>
          {teamChildren.map(({ href, text}) => (
            // TODO: different team nav header
            <li key={href}>
              <Link href={href} className={linkClassNames}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </span>
      <Link href="/lodging" className={linkClassNames}>
        Lodging
      </Link>
      <RegisterLink className="ml-2" />
    </nav>
  );
};
