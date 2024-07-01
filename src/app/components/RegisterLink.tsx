import Link from "next/link";
import clsx from "clsx";

export function RegisterLink({ className = "" }: { className?: string }) {
  const linkClassNames = clsx(
    "py-2 px-4 rounded-sm bg-venetian-red-500 text-white hover:bg-venetian-red-700",
    className
  );
  return (
    <Link
      href="https://www.bikereg.com/dozinky-doozy-gravel-challenge"
      target="_blank"
      className={linkClassNames}
    >
      Register
    </Link>
  );
}
