import { LodgingItem } from "@/app/components/LodingItem";
import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const hotels20 = [
  {
    name: "Wahoo Heritage Inn",
    address: "950 N Chestnut St, Wahoo, NE 68066",
    phone: "(402) 443-1288",
    url: "https://www.wahooheritageinn.com/",
  },
];

const hotels40 = [
  {
    name: "Holiday Inn Express & Suites Lincoln I-80",
    address: "2200 Wildcat Dr, Lincoln, NE 68521",
    phone: "(402) 975-8330",
    url: "https://www.ihg.com/holidayinnexpress/hotels/us/en/lincoln/lnkwc/hoteldetail",
  },
  {
    name: "Best Western Plus Lincoln Inn & Suites",
    address: "2201 Wildcat Cir, Lincoln, NE 68521",
    phone: "(402) 438-0088",
    url: "https://www.bestwestern.com/en_US/book/hotels-in-lincoln/best-western-plus-lincoln-inn-suites/propertyCode.28075.html",
  },
  {
    name: "Hampton Inn & Suites Lincoln - Northeast I-80",
    address: "7343 Husker Cir, Lincoln, NE 68504",
    phone: "(402) 435-4600",
    url: "https://www.hilton.com/en/hotels/lnknhhx-hampton-suites-lincoln-northeast-i-80/",
  },
];

const h2ClassNames = "text-2xl";
const h3ClassNames = "text-xl";

export default function Hotels() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className={`${headerText.className} text-4xl`}>Hotels and Camping</h1>
      <section>
        <h2 className={h2ClassNames}>Camping</h2>
        <p>
          Tent and RV Camping is available at{" "}
          <Link
            href="https://lpnnrd.org/outdoor-recreation/czechland-lake-recreation-area/"
            target="_blank"
            className="underline hover:text-venetian-red-600"
          >
            Czechland Lake Recreation Area
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className={h2ClassNames}>Hotels</h2>
        Here are some nearby hotels:
        <h3 className={`${h3ClassNames} mt-4`}>~20 Minute Drive</h3>
        <ul>
          {hotels20.map((h) => (
            <li key={h.name} className="my-4">
              <LodgingItem {...h} />
            </li>
          ))}
        </ul>
        <h3 className={`${h3ClassNames} mt-8`}>~40 Minute Drive</h3>
        <ul>
          {hotels40.map((h) => (
            <li key={h.name} className="my-4">
              <LodgingItem {...h} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
