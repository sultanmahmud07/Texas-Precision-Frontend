import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    initials: "JM",
    name: "John M.",
    location: "Dallas, TX",
    review: `"I was skeptical about the price at first—it was thousands less than the other quotes I got. But Josh delivered exactly what he promised. Premium materials, professional crew, done in one day. No games, no surprises. Wish I found him years ago."`,
    projectTag: "Complete Roof Replacement • Saved $8,000+",
  },
  {
    id: 2,
    initials: "SR",
    name: "Sarah R.",
    location: "Fort Worth, TX",
    review: `"Finally, a roofer who doesn't play pricing games! Josh was upfront about everything. The big companies quoted me $22K and $19K. Josh did it for $9,500 with better materials. His crew was professional and thorough."`,
    projectTag: "Full Tear-Off & Replace • Best Price of All Quotes",
  },
  {
    id: 3,
    initials: "MT",
    name: "Mike T.",
    location: "Plano, TX",
    review: `"What sets Josh apart: he's the actual owner doing the work, not some sales guy who disappears after you sign. He answered my calls directly, showed up when he said, and his crew did an amazing job. No middlemen, just results."`,
    projectTag: "Premium Roof Installation • Done in 1 Day",
  },
  {
    id: 4,
    initials: "LH",
    name: "Lisa H.",
    location: "McKinney, TX",
    review: `"After getting burned by a big roofing company before, I was hesitant. But Josh is different—no sales pressure, no hidden fees, just honest work at an honest price. His crew left my yard cleaner than they found it!"`,
    projectTag: "Roof Replacement • Zero Hidden Costs",
  },
  {
    id: 5,
    initials: "RG",
    name: "Robert G.",
    location: "Arlington, TX",
    review: `"I received four quotes—two from big companies with TV commercials. Josh's price was nearly half, and he used GAF premium materials. My neighbor saw the work and already booked him for his roof."`,
    projectTag: "Complete Roof • Half the Price of Competitors",
  },
  {
    id: 6,
    initials: "AC",
    name: "Amanda C.",
    location: "Irving, TX",
    review: `"From the estimate to the final shingle, Josh was professional and transparent. He explained why the big companies charge so much more—it's all overhead and commissions. With him, you're paying for the roof, not their empire."`,
    projectTag: "New Roof Installation • Employee Pricing",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-20 font-sans bg-white">
      <div className="main-container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#0f2744] text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            What DFW Homeowners Say
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Real reviews from real customers • 5.0/5 Google rating
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group
                flex flex-col h-full
                bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_100%)]
                border-[2px] border-[#e2e8f0]
                rounded-[16px]
                p-[30px]
                transition-all duration-300 ease-in-out
                hover:border-[#c41e3a]
                hover:shadow-[0_10px_30px_rgba(196,30,58,0.12)]
                hover:-translate-y-[5px]
              "
            >
              {/* Header: Avatar & Name */}
              <div className="flex items-center gap-4 mb-5">
                {/* Avatar matching .case-study-avatar */}
                <div className="
                  w-[55px] h-[55px] flex-shrink-0
                  bg-[linear-gradient(135deg,#c41e3a_0%,#e63950_100%)]
                  rounded-full flex items-center justify-center
                  text-[1.4em] font-[800] text-white
                ">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-[#0f2744] font-bold text-lg leading-none mb-1.5">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Stars matching .case-study-stars */}
              <div className="flex text-[#c41e3a] mb-[15px] gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6 flex-grow">
                {testimonial.review}
              </p>

              {/* Bottom Tag matching .case-study-project */}
              <div className="
                mt-auto
                bg-[#fef2f4]
                px-[15px] py-[10px]
                rounded-[8px]
                text-[0.85em] text-[#991b1b] font-[600]
                leading-tight
              ">
                {testimonial.projectTag}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}