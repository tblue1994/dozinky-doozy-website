import { Route } from "@/app/components/Route";
import { headerText } from "@/app/ui/fonts";

const trainingRoutes = [
  {
    routeTitle: "2018 Gravel Worlds Privateer Route",
    routeDescription: `Stating and ending in Fallbrook, this sneakily challenging route goes through the southern Bohemian Alps. Its just a touch too far for one of our 40 mile loops. 
    Ride up through Loma, NE (which was featured in To Wong Foo, Thanks for Everything! Julie Newmar). County Road D to Valpraiso is home to a stretch of large hills.`,
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
        <Route
          routeTitle="The Doozy"
          routeDescription="A 120-mile route that will test your mettle."
          routeIframeSrc="https://ridewithgps.com/embeds?type=route&id=46191801&sampleGraph=true"
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
