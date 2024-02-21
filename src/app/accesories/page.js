import { Banner } from "../components/accesories/banner/Banner.jsx";
import { Desc } from "../components/accesories/desc/Desc.jsx";
import { Kids } from "../components/accesories/kids-model/Kids.jsx";
import { AccShop } from "../components/accesories/shop/AccShop.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { NavBar } from "../components/navbar/NavBar";

export const metadata = {
  title: "Kids zone - Accesories",
};

export default function Accesories() {
  return (
    <>
      <NavBar />
      <div>
        <Banner />
        <Desc />
        <Kids />
        <AccShop />
        <Footer />
      </div>
    </>
  );
}
