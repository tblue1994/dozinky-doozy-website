import { TopMenu } from "./TopMenu";
import { SlideOutMenu } from "./SlideOutMenu";

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
    text: "About",
    children: [
      { href: "/routes", text: "Routes" },
      { href: "/sponsors", text: "Sponsors" },
    ],
  },
  {
    text: "TEAM",
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
  return (
    <nav className="sm:w-full">
      <SlideOutMenu
        items={NavItems}
        textColor={textColor}
        className="sm:hidden"
      />
      <TopMenu
        className="hidden sm:flex"
        items={NavItems}
        textColor={textColor}
      />
    </nav>
  );
};
