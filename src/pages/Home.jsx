// import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import CropInformation from "../components/CropInfomation";
import FarmerToolBox from "../components/FarmerToolBox";
import Safety from "../components/Safety";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Home = () => {
  return (
    <main>
      <CropInformation showBreadCrumb={false} />
      {/* <HeroSection /> */}
      <ProductSection showBreadCrumb={false} />
      <FarmerToolBox showBreadCrumb={false} />
      <Safety showBreadCrumb={false} />
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
