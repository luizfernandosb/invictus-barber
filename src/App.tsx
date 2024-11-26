import HomeSection from "./components/HomeSection";
import InfoSection from "./components/InfoSection";
import ThirdSection from "./components/ThirdSection";
import ServicesSection from "./components/ServicesSection";
import BannerSection from "./components/BannerSection";
import WhyUsSection from "./components/WhyUsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import FixedButton from "./components/FixedButton";
import FeedbackSection from "./components/FeedbackSection";
import { FeedbackList } from "./components/ShowFeedbackSection/FeedbackList";

export default function App() {
  return (
    <main className="">
      <FixedButton />
      <HomeSection />
      <InfoSection />
      <ThirdSection />
      <ServicesSection />
      <BannerSection />
      <WhyUsSection />
      <FeedbackList />
      <FeedbackSection />
      <MapSection />
      <Footer />
    </main>
  );
}
