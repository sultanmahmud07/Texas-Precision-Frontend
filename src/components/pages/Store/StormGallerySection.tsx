import React from "react";
import Image from "next/image";

// Array of your gallery images
const galleryImages = [
  "/estimate/gallery-1.webp",
  "/estimate/gallery-2.webp",
  "/estimate/gallery-3.webp",
  "/estimate/gallery-4.webp",
  "/estimate/gallery-5.webp",
  "/estimate/gallery-6.webp",
  "/estimate/gallery-7.webp",
  "/estimate/gallery-8.webp",
  "/estimate/gallery-9.webp",
  "/estimate/gallery-10.webp",
];

export default function StormGallerySection() {
  return (
    // .gallery-section mapped to Tailwind
    <section className="py-[60px] px-3 md:px-5 bg-[linear-gradient(180deg,rgba(13,25,38,0.98)_0%,rgba(5,10,18,0.95)_100%)] font-sans overflow-hidden">
      
      {/* --- Inline Styles to Hide Scrollbar but Keep Functionality --- */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Content */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
            Our Recent Work in Abilene & Big Country
          </h2>
          <p className="text-white/60 text-sm md:text-base font-medium">
            Real roofs. Real results. All inspected and repaired by Josh.
          </p>
        </div>

        {/* .gallery-scroll mapped to Tailwind */}
        <div className="
          hide-scrollbar 
          flex gap-[15px] 
          overflow-x-auto 
          pt-2.5 pb-5 
          snap-x snap-mandatory 
          touch-pan-x
          w-full
        ">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="
                relative 
                shrink-0 
                snap-center 
                rounded-[12px] 
                overflow-hidden 
                border border-white/10
                shadow-lg
                /* Responsive widths: takes up most of the screen on mobile, shrinks to fixed size on desktop */
                w-[70vw] sm:w-[60vw] md:w-[250px] lg:w-[270px]
                h-[220px] md:h-[180px] lg:h-[220px]
                transition-transform duration-300 hover:scale-[1.02]
              "
            >
              <Image
                src={src}
                alt={`Recent roofing work in Abilene - Project ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 350px, 420px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}