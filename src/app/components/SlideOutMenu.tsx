"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { MenuIcon } from "./MenuIcon";
import { LinkNavItem, NavItem, NavItemWithChildren } from "./NavBar";
import { RegisterLink } from "./RegisterLink";
import { useOnClickOutside } from "@/app/hooks/useClickOutside";
import clsx from "clsx";

export const SlideOutMenu = ({
  items,
  textColor = "black",
  className,
}: {
  items: NavItem[];
  textColor?: "white" | "black";
  className?: string;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuState, setSubMenuState] = useState<{
    [key: string]: boolean;
  }>();

  const menuParentClassNames = clsx(
    "text-white w-fit p-4 text-2xl transition-all",
    className,
    {
      "bg-venetian-red-500": menuOpen,
    }
  );
  const menuItemsClassNames = clsx(
    "flex flex-col gap-2 p-3 relative -left-1 transition-all",
    {
      "translate-x-0": menuOpen,
      "-translate-x-full": !menuOpen,
    }
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setMenuOpen(false));
  return (
    <div className={menuParentClassNames} ref={ref}>
      <div>
        <MenuIcon
          isOpen={menuOpen}
          setOpen={setMenuOpen}
          color={menuOpen ? "white" : textColor}
          className="w-6 h-6"
        />
        <ul className={menuItemsClassNames}>
          <li>
            <Link href="/">Home</Link>
          </li>
          {items.map((item) => {
            if ((item as LinkNavItem).href) {
              const link = item as LinkNavItem;
              return (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.text}
                  </Link>
                </li>
              );
            } else if ((item as NavItemWithChildren).children) {
              const parent = item as NavItemWithChildren;
              const subMenuOpen = subMenuState?.[parent.text];
              const childClassNames = clsx(
                "flex flex-col pl-2 ml-1 border-l-[1px] border-venetian-red-50 mt-1 transition-transform",
                {
                  "scale-y-0": !subMenuOpen,
                  "scale-y-100": subMenuOpen,
                  "h-0": !subMenuOpen,
                  "h-auto": subMenuOpen,
                }
              );
              return (
                <li
                  key={parent.text}
                  onClick={() =>
                    setSubMenuState({ [parent.text]: !subMenuOpen })
                  }
                >
                  {parent.text} &#9662;
                  <ul className={childClassNames}>
                    {parent.children.map(({ href, text }) => (
                      <li key={`${parent.text}-${href}`}>
                        <Link href={href} onClick={() => setMenuOpen(false)}>
                          {text}
                        </Link>
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
