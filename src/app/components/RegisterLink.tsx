import Link from "next/link";
import clsx from "clsx";

export function RegisterLink({ className = "" }: { className?: string }) {
  const linkClassNames = clsx({
    
  });
  return (
    <Link
      href="https://www.bikereg.com/dozinky-doozy-gravel-challenge"
      target="_blank"
      className={`${className} p-2 bg-darkred text-white`}
    >
      Register
    </Link>
  );
}
