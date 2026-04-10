"use client";
export default function Footer() {
    // Smooth scroll handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full bg-[linear-gradient(135deg,#0f2744_0%,#071420_100%)] pt-16 pb-8 font-sans border-t border-gray-800">
      <div className="main-container">

        {/* --- TOP SECTION: 4 Columns --- */}
        <div className="flex flex-col md:flex-row gap-5 lg:gap-8 mb-16">

          {/* Column 1: Ready to Protect */}
          <div className="w-full md:w-1/3">
            <h2 className="text-primary text-2xl md:text-3xl font-black mb-4 tracking-tight leading-snug">
              Ready to Protect Your <br className="hidden lg:block" /> Home?
            </h2>
            <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed mb-6 font-medium">
              I know choosing the right roofing contractor is a big decision. As an owner-operated company with 12+ years of experience, I&apos;ve built my reputation on radical honesty and fair pricing—not sales gimmicks.
            </p>
            <button 
            onClick={handleScrollToTop}
            className="bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] cursor-pointer text-white px-6 py-3 rounded-md font-bold text-sm md:text-base shadow-[0_6px_25px_rgba(196,30,58,0.4)] transition-transform hover:-translate-y-0.5">
              Start Your Free Estimate
            </button>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Column 2: Why Choose Us */}
            <div>
              <h3 className="text-primary text-lg md:text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 md:space-y-4 text-[#cbd5e1] text-sm md:text-base font-medium">
                <li>✓ Owner-Operated</li>
                <li>✓ 5.0 Google Rating</li>
                {/* <li>✓ Texas Licensed & Insured</li> */}
                <li>✓ No Hidden Charges</li>
                <li>✓ Employee Pricing Available</li>
                <li>✓ My Crews Only— EVERYTIME</li>
              </ul>
            </div>

            {/* Column 3: What You Get */}
            <div>
              <h3 className="text-primary text-lg md:text-xl font-bold mb-4">What You Get</h3>
              <ul className="space-y-3 md:space-y-4 text-[#cbd5e1] text-sm md:text-base font-medium">
                <li>• Free roof inspection</li>
                <li>• Honest, detailed estimate</li>
                <li>• Price locked in—no surprises</li>
                <li>• Premium materials</li>
                <li>• Financing available</li>
                <li>• Most roofs done in 1 day</li>
              </ul>
            </div>

            {/* Column 4: Serving DFW */}
            <div>
              <h3 className="text-primary text-lg md:text-xl font-bold mb-4">Serving ALL OF TEXAS & OKLAHOMA
              </h3>
              {/* <p className="text-[#cbd5e1] text-sm md:text-base leading-relaxed mb-6 font-medium">
                Dallas, Fort Worth, Arlington, Plano, McKinney, Frisco, Irving, Garland, Grand Prairie, Denton, Mesquite, Carrollton, Richardson, Lewisville, and all surrounding DFW communities.
              </p> */}
              <p className="text-[#cbd5e1] text-sm md:text-base ">
                Employee Pricing Available Now
              </p>
            </div>
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <hr className="border-1.5 border-[#cbd5e1]/20 mb-10" />

        {/* --- MIDDLE CTA BOX --- */}
        <div className="bg-[#1f3a5e] rounded-xl p-8 md:p-12 text-center shadow-lg border border-[#2a4d7a]/50 mb-10 ">
          <p className="text-white text-base md:text-xl md:max-w-4xl mx-auto leading-relaxed mb-6">
            <span className="font-bold">Still thinking it over?</span> That&apos;s smart—a new roof is a big investment. Let&apos;s just talk—see if we&apos;re a good fit, get your questions answered, and go from there. Zero pressure, I promise. That&apos;s the Texas Precision pledge.
          </p>
          <button
            onClick={handleScrollToTop}
           className="bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] cursor-pointer text-white px-8 py-3.5 rounded-md font-bold text-base shadow-md transition-transform hover:-translate-y-0.5">
            Start My 60-Second Estimate
          </button>
        </div>

        {/* --- DIVIDER --- */}
        <hr className="border-[#1e3a5f]/50 mb-10" />

        {/* --- LEGAL DISCLAIMERS --- */}
        <div className="text-gray-400 text-xs  md:text-sm max-w-5xl mx-auto px-4 md:px-0">
          <h4 className="font-bold text-[#94a3b8] mb-4">Important Information About This Offer</h4>

          <div className="space-y-4 mb-6 leading-relaxed">
            <p>
              <span className="font-bold text-[#94a3b8]">Starting Price:</span> $7,999 starting price is for qualifying homes. Final price depends on roof size, pitch, materials selected, and project complexity. Exact pricing provided during free estimate.
            </p>
            <p>
              <span className="font-bold text-[#94a3b8]">Employee Pricing:</span> Employee pricing refers to our internal rate normally reserved for family and team members. Offer valid for limited time to fill installation schedule. Cannot be combined with other offers.
            </p>
            <p>
              <span className="font-bold text-[#94a3b8]">Free Estimate:</span> Free inspection and estimate includes roof assessment, material options, and detailed pricing. No purchase required. No obligation.
            </p>
          </div>

          <hr className="border-[#1e3a5f]/30 my-6" />

          <p className="italic text-[#94a3b8] mb-6">
            <span className="font-semibold">Meta Advertising Compliance:</span> This advertisement appears on Meta platforms (Facebook/Instagram). Texas Precision Roofing & Construction is solely responsible for this content. Not affiliated with Facebook, Instagram, or Meta Platforms, Inc.
          </p>
        </div>

        {/* --- BOTTOM DIVIDER & COPYRIGHT --- */}
        <hr className="border-[#1e3a5f]/50 mb-6" />

        <div className="text-center text-[#64748b] text-[0.7rem] md:text-xs font-medium space-y-2 pb-4">
          <p>© 2026 Texas Precision Roofing & Construction. All rights reserved.</p>
          <p>Owner-Operated • 5.0 Google Rating • Licensed & Insured</p>
          <p>Dallas-Fort Worth Area • 469-514-8205</p>
        </div>

      </div>
    </footer>
  );
}