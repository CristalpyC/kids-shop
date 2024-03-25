import { Banner } from "../components/boys/banner/Banner.jsx";
import { Desc } from "../components/boys/description/Desc.jsx";
import { Bannerpublicity } from "../components/boys/publicity/Bannerpublicity.jsx";
import { BoysShop } from "../components/boys/shop/BoysShop.jsx";
import { ItemsInfoProvider } from "../components/context/useInfo.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { NavBar } from "../components/navbar/NavBar";

export const metadata = {
  title: "Kids zone - Boys clothing",
};

export default function BoysSection() {
  return (
    <ItemsInfoProvider>
      <NavBar />
      <div>
        <Banner />
        <Bannerpublicity />
        <Desc />
        <BoysShop />
        <Footer />
      </div>
    </ItemsInfoProvider>
  );
}
