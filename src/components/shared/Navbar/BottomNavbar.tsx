"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2"; // Premium CTA icon

const MobileNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", title: "Home", icon: GoHome },
    { path: "/wishlist", title: "Wish", icon: IoMdHeartEmpty },
    // Center CTA goes here visually
    { path: "/cart", title: "Cart", icon: FiShoppingCart },
    { path: "/dashboard", title: "Profile", icon: FaRegUser },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-4xl shadow-[0_-10px_40px_rgba(0,0,0,0.08)] px-6 pb-2 pt-3">
      <div className="flex justify-between items-center relative">
        
        {/* ========================================= */}
        {/* LEFT ITEMS (Home, Wish) */}
        {/* ========================================= */}
        <div className="flex w-2/5 justify-between">
          {navItems.slice(0, 2).map((item) => {
            // Check if current route matches item path
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-col items-center justify-center w-14 gap-1 group relative"
              >
                {/* Icon */}
                <Icon
                  className={`text-2xl transition-all duration-300 ${
                    isActive ? "text-black scale-110" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                {/* Text */}
                <span
                  className={`text-[10px] font-bold transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                >
                  {item.title}
                </span>
                {/* Animated Active Dot */}
                <span
                  className={`absolute -bottom-1 w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-2"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* ========================================= */}
        {/* CENTER FLOATING CTA BUTTON */}
        {/* ========================================= */}
        <div className="absolute left-1/2 -top-10 -translate-x-1/2">
          <Link
            href="/products" // Change this to whatever action you want the center button to do
            className="flex items-center justify-center w-14 h-14 bg-black rounded-full border-[6px] border-[#F4F7F9] shadow-lg hover:scale-105 hover:bg-[#3A9AFF] transition-all duration-300"
          >
            <HiOutlineSparkles className="text-white text-2xl" />
          </Link>
        </div>

        {/* ========================================= */}
        {/* RIGHT ITEMS (Cart, Profile) */}
        {/* ========================================= */}
        <div className="flex w-2/5 justify-between">
          {navItems.slice(2, 4).map((item) => {
            // Check if current route matches item path
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-col items-center justify-center w-14 gap-1 group relative"
              >
                {/* Icon */}
                <Icon
                  className={`text-2xl transition-all duration-300 ${
                    isActive ? "text-black scale-110" : "text-gray-400 group-hover:text-gray-600"
                  }`}
                />
                {/* Text */}
                <span
                  className={`text-[10px] font-bold transition-all duration-300 ${
                    isActive ? "text-black" : "text-gray-400"
                  }`}
                >
                  {item.title}
                </span>
                {/* Animated Active Dot */}
                <span
                  className={`absolute -bottom-1 w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 translate-y-2"
                  }`}
                />
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default MobileNavbar;