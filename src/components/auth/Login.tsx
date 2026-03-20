"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LogIn, Home, ShieldCheck } from "lucide-react";
import LoginModal from "./login-modal"; // Leaving your modal untouched!

interface LoginProps {
  redirect?: string;
}

const Login = ({ redirect }: LoginProps) => {
  // Opens the modal automatically when the page loads
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  return (
    <div className="py-10 md:py-16 bg-[#F8FAFC] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A9AFF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#023047]/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      {/* Fallback Page Content (Visible if modal is closed) */}
      <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-md">
        
        {/* Auth Icon */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 text-[#3A9AFF]">
          <ShieldCheck size={40} strokeWidth={1.5} />
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#023047] mb-3 tracking-tight">
          Authentication
        </h1>
        <p className="text-gray-500 mb-10 font-medium leading-relaxed">
          Please log in to access your dashboard, view your orders, and manage your wishlist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="w-full sm:w-auto flex flex-1 items-center justify-center gap-2 bg-[#023047] hover:bg-[#3A9AFF] text-white px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm"
          >
            <LogIn size={18} />
            Login Again
          </button>
          
          <Link 
            href="/"
            className="w-full sm:w-auto flex flex-1 items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#023047] border border-gray-200 px-6 py-2.5 rounded-xl font-bold transition-colors shadow-sm"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* The untouched LoginModal */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <LoginModal onClose={() => setIsLoginModalOpen(false)} redirect={redirect} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Login;