import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen w-screen justify-between items-center">
      <NavBar />
      <main className="mt-8 p-8 mx-auto max-w-screen-lg">{children}</main>
      <Footer />
    </div>
  );
}
