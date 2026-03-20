import EmployeePricingOffer from "@/components/pages/Estimate/EmployeePricingOffer";
import EstimateBanner from "@/components/pages/Estimate/EstimateBanner";
import IndustrySecrets from "@/components/pages/Estimate/IndustrySecrets";
import OwnerOperatedBanner from "@/components/pages/Estimate/OwnerOperatedBanner";
import RecentWork from "@/components/pages/Estimate/RecentWork";
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
      <EmployeePricingOffer />
      <RecentWork />
      <Footer />
    </div>
  );
}
