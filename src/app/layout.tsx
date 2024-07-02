import type { Metadata } from "next";
import { bodyText } from "./ui/fonts";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import clsx from "clsx";

const description =
  "Come join us in riding 120 miles of beautiful gravel in the Bohemian Alps.";
export const metadata: Metadata = {
  title: "Dozinky Doozy",
  description: description,
  keywords: [
    "bike",
    "bikes",
    "bicycle",
    "bike race",
    "cycling",
    "gravel bike",
    "dozinky doozy",
    "dozinky",
    "doozy",
    "gravel race",
    "gravel quest",
    "gravel challenge",
    "gravel event",
    "prague",
    "nebraska",
    "prague nebraska",
  ],
  publisher: "Gravel Quest LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dozinkydoozy.com",
    description: description,
  },
};

const bodyClassNames = clsx(bodyText.className, "");
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClassNames}>{children}</body>
    </html>
  );
}
