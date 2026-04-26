
import Success from '@/components/shared/Success';
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Thank You for Scheduling Your Roof Inspection | Texas Precision Roofing",
  description: "Your roof inspection has been scheduled successfully. We look forward to helping you maintain your home's roof.",
}

export default function SuccessPage() {
  return (
   <Success />
  );
}
