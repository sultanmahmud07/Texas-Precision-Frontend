"use client";
import { AlertTriangle } from "lucide-react";

// --- Damage Data (Transcribed from your reference image) ---
const damagePoints = [
  {
    id: 1,
    icon: "⚡",
    title: "Hail Dents & Bruising",
    desc: "Baseball-sized hail (2.75\") fractures the granule layer and cracks the fiberglass mat underneath — invisible from the ground but devastating over time.",
  },
  {
    id: 2,
    icon: "📦",
    title: "Gutter & Downspout Damage",
    desc: "Dented gutters and shingle granules in your downspouts are telltale signs of hail impact on your roof above.",
  },
  {
    id: 3,
    icon: "💧",
    title: "Cracked or Missing Shingles",
    desc: "Winds up to 74+ mph rip shingles loose, exposing your deck to rain and further damage.",
  },
  {
    id: 4,
    icon: "💨",
    title: "Lifted or Curled Flashing",
    desc: "Wind lifts flashing around vents, chimneys, and edges — creating entry points for water.",
  },
  {
    id: 5,
    icon: "💧",
    title: "Ceiling Stains & Water Marks",
    desc: "Brown spots on your ceiling mean water is already getting through your compromised roof.",
  },
  {
    id: 6,
    icon: "🌳",
    title: "Tornado & Debris Impact",
    desc: "With tornadoes confirmed near Potosi and Baird, debris impact can compromise underlayment even when the roof looks intact.",
  },
];

export default function StormDamageSection() {
          // Smooth scroll handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    // .damage-section
    <section className="bg-[linear-gradient(180deg,rgba(5,10,18,0.98)_0%,rgba(13,25,38,0.98)_100%)] py-[60px] font-sans my-0">
      <div className="second-container">
        
        {/* Header Content */}
        <div className="text-center mb-12">
          {/* .section-badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#06b6d4]/10 border border-[#06b6d4]/25 text-[#06b6d4] px-3.5 py-1.5 rounded-[6px] text-[0.72em] font-bold uppercase tracking-[1.5px] mb-[15px]">
            <AlertTriangle className="w-3.5 h-3.5" strokeWidth={2.5} />
            CHECK YOUR ROOF
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-[2.5rem] font-bold mb-5 tracking-tight">
            Signs of <span className="text-[#06b6d4]">Storm Damage</span> Most Homeowners Miss
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            After severe weather, your roof might look fine from the ground. But up close, it&apos;s a different story.
          </p>
        </div>

        {/* Damage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-14">
          {damagePoints.map((point) => (
            // .damage-card & .damage-card:hover
            <div 
              key={point.id} 
              className="bg-white/3 border border-white/6 rounded-[12px] p-5 flex gap-3.5 items-start transition-all duration-300 hover:border-[#06b6d4]/25 hover:bg-[#06b6d4]/4"
            >
              {/* .damage-icon */}
              <div className="w-[42px] h-[42px] bg-[linear-gradient(135deg,rgba(239,68,68,0.15),rgba(239,68,68,0.08))] rounded-[10px] flex items-center justify-center shrink-0 text-[1.3em]">
                {point.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-white font-bold text-base mb-1.5">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-5 font-medium">
            Don&apos;t wait until water is dripping through your ceiling.
          </p>
          
          {/* .damage-cta-btn */}
          <button
            onClick={handleScrollToTop}
             className="inline-flex items-center cursor-pointer justify-center gap-2 bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] text-white border-none px-8 py-[15px] rounded-[10px] font-bold text-[1em] shadow-[0_6px_20px_rgba(196,30,58,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(196,30,58,0.5)] hover:-translate-y-0.5">
            ⚡
            Check Your ZIP Code Now
          </button>
        </div>

      </div>
    </section>
  );
}