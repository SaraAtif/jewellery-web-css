import AboutPage from "./about/page";
import Footer from "./components/footer";
import HeroPage from "./components/hero";
import ContactPage from "./contact/page";
import JewelleryPage from "./jewellery/page";

export default function Home() {
  return (
    <div>
       <HeroPage/>
       <AboutPage/>
       <JewelleryPage/>
       <ContactPage/>
       <Footer/>
      
    </div>
  )
}