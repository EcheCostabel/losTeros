import NavBar from "./NavBar/navBar";
import Footer from "./Footer/footer";
import Contact from "./Contact";
import Gallery from "./Gallery/gallery";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
