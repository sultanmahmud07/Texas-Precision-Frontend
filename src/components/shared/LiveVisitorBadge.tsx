"use client";

import React, { useState, useEffect } from "react";

export default function LiveVisitorBadge() {
  // We start with a static number (21) to prevent Next.js hydration mismatch errors
  // between the server render and the initial client render.
  const [visitorCount, setVisitorCount] = useState(21);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateVisitorCount = () => {
      // Generate a random number between 20 and 30
      const newCount = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
      setVisitorCount(newCount);

      // Randomize the next update time between 3 to 7 seconds 
      // This makes the updates feel like natural, organic human traffic
      const nextInterval = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
      timeoutId = setTimeout(updateVisitorCount, nextInterval);
    };

    // Kick off the first update after 3 seconds
    timeoutId = setTimeout(updateVisitorCount, 3000);

    // Cleanup function to prevent memory leaks if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="my-5 bg-white px-4 py-2.5 border border-primary rounded-md shadow-lg flex items-center text-xs md:text-sm font-semibold text-[#1e293b] w-max">
      <span className="relative flex h-3 w-3 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c41e3a] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c41e3a]"></span>
      </span>
      <span className="text-[#c41e3a] mr-1 text-sm font-bold transition-all duration-300">
        {visitorCount}
      </span> 
      homeowners viewing this offer right now
    </div>
  );
}