import type { Metadata } from "next";
import { bodyText } from "./ui/fonts";
import "./globals.css";
import { NavBar } from "./components/NavBar";

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
    "gravel race",
    "gravel quest",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyText.className}>
        {children}
        {/*<div className="flex flex-col h-screen w-screen justify-between items-center">
          {children}
        </div>*/}
      </body>
    </html>
  );
}
