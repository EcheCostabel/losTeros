import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import Contact from "./Contact/contact";
import Gallery from "./Gallery/gallery";
import About from "./About/about";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Gallery />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
