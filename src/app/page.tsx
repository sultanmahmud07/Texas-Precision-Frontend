import CoreBenefits from "@/components/pages/Estimate/CoreBenefits";
import EmployeePricingOffer from "@/components/pages/Estimate/EmployeePricingOffer";
import EstimateBanner from "@/components/pages/Estimate/EstimateBanner";
import FaqSection from "@/components/pages/Estimate/FaqSection";
import FinalCtaSection from "@/components/pages/Estimate/FinalCtaSection";
import IndustrySecrets from "@/components/pages/Estimate/IndustrySecrets";
import OwnerOperatedBanner from "@/components/pages/Estimate/OwnerOperatedBanner";
import RecentWork from "@/components/pages/Estimate/RecentWork";
import TestimonialSection from "@/components/pages/Estimate/TestimonialSection";
import TexasPrecisionPledge from "@/components/pages/Estimate/TexasPrecisionPledge";
import UrgencyStrip from "@/components/pages/Estimate/UrgencyStrip";
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
      <UrgencyStrip />
      <CoreBenefits />
      <TestimonialSection />
      <FaqSection />
      <TexasPrecisionPledge />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
