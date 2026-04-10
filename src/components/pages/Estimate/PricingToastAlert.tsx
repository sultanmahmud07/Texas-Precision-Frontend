"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Mock Data for the Live Activity Feed ---
const names = ["Lisa H.", "Amanda R.", "Brandon T.", "Sarah M.", "Mike D.", "John S.", "Jessica W."];
const locations = ["Mesquite", "Potosi", "Baird", "Abilene", "Dallas", "Fort Worth", "Plano"];

export default function PricingToastAlert() {
      const [isVisible, setIsVisible] = useState(false);
      const [alertData, setAlertData] = useState({ name: "Lisa H.", location: "Mesquite" });

      // Refs to hold timeout IDs so we can clean them up safely
      const showTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
      const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

      useEffect(() => {
            // Function to generate random data
            const generateRandomData = () => {
                  const randomName = names[Math.floor(Math.random() * names.length)];
                  const randomLoc = locations[Math.floor(Math.random() * locations.length)];
                  return { name: randomName, location: randomLoc };
            };

            // The main loop function
            const startLoop = () => {
                  // 1. Calculate a random delay between 10s and 50s
                  const nextDelay = Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;

                  showTimeoutRef.current = setTimeout(() => {
                        // 2. Set new random data and Show the toast
                        setAlertData(generateRandomData());
                        setIsVisible(true);

                        // 3. Set a timer to Hide the toast after 5 seconds
                        hideTimeoutRef.current = setTimeout(() => {
                              setIsVisible(false);

                              // 4. Restart the loop to schedule the next appearance
                              startLoop();
                        }, 5000);

                  }, nextDelay);
            };

            // Kick off the first loop
            startLoop();

            // Cleanup function
            return () => {
                  clearTimeout(showTimeoutRef.current);
                  clearTimeout(hideTimeoutRef.current);
            };
      }, []);

      return (
            // Fixed position bottom right
            <div className="fixed bottom-4 right-4 z-60 pointer-events-none font-sans">

                  {/* Framer Motion for Slide-in & Vibrate Animation */}
                  <AnimatePresence initial={false}>
                        {isVisible && (
                              <motion.div
                                    // Initial state: hidden and pushed to the right
                                    initial={{ opacity: 0, x: 100 }}
                                    // Animate state: slide to 0, but vibrate/shake past it first
                                    animate={{
                                          opacity: 1,
                                          x: [100, -10, 8, -5, 2, 0] // This array creates the "vaivate/shake" effect
                                    }}
                                    // Exit state: slide back to the right and fade out
                                    exit={{ opacity: 0, x: 50, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: 'easeOut' }}
                                    className="pointer-events-auto"
                              >
                                    {/* --- Toast Container (Light Theme matching reference image) --- */}
                                    <div className="
              flex items-center gap-3 md:gap-3
              bg-white/95 backdrop-blur-md
              border-2 border-[#a52033]
              rounded-[15px] px-3 py-2 md:px-5 md:py-4
              shadow-[0_15px_35px_-5px_rgba(165,32,51,0.25)]
              w-max max-w-[90vw] sm:max-w-md
            ">

                                          {/* --- Red Icon Circle --- */}
                                          <div className="w-8 h-8 md:w-10 md:h-10 bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(165,32,51,0.4)]">
                                                <span className='text-xl text-white'>✓</span>
                                          </div>

                                          {/* --- Text Content --- */}
                                          <div className="flex flex-col justify-center text-[#1e293b]">
                                                <p className="text-[14px] md:text-sm leading-[1.3] font-medium pr-2">
                                                      <span className="font-bold text-[#0f2744]">{alertData.name}</span> from {alertData.location} just claimed <br className="hidden md:block" /> employee pricing
                                                </p>
                                          </div>

                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      );
}