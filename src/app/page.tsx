import EstimateBanner from "@/components/pages/Estimate/EstimateBanner";
import IndustrySecrets from "@/components/pages/Estimate/IndustrySecrets";
import OwnerOperatedBanner from "@/components/pages/Estimate/OwnerOperatedBanner";
import WhyChooseUs from "@/components/pages/Estimate/WhyChooseUs";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <EstimateBanner />
      <WhyChooseUs />
      <IndustrySecrets />
      <OwnerOperatedBanner />
      <Footer />
    </div>
  );
}
