import { Route } from "@/app/components/Route";
import { headerText } from "@/app/ui/fonts";
import Link from "next/link";

const trainingRoutes = [
  {
    routeTitle: "2018 Gravel Worlds Privateer Route",
    routeDescription: (
      <>
        Starting and ending in Fallbrook, this sneakily challenging route goes
        through a part of the southern Bohemian Alps that are just a touch too
        far for one of our 40 mile loops. Ride up through Loma, NE (
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
        <br />
        <br />
        Check out{" "}
        <Link
          href="https://www.gravel-worlds.com/"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Gravel Worlds
        </Link>{" "}
        and their{" "}
        <Link
          href="https://www.gravel-worlds.com/history"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          history page
        </Link>{" "}
        for more past routes!
      </>
    ),
    routeIframeSrc:
      "https://ridewithgps.com/embeds?type=route&id=28345766&sampleGraph=true",
  },
];

var doozyRoute = {
  routeTitle: "",
  routeDescription: `The route consists of three unique 40-mile loops, each starting and ending at Czechland Lake. 
    Your journey will take you down dirt roads, over steep hills, and into the Platte River valley. The loops pass through the towns of Abie, Weston and Loma.`,
  routeIframeSrc:
    "https://ridewithgps.com/embeds?type=route&id=48463733&sampleGraph=true",
};

const routeIframeClassName = "border-none";
export default function Routes() {
  return (
    <div className="flex flex-col gap-6">
      <section>
        <h1 className={`${headerText.className} text-4xl mb-3`}>
          Dozinky Doozy Gravel Challenge 2024
        </h1>
        <Route
          key={doozyRoute.routeTitle}
          routeTitle={doozyRoute.routeTitle}
          routeDescription={doozyRoute.routeDescription}
          routeIframeSrc={doozyRoute.routeIframeSrc}
          iframeClassName={routeIframeClassName}
        />
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
