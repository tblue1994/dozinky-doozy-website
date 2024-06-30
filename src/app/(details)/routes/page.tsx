import { Route } from "@/app/components/Route";

export default function Routes() {
  return (
    <div className="max-w-screen-sm">
      <Route
        routeTitle="The Doozy"
        routeDescription="A 120-mile route that will test your mettle."
        routeIframeSrc="https://ridewithgps.com/embeds?type=route&id=46191801&sampleGraph=true"
        iframeClassName="w-px min-w-full border-none"
      />
    </div>
  );
}
