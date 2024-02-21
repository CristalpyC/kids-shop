import { Footer } from "../components/footer/Footer.jsx";
import { Services } from "../components/girls/arrivals/Services.jsx";
import { Banner } from "../components/girls/banner/Banner.jsx";
import { Shop } from "../components/girls/shop/Shop.jsx";
import { NavBar } from "../components/navbar/NavBar";


export const metadata = {
  title: "Kids zone - Girls clothing",
};

export default function GirlsSection() {
  return (
    <>
      <NavBar />
      <div>
        <Banner />
        <Services />
        <Shop />
        <Footer />
      </div>
    </>
  );
}
