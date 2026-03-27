import StormDamageSection from "@/components/pages/Store/StormDamageSection";
import StormFaqSection from "@/components/pages/Store/StormFaqSection";
import StormFooterSection from "@/components/pages/Store/StormFooterSection";
import StormHeader from "@/components/pages/Store/StormHeader";
import StormHero from "@/components/pages/Store/StormHero";
import StormReviewsSection from "@/components/pages/Store/StormReviewsSection";
import UrgencyTicker from "@/components/pages/Store/UrgencyTicker";


export default function StormDamage() {
  return (
    <>
      <StormHeader />
      <StormHero />
      <UrgencyTicker />
      <StormDamageSection />
      <StormReviewsSection />
      <StormFaqSection />
      <StormFooterSection />
    </>
  );
}
