import Link from "next/link";
import clsx from "clsx";

export function RegisterLink({ className = "" }: { className?: string }) {
  const linkClassNames = clsx({});
  return (
    <Link
      href="https://www.bikereg.com/dozinky-doozy-gravel-challenge"
      target="_blank"
      className={`${className} py-2 px-4 rounded-sm bg-venetian-red-500 text-white`}
    >
      Register
    </Link>
  );
}
