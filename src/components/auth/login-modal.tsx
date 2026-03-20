"use client";

import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import Link from "next/link";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { X, ArrowRight, KeyRound } from "lucide-react";

interface LoginModalProps {
  onClose: () => void;
  redirect?: string;
}

const LoginModal = ({ onClose, redirect }: LoginModalProps) => {
  // Your exact unchanged API logic
  const [state, formAction, isPending] = useActionState(loginUser, null);
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
    // If login is successful, you might want to close the modal here:
    // if (state && state.success) onClose();
  }, [state]);

  return (
    // 1. FULL SCREEN BLURRED BACKGROUND
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Background Overlay - clicking it closes the modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#023047]/40 backdrop-blur-sm cursor-pointer"
      />

      {/* 2. THE MODAL BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-[420px] bg-white shadow-2xl z-10 p-8 rounded-2xl overflow-hidden"
      >
        {/* ========================================= */}
        {/* SIMPLE BACKGROUND SHAPES */}
        {/* ========================================= */}
        {/* Top Right Shape */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A9AFF]/10 rounded-bl-full pointer-events-none" />
        {/* Bottom Left Shape */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#023047]/5 rounded-tr-full pointer-events-none" />


        {/* Close Button (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-[#023047] transition z-20 bg-white/50 rounded-full p-1"
        >
          <X size={20} />
        </button>

        {/* Header Text */}
        <div className="mb-6 relative z-10">
          <h2 className="text-2xl font-extrabold text-[#023047]">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Please enter your details to sign in.</p>
        </div>

        {/* 3. FORM CONTENT */}
        <form action={formAction} className="flex flex-col gap-4 relative z-10">
          {redirect && <input type="hidden" name="redirect" value={redirect} />}

          {/* Username or Email Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-bold text-[#023047]">
              Username or email <span className="text-[#3A9AFF]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="user@amkov.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 p-3 rounded-lg text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-colors"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-bold text-[#023047]">
              Password <span className="text-[#3A9AFF]">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                required
                placeholder="••••••••"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 bg-gray-50 p-3 pr-10 rounded-lg text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#3A9AFF] transition"
              >
                {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="w-4 h-4 border-gray-300 rounded-sm cursor-pointer accent-[#3A9AFF]"
            />
            <label htmlFor="remember" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#023047] hover:bg-[#3A9AFF] text-white font-bold py-3.5 mt-2 rounded-lg transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
          >
            {isPending ? "Logging in..." : "Login to Account"}
          </button>

          {/* ========================================= */}
          {/* HIGHLIGHTED: Lost Password Box */}
          {/* ========================================= */}
          <Link
            href="/forget-password"
            onClick={onClose}
            className="group flex items-center justify-between mt-2 p-3.5 bg-[#F8FAFC] border border-gray-100 hover:border-[#3A9AFF]/30 rounded-lg transition-all"
          >
            <div className="flex items-center gap-3">
              <KeyRound size={16} className="text-gray-400 group-hover:text-[#3A9AFF] transition-colors" />
              <span className="text-sm font-semibold text-gray-600 group-hover:text-[#023047] transition-colors">
                Lost your password?
              </span>
            </div>
            <ArrowRight size={16} className="text-gray-300 group-hover:text-[#3A9AFF] transform group-hover:translate-x-1 transition-all" />
          </Link>

          <hr className="border-gray-100 mt-2 mb-1" />

          {/* Sign Up Link */}
          <div className="text-center">
            <span className="text-sm text-gray-500">Don&apos;t have an account yet? </span>
            <Link
              href="/register"
              onClick={onClose}
              className="text-sm font-bold text-[#3A9AFF] hover:underline"
            >
              Sign up
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;