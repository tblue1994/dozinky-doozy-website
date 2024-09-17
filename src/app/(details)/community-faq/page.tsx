import { VideoEmbed } from "@/app/components/VideoEmbed";
import { headerText } from "@/app/ui/fonts";
import Link from "next/link";
import { ReactNode } from "react";

type BasicFaq = { question: string; answer: ReactNode };
type SubFaq = { question: string; children: BasicFaq[] };
type Faq = BasicFaq | SubFaq;
const faqs: Faq[] = [
  {
    question: "Have you reached out to local and county officials?",
    answer:
      "I have met with the Butler and Saunders County Boards of Supervisors and gotten the go-ahead. I have also notified the Sheriff's Departments and Volunteer Fire Departments in the nearby communities of our event.",
  },
  {
    question: "How many cyclists will be out on the roads?",
    answer:
      "We're expecting 50-100 cyclists, many of whom have experience riding in the Alps and share our love for the area, and I have no doubt that first-time riders will quickly fall in love with the stunning beauty of the Alps! We hope you'll join us in making this event welcoming and enjoyable for everyone.",
  },
  {
    question: "When and where will cyclists be?",
    answer: (
      <>
        The official route can be found on our{" "}
        <Link
          href="/routes"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          routes page
        </Link>
        !
        <br />
        <br />
        The route will consist of three loops, all starting and ending at
        Czechland Lake. The first will pass through Abie, the second through
        Weston, and the third through Loma. The event starts at 8am and our
        event has a sharp cutoff at 6pm in an attempt to limit the number of
        cyclists on the road after dark during harvest.
        <br />
        <table className="border-collapse border-spacing-2 border border-slate-500 table-auto mx-auto my-2">
          <caption className="caption-top mb-2">
            An approximation of when and where our cyclists will be.
          </caption>
          <tbody>
            <tr>
              <th className="border px-2">Location</th>
              <th className="border px-2">Fast (20 mph)</th>
              <th className="border px-2">Average (15 mph)</th>
              <th className="border px-2">Slow (10 mph)</th>
            </tr>
            <tr>
              <td className="border px-2">Abie</td>
              <td className="border px-2">9 AM</td>
              <td className="border px-2">9:30 AM</td>
              <td className="border px-2">10 AM</td>
            </tr>
            <tr>
              <td className="border px-2">Czechland Lake Visit #1</td>
              <td className="border px-2">10 AM</td>
              <td className="border px-2">10:45 AM</td>
              <td className="border px-2">12 PM</td>
            </tr>
            <tr>
              <td className="border px-2">Weston</td>
              <td className="border px-2">11 AM</td>
              <td className="border px-2">12 PM</td>
              <td className="border px-2">2 PM</td>
            </tr>
            <tr>
              <td className="border px-2">Czechland Lake Visit #2</td>
              <td className="border px-2">12 PM</td>
              <td className="border px-2">1:30 PM</td>
              <td className="border px-2">4 PM</td>
            </tr>
            <tr>
              <td className="border px-2">Loma</td>
              <td className="border px-2">1 PM</td>
              <td className="border px-2">2:45 PM</td>
              <td className="border px-2">X</td>
            </tr>
            <tr>
              <td className="border px-2">Finish</td>
              <td className="border px-2">2 PM</td>
              <td className="border px-2">4 PM</td>
              <td className="border px-2">X</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    question: "What should I do if I encounter cyclists while driving?",
    answer: (
      <>
        Treat cyclists like you would a four-wheeler or ATV. Give them at least
        3 feet of space when passing, and only pass when it&apos;s safe. If the
        road is narrow or you&apos;re approaching a hill, please wait. It might
        take a few extra minutes, but this will help us all get where we are
        going safely.
        <br />
        <br />
        Jason from Gravel Worlds (a race based out of Lincoln) has a great video
        detailing rules that our cyclists are expected to follow:
        <div className="max-w-lg mx-auto my-3">
          <VideoEmbed url="https://www.youtube.com/embed/H3GLInxDWaM?si=Us2fjwIssuluegXg" />
        </div>
        Here are some additional resources:
        <br />
        <Link
          href="https://www.hanover.com/resources/tips-individuals-and-businesses/prepare-now-learn-how/6-tips-share-road-cyclists"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Hanover Insurnace Article
        </Link>
        <br />
        <Link
          href="https://dot.nebraska.gov/media/jukhnocp/bicycle-guide.pdf"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Nebraska DOT Bicycle Guide
        </Link>
        <br />
        <Link
          href="https://www.bikekc.com/articles/driving-safely-around-bicyclists-pg199.htm"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Bike America Article
        </Link>
      </>
    ),
  },
  {
    question: "How can I help?",
    children: [
      {
        question: "If you live along the route:",
        answer:
          "Feel free use the table above to find out when our cyclists may be in your area. If you have a dog that likes to chase, please keep them kenneled while cyclists are nearby. Otherwise, grab a lawnchair and watch as they roll by - give them a wave!",
      },
      {
        question: "If you're working or harvesting along the route:",
        answer:
          "You can help keep our cyclists safe by minimizing your time on the route (if possible) and being patient. Remember to give at least 3 feet of space when passing, and only pass when it is safe to do so.",
      },
      {
        question: "If you want to volunteer:",
        answer: (
          <>
            <Link
              href="https://www.timetosignup.com/dozinkydoozy/sheet/1362236"
              target="_blank"
              className="underline hover:text-venetian-red-600"
            >
              Here is our volunteer sign up sheet
            </Link>
            . We can always use people to help run an aid station or get riders
            checked in.
          </>
        ),
      },
      {
        question: "Everyone else:",
        answer: (
          <>
            <Link
              href="https://www.bikereg.com/dozinky-doozy-gravel-challenge"
              target="_blank"
              className="underline hover:text-venetian-red-600"
            >
              Sign up if you are feeling adventurous and want to participate in
              the Dozinky Doozy
            </Link>
            , or come cheer on our cyclists as they start their adventure at
            8am. They'll be making two more stops back through Czechland Lake,
            so swing by and see what gravel cycling is all about!
          </>
        ),
      },
    ],
  },

  {
    question: "How can I stay up to date?",
    answer: (
      <>
        Follow us on{" "}
        <Link
          href="https://www.facebook.com/profile.php?id=61558073317871"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Facebook
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.instagram.com/dozinkydoozy/"
          target="_blank"
          className="underline hover:text-venetian-red-600"
        >
          Instagram
        </Link>{" "}
        for the latest information!
      </>
    ),
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
              const { question, answer: children } = faq as BasicFaq;
              return (
                <li key={question} className="my-4 text-xl">
                  <h2>{question}</h2>
                  <span className="text-base">{children}</span>
                </li>
              );
            } else if ((faq as SubFaq).children) {
              const { question, children } = faq as SubFaq;
              return (
                <li key={question} className="my-4 text-xl">
                  <h2>{question}</h2>
                  <ul>
                    {children.map(({ question, answer }) => (
                      <li
                        key={question}
                        className="my-4 text-xl list-disc list-outside ml-6"
                      >
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
        We thank you for being such gracious hosts. There truly is no place
        quite like the Bohemian Alps!
      </p>
    </div>
  );
}
