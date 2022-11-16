import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import Contact from "./Contact";
import Gallery from "./Gallery/gallery";
import Carousel from "./Carousel/carousel";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
