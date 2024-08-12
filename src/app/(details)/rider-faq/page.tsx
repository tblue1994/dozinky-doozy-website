import { headerText } from "@/app/ui/fonts";
import { ReactNode } from "react";

const rules: { title: string; description: ReactNode }[] = [
  {
    title:
      "The Doozy sounds fun, but I don't know that I can ride 120 miles. Should I still sign up?",
    description: (
      <>
        Absolutely! The full Doozy is 120 miles, but you can always ride less.
        The route consists of three unique 40-mile loops, so after 40 and 80
        miles, you&apos;ll be right back at the start/finish line. This is a
        perfect time to evaluate if you&apos;d like to continue with the Doozy.
        Regardless of how far you ride, we&apos;ll have kolaches and cold brew
        to start your ride and a meal waiting for you at the finish. Whatever
        your personal finish line, we&apos;ll be happy as long as you challenge
        yourself!
      </>
    ),
  },
  {
    title: "Will you be providing a drop bag service?",
    description: (
      <>
        We will swing back through Czechland Lake twice during the Doozy, so use
        this opportunity to get anything you need from your vehicles. We will
        have crates at Czechland, so you can leave a drop bag there and retrieve
        it when you return before heading out on a new loop.
      </>
    ),
  },
  {
    title: "What safety steps are you taking with the Doozy this year?",
    description: (
      <>
        I&apos;m glad you asked! Here is my approach:
        <br />
        <br />
        <ol className="list-decimal list-inside">
          <li>
            <strong>
              Coordination with County and City Officials and Law Enforcement:
            </strong>{" "}
            I&apos;ve met with the Butler and Saunders County Boards of
            Supervisors, the Butler and Saunders County sheriff departments, and
            local emergency medical services. They are all aware of the race and
            have given us the go-ahead.
          </li>
          <li>
            <strong>Local Awareness:</strong> I am working with Butler and
            Saunders County residents to ensure they are aware of the event.
            This is their home, and they appreciate knowing about the event in
            advance to avoid surprises with a hundred or more cyclists on their
            roads. It has been a pleasure talking with them—they love their Alps
            as much as we do!
          </li>
          <li>
            <strong>Event Timing:</strong> 80% of the corn and soybean harvest
            happens in October, with the busiest corn harvest date being October
            21st. By holding our event in September, the harvest should just be
            starting rather than being in full swing. This should reduce the
            overall number of trucks on the road.
          </li>
          <li>
            <strong>Route Building:</strong> I&apos;m working with local farmers
            and Alps residents to craft a route that is challenging but avoids
            major roads. Farmers often use main gravel roads to get to pavement
            before taking their grain to town. Avoiding these major roads should
            reduce the likelihood of interactions with heavily-laden semis.
          </li>
        </ol>
        <br />
        But regardless of how many steps I take to prepare the area and people
        for our event, you are ultimately responsible for your own safety. Keep
        your head on a swivel, ride within your means, and stay to the right on
        the roads to ensure you have a safe time in the Alps!
      </>
    ),
  },
  {
    title: "Are Ebikes allowed?",
    description: (
      <>
        You may ride an Ebike during the Doozy, but you will be ineligible for a
        finisher patch.
      </>
    ),
  },
];

export default function RiderFAQ() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Rider FAQ</h1>
      <section>
        <ol>
          {rules.map(({ title, description: children }) => (
            <li key={title} className="my-4 list-decimal text-xl">
              <h2>{title}</h2>
              <p className="text-base">{children}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
