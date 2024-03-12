import { NewArrivals } from "./components/arrivals/NewArrivals";
import { Banner } from "./components/banner/Banner";
import { Category } from "./components/category/Category";
import { Clothes } from "./components/clothes/Clothes";
import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/NavBar";
import { BannerPub } from "./components/publicity/bannerPubHome/BannerPub";
import { BannerOfert } from "./components/publicity/oferts/BannerOfert";
import { Testimonial } from "./components/testimonial/Testimonial";

export const metadata = {
  title: "Kids zone - Home",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <Banner />
        <Category />
        <BannerPub />
        <Clothes />
        <BannerOfert />
        <NewArrivals />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
