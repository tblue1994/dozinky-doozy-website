import { Route } from "@/app/components/Route";
import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const trainingRoutes = [
  {
    routeTitle: "2018 Gravel Worlds Privateer Route",
    routeDescription: (
      <>
        Starting and ending in Fallbrook, this sneakily challenging route goes
        through a part of the southern Bohemian Alps that are just a touch too far for
        one of our 40 mile loops. Ride up through Loma, NE (
        <Link
          href="https://en.wikipedia.org/wiki/Loma,_Nebraska#In_the_media"
          target="_blank"
          className="hover:text-venetian-red-600"
        >
          which was featured in{" "}
          <span className="italic">
            To Wong Foo, Thanks for Everything! Julie Newmar
          </span>
        </Link>
        ). County Road D to Valparaiso is home to a stretch of large hills.
      </>
    ),
    routeIframeSrc:
      "https://ridewithgps.com/embeds?type=route&id=28345766&sampleGraph=true",
  },
];
const routeIframeClassName = "border-none";
export default function Routes() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className={`${headerText.className} text-4xl mb-3`}>
          2024 Dozinky Doozy
        </h1>
        <p>The route will be released closer to the event.</p>
      </section>
      <section>
        <h1 className={`${headerText.className} text-4xl mb-3`}>
          Training Routes
        </h1>
        {trainingRoutes.map((route) => (
          <Route
            key={route.routeTitle}
            routeTitle={route.routeTitle}
            routeDescription={route.routeDescription}
            routeIframeSrc={route.routeIframeSrc}
            iframeClassName={routeIframeClassName}
          />
        ))}
      </section>
    </div>
  );
}
