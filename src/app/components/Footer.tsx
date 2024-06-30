import Image from "next/image";
import Link from "next/link";

export const Footer = ({ showLogo = true }: { showLogo?: boolean }) => {
  return (
    <footer className="flex items-center gap-x-3 py-4">
      {showLogo && (
        <Image src="/logo_black.svg" alt="Logo" width={100} height={0} />
      )}
      <Link href="https://www.instagram.com/dozinkydoozy/" target="_blank">
        <Image src="/instagram.svg" alt="Instagram" width={24} height={0} />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61558073317871"
        target="_blank"
      >
        <Image src="/facebook.png" alt="Facebook" width={24} height={0} />
      </Link>
    </footer>
  );
};
