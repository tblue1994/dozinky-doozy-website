import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

export function RegisterLink({
  children = "Register",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const linkClassNames = clsx(
    "py-2 px-4 rounded bg-venetian-red-500 text-white hover:bg-venetian-red-700",
    className
  );
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
