"use client";

import React from "react";
import Image from "next/image";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Mock Data ---
// Using your specified path format
const recentWorks = [
  { id: 1, src: "/estimate/gallery-1.webp", alt: "Recent roof installation in DFW - 1" },
  { id: 2, src: "/estimate/gallery-2.webp", alt: "Recent roof installation in DFW - 2" },
  { id: 3, src: "/estimate/gallery-3.webp", alt: "Recent roof installation in DFW - 3" },
  { id: 4, src: "/estimate/gallery-4.webp", alt: "Recent roof installation in DFW - 4" },
  { id: 5, src: "/estimate/gallery-5.webp", alt: "Recent roof installation in DFW - 5" },
];

// --- Custom Arrows with strict TypeScript typing ---
const CustomPrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#c41e3a] text-[#c41e3a] p-1 md:p-1 rounded-full shadow-lg hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hidden md:flex items-center justify-center"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

const CustomNextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#c41e3a] text-[#c41e3a] p-1 md:p-1 rounded-full shadow-lg hover:bg-[#c41e3a] hover:text-white transition-all duration-300 hidden md:flex items-center justify-center"
      aria-label="Next slide"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default function RecentWork() {
  // --- Slick Slider Settings ---
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    // Modern Custom Dots Logic
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="flex items-center justify-center gap-2 m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 md:w-8 md:h-1.5 bg-gray-300 rounded-full md:rounded-md transition-all duration-300 hover:bg-[#c41e3a] slick-custom-dot mt-2"></div>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2, 
          arrows: false // Rely on touch/swipe for tablets
        }, 
      },
      {
        breakpoint: 640,
        settings: { 
          slidesToShow: 2, 
          arrows: false, // Hide arrows to prevent horizontal scroll issues on mobile
          centerMode: true, 
          centerPadding: "15px" // Shows a tiny peek of the next image on mobile
        },
      },
    ],
  };

  return (
    <section className="py-10 md:py-16 bg-white font-sans overflow-hidden">
      <div className="main-container">
        
        {/* Header Texts */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-[#0f2744] text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
            Our Recent Work
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Real roofs we&apos;ve installed for DFW homeowners
          </p>
        </div>

        {/* The Carousel Slider Container */}
        <div className="relative  pb-10">
          <Slider {...settings} className="recent-work-slider">
            {recentWorks.map((work) => (
              <div key={work.id} className="p-2 outline-none">
                {/* Image Container with Next.js Image tag */}
                <div className="relative w-full aspect-4/3 rounded-xl md:rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-gray-100 bg-gray-100">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle Dark Gradient Overlay on Hover for Premium Feel */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f2744]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Global style injection for the custom dot active state.
        This forces the active dot to turn into your primary red color and expand slightly. 
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .recent-work-slider .slick-dots li {
          margin: 0 4px;
        }
        .recent-work-slider .slick-dots li.slick-active .slick-custom-dot {
          background-color: #c41e3a !important;
          width: 1.5rem !important; /* Expands into a pill shape on active */
        }
        @media (min-width: 768px) {
          .recent-work-slider .slick-dots li.slick-active .slick-custom-dot {
            width: 3rem !important; /* Longer line on desktop */
          }
        }
      `}} />
    </section>
  );
}