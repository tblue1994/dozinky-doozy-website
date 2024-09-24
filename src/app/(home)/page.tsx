import Image from "next/image";
import { RegisterLink } from "@/app/components/RegisterLink";
import { LogoTaglineHeader } from "../components/LogoTagline";
import { Definition } from "../components/Definition";
import Link from "next/link";
import { SponsorLogoLink, SponsorLogoLinkProps } from "./SponsorLogoLink";

const sponsors: SponsorLogoLinkProps[] = [
  {
    name: "Link Cycling",
    url: "https://thelinkinnovations.com/",
    image: "/link-cycling.png",
    altText: "Link Cycling logo word mark",
    width: 400,
    height: 400,
  },
  {
    name: "Mana Games",
    url: "https://mana-games.com/",
    image: "/mana-games.png",
    altText: "Mana Games logo and word mark",
    width: 589,
    height: 423,
  },
  {
    name: "Goodlife Cyclery",
    url: "https://goodlifecyclery.com/",
    image: "/goodlife-cyclery-1.png",
    altText: "Goodlife Cyclery logo word mark",
    width: 4005,
    height: 1278,
  },
  {
    name: "Alvin Coffee",
    url: "https://www.instagram.com/alvin.coffee/",
    image: "/alvin-coffee.png",
    altText: "Alvin Coffee logo word mark",
    width: 321,
    height: 202,
  },
  {
    name: "Paper Moon Pastries",
    url: "https://www.papermoonpastries.com/",
    image: "/paper-moon.png",
    altText: "Paper Moon Pastries logo",
    width: 1080,
    height: 1080,
  },
  {
    name: "Bank of Prague",
    url: "https://www.bankofprague1.com/",
    image: "/bofp.png",
    altText: "Bank of Prague logo",
    width: 424,
    height: 392,
  },
  {
    name: "Anglers Allie",
    url: "https://www.facebook.com/p/Anglers-Allie-100092405239388/",
    image: "/angler-allie.png",
    altText: "Anglers Allie logo",
    width: 3072,
    height: 2048,
  },
];

export default function Home() {
  return (
    <>
      <LogoTaglineHeader />
      <div className="p-8 max-w-screen-lg mx-auto">
        <div className="text-justify">
          <h1 className="text-3xl mt-2 text-center">
            Saturday, September 28, 2024, 8 AM
          </h1>
          <h2 className="text-2xl my-2 text-center">
            <Link
              href="https://lpnnrd.org/outdoor-recreation/czechland-lake-recreation-area/"
              target="_blank"
              className="hover:text-venetian-red-700"
            >
              Czechland Lake Recreation Area, Prague, NE
            </Link>
          </h2>
          <p className="my-2">
            The Dozinky Doozy is a 200km (120-mile) Harvest Gravel Cycling
            Challenge through the stunning Bohemian Alps, located north of
            Lincoln, NE. The route consists of three unique 40-mile loops, each
            starting and ending at Czechland Lake. Your journey will take you
            down dirt roads, over steep hills, and into the Platte River valley.
            You will have 10 hours and 25 minutes to complete the Doozy (12
            mph/pace).
          </p>
          <p className="my-2">
            This event is designed to challenge and inspire you. Finishing the
            Dozinky Doozy will be an accomplishment you can be proud of.
            Remember, harvest is a time to reap what you sow. What seeds will
            you sow this year? Embrace the challenge and join us for an
            unforgettable adventure!
          </p>
          <h3 className="my-3 text-lg">$50 registration fee includes:</h3>
          <ul className="list-image-[url(/flower.svg)] list-inside w-fit text-left leading-relaxed">
            <li>Post ride meal and beverages</li>
            <li>Awesome Finisher Patches for all Doozy Finishers</li>
            <li>Custom award for &quot;unofficial&quot; 1st place</li>
            <li>
              Fully stocked checkpoint at Czechland Lake and a limited SAG stop
              on each loop
            </li>
            <li>And more to come!</li>
          </ul>
          <div className="mt-8 mb-4 w-fit mx-auto">
            <RegisterLink className="text-xl">2024 Registration</RegisterLink>
          </div>
        </div>
        <br />
        <br />
        <div>
          <h2 className="my-3 text-center text-3xl">Event Day Schedule</h2>
          <ul className="list-image-[url(/flower.svg)] list-inside w-fit text-left leading-relaxed">
            <li>7 AM - Rider Check in @ Czechland Lake Picnic Shelter</li>
            <ul className="list-image-[url(/flower.svg)] list-inside w-fit text-left leading-relaxed ml-5">
              <li>Kolaches and Cold Brew Available!</li>
            </ul>
            <li>8 AM - Dozinky Doozy Starts in South Parking Lot</li>
            <li>
              11 AM(ish) - Post Ride Meals Provided by Relish Catering available
            </li>
            <li>3 PM - Third (Loma) Loop Start Cutoff</li>
            <li>6:25 PM - Doozy Finisher Patch Cutoff</li>
          </ul>
        </div>
        <br />
        <br />
        <div className="my-10">
          <h2 className="text-3xl text-center">Sponsors</h2>
          <p className="text-center mb-2">Thank you to all of our sponsors!</p>
          <div className="flex flex-grow flex-wrap justify-center items-center mb-4">
            {sponsors.map((sponsor) => (
              <SponsorLogoLink key={sponsor.name} {...sponsor} />
            ))}
          </div>
          <ul className="list-image-[url(/flower.svg)] list-inside w-fit text-left leading-relaxed">
            <li>
              Save $50 on 3D or Virtual bike fit with Link Cycling when you
              mention the Doozy
            </li>
            <li>
              <s>
                Gravel Gals! Save $25 on your $50 registration when you use the
                code <b>MANAGAMES</b> at checkout
              </s>
              <ul className="list-image-[url(/flower.svg)] list-inside w-fit text-left leading-relaxed ml-5">
                <li>All codes have been claimed!</li>
              </ul>
            </li>
            <li>
              Bring your number plate into Paper Moon Pastries through the month
              of October to receive a free treat!
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="col-span-1">
            <Definition
              word="Dozinky"
              pronunciation="doh-ZHIN-kee"
              partOfSpeech="noun"
              definition="A Czech and Slavic harvest festival celebrated across Central and Eastern
                Europe with a variety of customs and traditions. One thing that all
                of these festivals celebrate is the culmination of a hard
                year's work and the rewards gained in return."
              className="h-full flex flex-col justify-center"
            />
          </div>
          <Image
            src="/harvest_festival.webp"
            alt="Harvest Festival"
            width={2059}
            height={1433}
            className="col-span-1"
          />
          <div className="col-span-1 md:order-last">
            <Definition
              word="Doozy"
              pronunciation="DOO-zee"
              partOfSpeech="noun"
              definition="Something that is extraordinary or outstanding of its kind. I won't sugar coat it, this one's going to be a challenge! However, you can't truly achieve something without a chance of failure. I believe you have what it takes. Do you?"
              className="h-full flex flex-col justify-center"
            />
          </div>
          <Image
            src="/dozynki.webp"
            alt="Harvest Festival"
            width={2059}
            height={1433}
            className="col-span-1"
          />
        </div>
      </div>
    </>
  );
}
