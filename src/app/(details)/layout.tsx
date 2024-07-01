import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import "./details.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="p-8">{children}</main>
      <Footer />
    </>
  );
}
