import InsuranceSection from "@/components/pages/Store/InsuranceSection";
import StormCostSection from "@/components/pages/Store/StormCostSection";
import StormDamageSection from "@/components/pages/Store/StormDamageSection";
import StormFaqSection from "@/components/pages/Store/StormFaqSection";
import StormFooterSection from "@/components/pages/Store/StormFooterSection";
import StormGallerySection from "@/components/pages/Store/StormGallerySection";
import StormHeader from "@/components/pages/Store/StormHeader";
import StormHero from "@/components/pages/Store/StormHero";
import StormReviewsSection from "@/components/pages/Store/StormReviewsSection";
import UrgencyTicker from "@/components/pages/Store/UrgencyTicker";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Was Your Home in the Storm's Path? | Texas Precision Roofing | Abilene & Big Country",
  description: "Enter your ZIP code to instantly check if your home was in a recent storm damage zone. Free professional roof inspection from Texas Precision Roofing for affected Abilene & Big Country homeowners.",
}
export default function StormDamage() {
  return (
    <>
      <StormHeader />
      <StormHero />
      <UrgencyTicker />
      <StormDamageSection />
      <InsuranceSection />
      <StormCostSection />
      <StormGallerySection />
      <StormReviewsSection />
      <StormFaqSection />
      <StormFooterSection />
    </>
  );
}
