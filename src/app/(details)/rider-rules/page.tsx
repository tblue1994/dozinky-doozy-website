import { headerText } from "@/app/ui/fonts";
import { ReactNode } from "react";

const rules: { title: string; description: ReactNode }[] = [
  {
    title: "Be Cool",
    description: (
      <>
        Pirate Cycling League and Gravel Worlds Rule #1. Stay on course, don't
        take shortcuts, no storing drop bags away from Czechland Lake, and, most
        importantly, <strong>treat everyone with respect</strong>, including
        fellow riders, race directors, volunteers, and all others you encounter
        during the event, such as farmers, law enforcement, emergency
        responders, and local residents.
      </>
    ),
  },
  {
    title: "Respect the Bohemian Alps",
    description:
      "There is to be absolutely no littering. Remember you are a guest and are representing our cycling community. The local residents want to share the beauty of their area. Do your part to keep the Alps beautiful.",
  },
  {
    title: "Follow the rules of the road",
    description: (
      <>
        All riders will be expected to follow the rules of the road including:
        stopping at all stop signs and highway crossings, letting emergency
        vehicles pass, being cautious around harvest equipment, and keeping to
        the right especially over blind hills (most of our hills too steep to
        see over). No event or finisher patch is worth getting hurt over.
      </>
    ),
  },
  {
    title: "No support vehicles on course",
    description: (
      <>
        In an effort to limit traffic on course, the only place to receive aid
        is at Czechland Lake. We will have limited water stops at miles 20, 60,
        and 100. You will be passing through our checkpoint/aid station at
        Czechland Lake twice on your journey (miles 40 and 80), so feel free to
        keep whatever you need in your car or at the checkpoint. The only time a
        support vehicle is allowed on course is to pick up an abandoning rider.
      </>
    ),
  },
  {
    title: "Gear",
    description: (
      <>
        Helmets and rear tail lights are non-negotiable requirements. You must
        have a way to navigate the course (GPS head unit or cue sheets) as it
        will not be marked.
      </>
    ),
  },
  {
    title: "Hustle",
    description: (
      <p>
        You will have 10 hours to complete the Doozy. This time requires a 12
        mph pace, but for good reason. We'd like to have everyone back before
        dark in order to limit cyclists on the road at night during harvest.
        <br />
        <br />
        This also means that you will need to start the third loop by 2:45pm. If
        you'd like to continue to ride the final loop past this time, you are
        free to do so but will no longer be participating in the Doozy.
        <br />
        <br />
        Remember, these hills are no joke (that's why it's called a gravel
        challenge!), so completing 40 or 80 miles can still be a big
        accomplishment for you on your gravel journey.
      </p>
    ),
  },
  {
    title: "Be Prepared",
    description:
      "Have a plan in case you need to abandon the Doozy. We will not have SAG vehicles this year",
  },
  {
    title: "Reap what you sow",
    description: (
      <>
        If you are not cool in your race conduct, kind in your interactions with
        others, respectful of our hosting area, or fail to follow the rules of
        the road, you will be disqualified from the Doozy and not invited back
        to future events.
        <br />
        <br />
        However, if you can follow our rules and are prepared and hustle, you
        will have an awesome time at our event and go home with a rad finisher
        patch!
      </>
    ),
  },
];

export default function RiderRules() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Rider Rules</h1>
      <section>
        <ol>
          {rules.map(({ title, description }) => (
            <li key={title} className="my-4 list-decimal text-xl">
              <h2>{title}</h2>
              <p className="text-base" children={description} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
