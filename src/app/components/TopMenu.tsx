import clsx from "clsx";
import { LinkNavItem, NavItem, NavItemWithChildren } from "./NavBar";
import Image from "next/image";
import Link from "next/link";
import { RegisterLink } from "./RegisterLink";

export const TopMenu = ({
  items,
  textColor = "black",
  className,
}: {
  items: NavItem[];
  textColor?: "white" | "black";
  className?: string;
}) => {
  const baseLinkClassNames = `mx-1 md:mx-2 text-${textColor}`;
  const linkClassNames = `${baseLinkClassNames} hover:underline`;
  const popoverParentClassNames = `${baseLinkClassNames} group relative flex-shrink-0`;
  const popoverClassNames = clsx(
    "hidden group-hover:block absolute right-0 bg-opacity-85 rounded p-1 text-right",
    {
      "bg-sapphire-300": textColor === "white",
      "bg-sapphire-200": textColor === "black",
    }
  );
  const menuClassNames = `shrink-0 items-center pt-1 px-4 w-full z-10 ${className}`;

  return (
    <div className={menuClassNames}>
      <Link
        href="\"
        className="mr-auto hover:opacity-85 flex-shrink-1 md:flex-shrink-0"
      >
        <Image
          priority
          src={`/wordmark_${textColor}.svg`}
          alt="Logo"
          width={120}
          height={120}
          className="my-[-16%]"
        />
      </Link>
      {items.map((item) => {
        if ((item as LinkNavItem).href) {
          const link = item as LinkNavItem;
          return (
            <Link href={link.href} className={linkClassNames} key={link.href}>
              {link.text}
            </Link>
          );
        } else if ((item as NavItemWithChildren).children) {
          const parent = item as NavItemWithChildren;
          return (
            <span className={popoverParentClassNames} key={parent.text}>
              About &#9662;
              <ul className={popoverClassNames}>
                {parent.children.map(({ href, text }) => (
                  <li key={`${parent.text}-${href}`}>
                    <Link href={href} className={linkClassNames}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </span>
          );
        }
      })}
      <RegisterLink className="ml-2" />
    </div>
  );
};
