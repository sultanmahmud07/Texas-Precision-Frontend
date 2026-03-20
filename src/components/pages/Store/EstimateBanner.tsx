"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const EstimateBanner = () => {
      const containerRef = useRef<HTMLDivElement>(null);

      // Track the scroll position
      const { scrollY } = useScroll();

      // --- SCROLL ANIMATIONS ---
      // The overlay scales up slightly and fades to 0 as you scroll down (0px to 400px)
      const overlayScale = useTransform(scrollY, [0, 400], [1, 1.5]);
      const overlayOpacity = useTransform(scrollY, [0, 300], [1, 0]);

      // The text content moves up and fades out
      const textY = useTransform(scrollY, [0, 300], [0, -50]);
      const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);

      // The video background slightly parallax scrolls
      const videoY = useTransform(scrollY, [0, 500], ["0%", "15%"]);

      return (
            <div ref={containerRef} className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#023047]">

                  {/* ========================================= */}
                  {/* 1. BACKGROUND VIDEO */}
                  {/* ========================================= */}
                  <motion.div
                        style={{ y: videoY }}
                        className="absolute inset-0 w-full h-full z-0"
                  >
                        <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover opacity-80"
                        >
                              {/* Replace this src with your actual company/factory video URL */}
                              <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                        </video>
                        {/* Subtle dark gradient to ensure video isn't too bright */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#023047] via-transparent to-[#023047]/50" />
                  </motion.div>

                  {/* ========================================= */}
                  {/* 2. OVERLAY PNG (TRANSPARENT LOGO MASK) */}
                  {/* ========================================= */}
                  <motion.div
                        style={{ scale: overlayScale, opacity: overlayOpacity }}
                        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none origin-center"
                  >
                        {/* INSTRUCTION: 
          Replace this image with a PNG that has a SOLID colored background (e.g., #023047) 
          but a TRANSPARENT hole in the middle in the shape of your AMKOV logo.
        */}
                        <Image
                              src="https://www.transparenttextures.com/patterns/stardust.png" // Placeholder
                              alt="Overlay Mask"
                              width={1200}
                              height={800}
                              className="w-full h-full object-cover mix-blend-multiply opacity-50"
                        />

                        {/* Optional: If you don't have a cutout PNG yet, this simulates a frame/vignette 
          that expands and fades out as you scroll.
        */}
                        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(2,48,71,1)]"></div>
                  </motion.div>

                  {/* ========================================= */}
                  {/* 3. ANIMATED TEXT CONTENT */}
                  {/* ========================================= */}
                  <motion.div
                        style={{ y: textY, opacity: textOpacity }}
                        className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto"
                  >
                        <motion.span
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="inline-block py-1.5 px-4 mb-6 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] border border-white/20 backdrop-blur-md"
                        >
                              Discover AMKOV
                        </motion.span>

                        <motion.h1
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl"
                        >
                              Redefining Digital Imaging
                        </motion.h1>

                        <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                              className="text-slate-200 text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl drop-shadow-md"
                        >
                              Since 2005, we have been innovating optical and digital camera technology for global B2B partners.
                        </motion.p>
                  </motion.div>

                  {/* Scroll Indicator Arrow */}
                  <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        style={{ opacity: textOpacity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce"
                  >
                        <span className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">Scroll</span>
                        <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
                  </motion.div>

            </div>
      );
};

export default EstimateBanner;