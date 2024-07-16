import { LodgingItem } from "@/app/components/LodgingItem";
import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const h2ClassNames = "text-2xl";

export default function Contact() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Any Questions or Comments? </h1>
      <h2 className={h2ClassNames}>Email: <a className="underline hover:text-venetian-red-600" href="mailto:dozinkydoozy@gmail.com" target="_blank">dozinkydoozy@gmail.com</a></h2>
    </div>
  );
}
