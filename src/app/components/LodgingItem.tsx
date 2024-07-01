import Link from "next/link";

interface LodgingItemProps {
  name: string;
  address: string;
  phone: string;
  url: string;
}
export const LodgingItem = ({
  name,
  address,
  phone,
  url,
}: LodgingItemProps) => {
  return (
    <span>
      <Link
        href={url}
        target="_blank"
        className="font-semibold underline hover:text-venetian-red-600"
      >
        {name}
      </Link>
      {` • ${address} • `}
      <Link href={`tel:${phone}`} className="hover:text-venetian-red-600">
        {phone}
      </Link>
    </span>
  );
};
