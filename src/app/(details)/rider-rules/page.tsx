import { headerText } from "@/app/ui/fonts";

const rules: { title: string; description: string }[] = [
  {
    title: "Be cool",
    description:
      "ride the course, don't take any shortcuts, no hitching a ride unless you're heading back to Czechland Lake. No storing drop bags.",
  },
  {
    title: "Be kind",
    description:
      "treat everyone with respect I clouding race directors, volunteers, your fellow competitors, and anyone you might meet during the event. This includes but is not limited to: farmers, law enforcement and emergency response, local residents.",
  },
  {
    title: "Respect the alps (no littering)",
    description:
      "absolutely no littering, do your part to keep the alps beautiful. Remember you're a guest in the alps and you're representing our cycling community. The residents of the alps want to share the beauty of their area.",
  },
  {
    title: "Follow the rules of the road",
    description:
      "while participating in the Doozy, you will be expected to follow the rules of the road including stopping at all stop signs and highway crossings, keeping to the right especially over blind hills (most hills in the alps are too steep to see over), letting emergency vehicles pass, and being cautious around harvest equipment. The finisher patch will be dope but it's not worth getting hurt or dying over.",
  },
  {
    title: "No support vehicles on course",
    description:
      "In an effort to limit traffic on course, the only place to receive aid is at Czechland Lake. We will have limited water stops at miles 20, 60, and 100. In addition to a stocked aid station, feel free to keep whatever you need to continue your journey in your car or at the Lake, you will be swinging through this stop twice (miles 40 and 80).",
  },
  {
    title: "Gear (no ebikes)",
    description:
      "ebikes riders are welcome to join us for the ride but will not be eligible for the finisher patch. Helmets and rear tail lights are non-negotiable requirements. You must have a way to navigate the course (GPS or cue sheets) as it will not be marked. Basic flat repair kits are recommended.",
  },
  {
    title:
      "Hustle (time limit, may be stopped before 3rd loop, no longer competing in that case)",
    description:
      "you will have 10 hours to complete the Doozy. This time requires a 12 mph pace, but for good reason. We'd like to have everyone back by six in order to limit cyclists on the road after dark during harvest. This also means that you will need to start the third loop by 2:45pm. If you'd like to contie to ride the final loop past this time, you are free to do so but will no longer be competing in the Doozy. These hills are no joke (that's why it's called a gravel challenge). Completing 40 or 80 miles is a big accomplishment.",
  },
  {
    title: "Reap what you sow (follow the rules or be gone)",
    description:
      "you will reap the rewards of the seeds you sow. if you are found to be violating any of our rules, you will be disqualified from the doozy and not allowed to participate in future events.",
  },
  {
    title: "Be prepared",
    description: "sag details, call 911 if needed, have a backup plan",
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
              <p className="text-base">{description}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
