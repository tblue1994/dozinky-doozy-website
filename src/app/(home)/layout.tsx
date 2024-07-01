import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute top-0 left-0 right-0">
        <NavBar textColor="white" />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
