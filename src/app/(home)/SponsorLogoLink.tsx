import Image from "next/image";
import Link from "next/link";

export interface SponsorLogoLinkProps {
  name: string;
  url: string;
  image: string;
  altText: string;
  width: number;
  height: number;
}

export const SponsorLogoLink = ({
  url,
  image,
  altText,
  width,
  height,
}: SponsorLogoLinkProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="block basis-1/2 sm:basis-1/4 m-0.5"
    >
      <Image src={image} alt={altText} width={width} height={height} />
    </Link>
  );
};
