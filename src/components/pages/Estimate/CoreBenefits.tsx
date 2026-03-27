import React from "react";

const benefits = [
  {
    id: 1,
    icon: "💰",
    title: "No Hidden Costs",
    description: "Unlike big roofers who surprise you with fees mid-job, our price is locked in at the estimate. No surprises, no change orders, no games.",
  },
  {
    id: 2,
    icon: "⚡",
    title: "Done In One Day",
    description: "Most roofs completed in just one day. We show up when we say, finish on time, and leave your property cleaner than we found it.",
  },
  {
    id: 3,
    icon: "👷‍♂️",
    title: "Owner-Operated",
    description: "I'm not a big corporation—I'm Josh, and I stake my reputation on every roof. When I give you a quote, that's the owner's word.",
  },
  {
    id: 4,
    icon: "⭐",
    title: "My Crews Only",
    description: "No random subcontractors. I only use my own trained crews who know my standards. That's how we deliver consistent quality.",
  },
];

export default function CoreBenefits() {
  return (
    <section className="py-10 md:py-12 font-sans">
      <div className="main-container max-w-5xl mx-auto">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="
                bg-white 
                px-[30px] py-10 
                rounded-2xl 
                text-center 
                shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                transition-all duration-300 ease-in-out
                border-t-[5px] border-t-[#c41e3a]
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
              "
            >
              {/* Icon Container with Custom Gradient and Glowing Shadow */}
              <div 
                className="
                  w-[85px] h-[85px] 
                  bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] 
                  rounded-full 
                  flex items-center justify-center 
                  mx-auto mb-[22px] 
                  text-[40px] text-white 
                  shadow-[0_8px_25px_rgba(196,30,58,0.4)]
                "
              >
                {benefit.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[#0f2744] text-xl md:text-2xl font-bold mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}