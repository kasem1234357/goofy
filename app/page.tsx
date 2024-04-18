import AboutUs from "@/components/aboutUs/AboutUs";
import Achivment from "@/components/achevment/Achivment";
import Feautres from "@/components/feautres/Feautres";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Info from "@/components/info/Info";


export default function Home() {
  return (
    <>
       <Header/>
       <AboutUs/>
      <Achivment/>
      <Feautres/>
      <Info/>
      <Gallery/>
      <Footer/>
    </>

 
  );
}
