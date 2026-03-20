"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "../shared/InputFieldError";
import { Field, FieldDescription, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { registerUser } from "@/services/auth/registerUser";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const RegisterForm = () => {
  // Logic remains exactly the same
  const [state, formAction, isPending] = useActionState(registerUser, null);
  
  // UI only logic for password toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      
      {/* Do not change: we pass role=TOURIST as hidden field */}
      <input type="hidden" name="role" value="TOURIST" />
      
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
          
          {/* Name */}
          <Field>
            <label htmlFor="name" className="text-sm font-bold text-[#023047] mb-1 block">
              Full Name <span className="text-[#3A9AFF]">*</span>
            </label>
            <Input 
              id="name"
              name="name" 
              type="text" 
              placeholder="John Doe" 
              className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400" 
            />
            <InputFieldError field="name" state={state} />
          </Field>

          {/* Email */}
          <Field>
            <label htmlFor="email" className="text-sm font-bold text-[#023047] mb-1 block">
              Email <span className="text-[#3A9AFF]">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="user@example.com"
              className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400"
            />
            <InputFieldError field="email" state={state} />
          </Field>

          {/* Phone */}
          <Field>
            <label htmlFor="phone" className="text-sm font-bold text-[#023047] mb-1 block">
              Phone <span className="text-[#3A9AFF]">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="number"
              placeholder="+1 234 567 890"
              className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400 [&::-webkit-inner-spin-button]:appearance-none"
            />
            <InputFieldError field="phone" state={state} />
          </Field>

          {/* Address */}
          <Field>
            <label htmlFor="address" className="text-sm font-bold text-[#023047] mb-1 block">
              Address <span className="text-[#3A9AFF]">*</span>
            </label>
            <Input
              id="address"
              name="address"
              type="text"
              placeholder="123 Tech Street"
              className="w-full border border-gray-200 bg-gray-50 p-3.5 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400"
            />
            <InputFieldError field="address" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <label htmlFor="password" className="text-sm font-bold text-[#023047] mb-1 block">
              Password <span className="text-[#3A9AFF]">*</span>
            </label>
            <div className="relative">
              <Input 
                id="password"
                name="password" 
                placeholder="••••••••"
                type={showPassword ? "text" : "password"} 
                className="w-full border border-gray-200 bg-gray-50 p-3.5 pr-11 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3.5 flex items-center text-gray-400 hover:text-[#3A9AFF] transition"
              >
                {showPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
              </button>
            </div>
            <InputFieldError field="password" state={state} />
          </Field>

          {/* Confirm Password */}
          <Field>
            <label htmlFor="confirmPassword" className="text-sm font-bold text-[#023047] mb-1 block">
              Confirm Password <span className="text-[#3A9AFF]">*</span>
            </label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                type={showConfirmPassword ? "text" : "password"} 
                className="w-full border border-gray-200 bg-gray-50 p-3.5 pr-11 rounded-xl text-sm outline-none focus:border-[#3A9AFF] focus:bg-white transition-all placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3.5 flex items-center text-gray-400 hover:text-[#3A9AFF] transition"
              >
                {showConfirmPassword ? <IoEyeOffOutline size={18} /> : <IoEyeOutline size={18} />}
              </button>
            </div>
            <InputFieldError field="confirmPassword" state={state} />
          </Field>
        </div>

        {/* Action Button & Footer */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-[#023047] hover:bg-black text-white font-black py-4 rounded-xl transition-all shadow-[0_4px_14px_rgba(2,48,71,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed uppercase text-sm tracking-wider"
          >
            {isPending ? "Configuring Account..." : "Create Account"}
          </Button>

          <hr className="w-full border-gray-100" />

          <FieldDescription className="text-center font-medium text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-[#3A9AFF] font-bold hover:text-[#023047] hover:underline transition-colors">
              Sign in
            </Link>
          </FieldDescription>
        </div>

      </FieldGroup>
    </form>
  );
};

export default RegisterForm;