"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Mock Data for the Live Activity Feed ---
const names = ["Amanda", "Brandon", "Sarah", "Mike", "John", "Lisa", "David", "Jessica"];
const locations = ["Potosi", "Baird", "Abilene", "Dallas", "Fort Worth", "Plano", "McKinney"];

export default function ToastAlert() {
      const [isVisible, setIsVisible] = useState(false);
      const [alertData, setAlertData] = useState({ name: "Amanda", location: "Potosi", minutes: 2 });

      // Refs to hold timeout IDs so we can clean them up safely if the component unmounts
      const showTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
      const hideTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

      useEffect(() => {
            // Function to generate random data
            const generateRandomData = () => {
                  const randomName = names[Math.floor(Math.random() * names.length)];
                  const randomLoc = locations[Math.floor(Math.random() * locations.length)];
                  const randomMins = Math.floor(Math.random() * 12) + 1; // 1 to 12 minutes ago
                  return { name: randomName, location: randomLoc, minutes: randomMins };
            };

            // The main loop function
            const startLoop = () => {
                  // 1. Calculate a random delay between 10s (10000ms) and 15s (15000ms)
                  const nextDelay = Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;

                  showTimeoutRef.current = setTimeout(() => {
                        // 2. Set new random data and Show the toast
                        setAlertData(generateRandomData());
                        setIsVisible(true);

                        // 3. Set a timer to Hide the toast after 3 seconds
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
            // z-index ensures it stays above other content, fixed position bottom right
            <div className="fixed bottom-4 right-4 z-50 pointer-events-none font-sans">

                  {/* Framer Motion for Smooth Arrival/Exit Animation */}
                  <AnimatePresence initial={false}>
                        {isVisible && (
                              <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="pointer-events-auto"
                              >
                                    {/* --- Toast Container --- */}
                                    <div className="
              flex items-center gap-2
              bg-[#050a12] border border-[#06b6d4]/20
              rounded-[12px] px-3 py-2 md:px-4 md:py-3
              shadow-[0_10px_40px_rgba(0,0,0,0.8)]
              w-max max-w-[90vw] sm:max-w-md
            ">

                                          {/* --- Red Icon Circle --- */}
                                          <div className="w-[34px] h-[34px] bg-[#b91c1c] rounded-full flex items-center justify-center shrink-0">
                                                <Zap className="w-[18px] h-[18px] text-[#fbbf24] fill-[#fbbf24]" strokeWidth={1} />
                                          </div>

                                          {/* --- Text Content --- */}
                                          <div className="flex flex-col justify-center">
                                                <h6 className="text-white font-bold text-xs md:text-xs leading-tight mb-1">
                                                      {alertData.name} from {alertData.location} checked their ZIP code
                                                </h6>
                                                <p className="text-gray-400 text-[13px] md:text-xs leading-none font-medium">
                                                      {alertData.minutes} {alertData.minutes === 1 ? 'minute' : 'minutes'} ago
                                                </p>
                                          </div>

                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      );
}