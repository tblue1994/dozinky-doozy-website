import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

export function RegisterLink({
  children = "Register",
  className = "",
  style = "button",
}: {
  children?: ReactNode;
  className?: string;
  style?: "button" | "link";
}) {
  const linkClassNames = clsx(className, {
    "py-2 px-4 rounded bg-venetian-red-500 text-white hover:bg-venetian-red-700":
      style === "button",
  });
  return (
    <Link
      href="https://www.bikereg.com/dozinky-doozy-gravel-challenge"
      target="_blank"
      className={linkClassNames}
    >
      {children}
    </Link>
  );
}
