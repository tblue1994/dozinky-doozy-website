import { TopMenu } from "./TopMenu";
import { SlideOutMenu } from "./SlideOutMenu";
import clsx from "clsx";

export type LinkNavItem = {
  href: string;
  text: string;
};
export type NavItemWithChildren = {
  text: string;
  children: LinkNavItem[];
};
export type NavItem = LinkNavItem | NavItemWithChildren;

const NavItems: NavItem[] = [
  {
    text: "Event",
    children: [
      { href: "/routes", text: "Routes" },
      // { href: "/faq", text: "FAQ" },
    ],
  },
  {
    text: "About Us",
    children: [
      { href: "/team", text: "Team" },
      { href: "/contact", text: "Contact" },
    ],
  },
  { href: "/lodging", text: "Lodging" },
];

export const NavBar = ({
  textColor = "black",
}: {
  textColor?: "white" | "black";
}) => {
  const isServer = typeof window === "undefined";
  const slideoutClassNames = clsx("sm:hidden", {
    "xs:hidden": isServer,
  });
  const topMenuClassNames = clsx("hidden sm:flex", {
    "xs:flex": isServer,
  });
  return (
    <nav className="sm:w-full absolute top-0 left-0">
      <SlideOutMenu
        items={NavItems}
        textColor={textColor}
        className={slideoutClassNames}
      />
      <TopMenu
        className={topMenuClassNames}
        items={NavItems}
        textColor={textColor}
      />
    </nav>
  );
};
