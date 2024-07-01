import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

// TODO: figure out why the body image doesn't load as expected and vice-versa
// consider using a floating background component vs a background image in CSS
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar textColor="white" />
      {children}
      <Footer />
    </>
  );
}
