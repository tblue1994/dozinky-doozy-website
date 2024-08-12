import { headerText } from "@/app/ui/fonts";

type BasicFaq = { question: string; answer: string };
type SubFaq = { question: string; children: BasicFaq[] };
type Faq = BasicFaq | SubFaq;
const faqs: Faq[] = [
  {
    question: "Have you worked with local and county officials?",
    answer:
      "We have worked with the Butler and saunders county boards of supervisors and gotten the go-ahead as well as working with the county sheriff's offices. I've also notified emergency medical services in the nearby communities. ",
  },
  {
    question: "How many cyclists will be out on the roads?",
    answer:
      "We're expecting 50-100 cyclists, many of whom have experience riding in the Alps and love it as much as I do. If they haven't, they soon will. We hope that as community members, that you will help make our event welcoming and enjoyable. ",
  },
  {
    question: "When/where will cyclists be?",
    answer:
      "An official route will be released closer to the event date. The route will consist of three loops, all starting and ending at Czechland Lake. The first will go to Abie, the second to Weston, and the third to Loma. **Insert table here**. The event starts at 8am and our event has a sharp cutoff at 6pm in an attempt to limit the number of cyclists on the road after dark while harvest is going on. ",
  },
  {
    question: "How can I help?",
    children: [
      {
        question: "If you live along the route:",
        answer:
          "if you have a dog that likes to chase, please keep them kenneled while cyclists are in your area. Feel free use the table above to find out when cyclists may be in your area. Give them a wave and shout some encouraging words!",
      },
      {
        question: "If you're working or harvesting along the route:",
        answer:
          "our cyclists are expected to follow all rules of the road (stopping at stop signs and staying to the right, especially in blind hills). You can help keep our cyclists safe by minimizing your time on the route, if possible, and being patient with our cyclists. Pass only when it is safe to do so. ",
      },
      {
        question: "If you want to volunteer:",
        answer:
          "we will have a volunteer sign up page closer to race day. We can always use people to help run an aid station, get riders registered and checked in the morning.",
      },
      {
        question: "Everyone else:",
        answer:
          "feel free to come cheer on our cyclists at 8am. They'll be making two more stops back through Czechland Lake. Come swing by and see what gravel cycling is all about. ",
      },
    ],
  },
  {
    question: "How can I stay up to date?",
    answer: "Follow us on Facebook and Instagram, check out website.",
  },
  {
    question: "What do I do if I come across cyclists?",
    answer:
      "Pass safely, if not safe (Hill, narrow) please wait. It might take a few extra minutes but we promise you'll get where you're going. Honestly, just treat us like you would a side-by-side or four wheeler. _Link to a resource_",
  },
];

export default function CommunityFaq() {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h1 className={`${headerText.className} text-4xl`}>Community FAQ</h1>
      <section>
        <ul>
          {faqs.map((faq) => {
            if ((faq as BasicFaq).answer) {
              const { question, answer } = faq as BasicFaq;
              return (
                <li key={question} className="my-4 text-xl">
                  <h2>{question}</h2>
                  <p className="text-base">{answer}</p>
                </li>
              );
            } else if ((faq as SubFaq).children) {
              const { question, children } = faq as SubFaq;
              return (
                <li key={question} className="my-4 text-xl">
                  <h2>{question}</h2>
                  <ul>
                    {children.map(({ question, answer }) => (
                      <li key={question} className="my-4 text-xl">
                        <h3 className="text-lg">{question}</h3>
                        <p className="text-base">{answer}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </section>
      <p>
        We thank you for being such gracious hosts. There truly is no place in
        earth like the Bohemian Alps.
      </p>
    </div>
  );
}
