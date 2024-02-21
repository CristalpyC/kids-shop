import { Adminbar } from "../components/admin-section/admin-bar/Adminbar.jsx";
import { ActionsForm } from "../components/admin-section/interactions/ActionsForm.jsx";
import { Banner } from "../components/boys/banner/Banner.jsx";
import { Desc } from "../components/boys/description/Desc.jsx";
import { Bannerpublicity } from "../components/boys/publicity/Bannerpublicity.jsx";
import { BoysShop } from "../components/boys/shop/BoysShop.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { NavBar } from "../components/navbar/NavBar";

export const metadata = {
  title: "Kids zone - Admin",
};

export default function Admin() {
  return (
    <>
      <Adminbar />
      <div>
        <ActionsForm />
      </div>
    </>
  );
}
