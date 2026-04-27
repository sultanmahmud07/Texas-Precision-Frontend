
import BookingClientContent from '@/components/pages/Store/BookingClientContent';
import type { Metadata } from 'next'
import { Suspense } from 'react';
export const metadata: Metadata = {
  title: "Schedule a Roof Inspection | Texas Precision Roofing",
  description: "Schedule a free roof inspection with Texas Precision Roofing. Our experts will assess your home's condition and provide a detailed report.",
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingClientContent />
    </Suspense>
  );
}