import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/*<NavBar textColor="white" />*/}
      <NavBar textColor="black" />
      {children}
      <Footer />
    </>
  );
}
