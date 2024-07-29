import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { LinkNavItem, NavItem, NavItemWithChildren } from "./NavBar";
import { RegisterLink } from "./RegisterLink";

export const SlideOutMenu = ({
  items,
  textColor = "black",
  className,
}: {
  items: NavItem[];
  textColor?: "white" | "black";
  className?: string;
}) => {
  const menuClassNames = `flex text-white group/nav ${className} hover:bg-venetian-red-600`;
  return (
    <div className={menuClassNames}>
      <div className="flex flex-col">
        {
          // fix dynamic color
        }
        <MenuIcon
          className={`stroke-${textColor} text-${textColor} hover:stroke-white`}
        />
        <ul className="hidden group-hover/nav:block">
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((item) => {
            if ((item as LinkNavItem).href) {
              const link = item as LinkNavItem;
              return (
                <li key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                </li>
              );
            } else if ((item as NavItemWithChildren).children) {
              const parent = item as NavItemWithChildren;
              return (
                <li key={parent.text} className="group">
                  {parent.text} &#9662;
                  <ul className="hidden group-hover:flex flex-col">
                    {parent.children.map(({ href, text }) => (
                      <li key={`${parent.text}-${href}`}>
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
          <li>
            <RegisterLink style="link">Register</RegisterLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
