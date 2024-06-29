import type { Metadata } from "next";
import { fira } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dozinky Doozy",
  description: "It's a bicycle race!",
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
  ],
  publisher: "Gravel Quest LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dozinkydoozy.com",
    description: "we'll be riding on gravel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <div className="flex flex-col h-screen w-screen justify-between items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
