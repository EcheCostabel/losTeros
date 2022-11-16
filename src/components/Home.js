import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import Contact from "./Contact/contact";
import Gallery from "./Gallery/gallery";
import Carousel from "./Carousel/carousel";
import About from "./About/about";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Gallery />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}
