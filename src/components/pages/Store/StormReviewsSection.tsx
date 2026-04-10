import React from "react";
import { Star } from "lucide-react";

// --- Review Data (Transcribed from your reference image) ---
const reviews = [
  {
    id: 1,
    initials: "JM",
    name: "John M.",
    location: "Dallas, TX",
    text: '"Josh delivered exactly what he promised. Premium materials, professional crew, done in one day. No games, no surprises. Wish I found him years ago."',
    tagIcon: "✅",
    tagText: "Insurance Claim Approved",
  },
  {
    id: 2,
    initials: "SR",
    name: "Sarah R.",
    location: "Fort Worth, TX",
    text: '"Finally, a roofer who doesn\'t play pricing games! Josh was upfront about everything. His crew was professional and thorough."',
    tagIcon: "⚡",
    tagText: "Storm Damage Repair",
  },
  {
    id: 3,
    initials: "MT",
    name: "Mike T.",
    location: "Plano, TX",
    text: '"What sets Josh apart: he\'s the actual owner doing the work, not some sales guy who disappears after you sign. He answered my calls directly and his crew did an amazing job."',
    tagIcon: "✅",
    tagText: "Full Roof Replacement",
  },
  {
    id: 4,
    initials: "LH",
    name: "Lisa H.",
    location: "McKinney, TX",
    text: '"After getting burned by a big roofing company before, I was hesitant. But Josh is different—no sales pressure, no hidden fees, just honest work at an honest price."',
    tagIcon: "👷",
    tagText: "Owner Inspected",
  },
];

export default function StormReviewsSection() {
  return (
    // .reviews-section mapped to Tailwind
    <section className="py-[60px]  bg-[rgba(5,10,18,0.98)] font-sans">
      <div className="second-container">
        
        {/* Header Content */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="flex items-center justify-center gap-2 text-white text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">
            <Star className="w-6 h-6 md:w-8 md:h-8 text-[#fbbf24] fill-[#fbbf24]" />
            5.0 Google Rating
          </h2>
          <p className="text-gray-400 text-sm md:text-[0.95em] font-medium">
            What homeowners say about Texas Precision Roofing
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            // .review-card mapped to Tailwind
            <div 
              key={review.id} 
              className="bg-white/3 border border-white/6 rounded-[12px] p-5 flex flex-col h-full"
            >
              
              {/* Header: Avatar & Info */}
              <div className="flex items-center gap-3 mb-4">
                {/* .review-avatar mapped to Tailwind */}
                <div className="w-10 h-10 bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] rounded-full flex items-center justify-center font-extrabold text-white text-[0.85em] shrink-0 font-sans">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-[0.95em] leading-tight mb-0.5">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-[0.75em] font-medium">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* .review-stars mapped to Tailwind */}
              <div className="flex text-[#fbbf24] text-[0.82em] mb-3 gap-0.5">
                {/* Rendering 5 solid stars */}
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-400 text-[0.88em] leading-relaxed mb-4 grow">
                {review.text}
              </p>

              {/* .review-tag mapped to Tailwind */}
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 bg-[#22c55e]/12 border border-[#22c55e]/25 text-[#4ade80] px-2.5 py-1 rounded-[5px] text-[0.72em] font-semibold">
                  <span className="text-[1.1em] leading-none">{review.tagIcon}</span> 
                  {review.tagText}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}