import { ShopItems } from "../components/Shop-items/ShopItems.jsx";
import { ItemsInfoProvider } from "../components/context/useInfo.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { NavBar } from "../components/navbar/NavBar";

export const metadata = {
  title: "Kids zone - Shop",
};

export default function ItemShop() {
  return (
    <ItemsInfoProvider>
      <NavBar />
      <div >
        <ShopItems />
        <Footer />
      </div>
    </ItemsInfoProvider>
  );
}
