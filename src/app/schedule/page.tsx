
import type { Metadata } from 'next'
import ScheduleClientContent from '@/components/pages/Estimate/ScheduleClientContent';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "Schedule a Roof Inspection | Texas Precision Roofing",
  description: "Schedule a free roof inspection with Texas Precision Roofing. Our experts will assess your home's condition and provide a detailed report.",
}

export default function SchedulePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScheduleClientContent />
    </Suspense>
  );
}