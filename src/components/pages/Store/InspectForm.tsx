"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, Clock, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";
import { IAddress } from "@/types/address.interface";
import { BASEURL } from "@/utils/constant";

// --- Form Options Data (Updated to match new reference images) ---
const step1Options = [
  { label: "Single Family Home", icon: "🏠" },
  { label: "Townhome / Duplex", icon: "🏘️" },
  { label: "Multi-Family / Apartment", icon: "🏢" },
  { label: "Commercial Building", icon: "🏪" }
];

const step2Options = [
  { label: "Active leak or water stains inside", icon: "💧" },
  { label: "Missing or damaged shingles visible", icon: "⚡" },
  { label: "Gutter or downspout damage", icon: "📦" },
  { label: "Debris or tree impact on roof", icon: "🌳" },
  { label: "Not sure — I want it inspected", icon: "🔍" }
];

const step3Options = [
  { label: "ASAP — I have an active leak", icon: "🚨" },
  { label: "Within a few days", icon: "⚡" },
  { label: "This week or next", icon: "📅" },
  { label: "Just want it documented for insurance", icon: "📋" }
];

export default function InspectForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [validZips, setValidZips] = useState<string[]>([]);
  const [zipError, setZipError] = useState(false);

  // Fetch valid addresses from API on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await fetch(`${BASEURL}/address`);
        const json = await res.json();
        if (json.success && json.data) {
          const zips = json.data.map((item: IAddress) => item.zip);
          setValidZips(zips);
        }
      } catch (error) {
        console.error("Failed to fetch addresses", error);
      }
    };
    fetchAddresses();
  }, []);

  // Custom handler for ZIP Code to format and validate
  const handleZipChange = (value: string) => {
    const onlyNums = value.replace(/\D/g, '').slice(0, 5); // Max 5 digits
    handleChange("zipCode", onlyNums);

    // Only validate when 5 digits are entered
    if (onlyNums.length === 5) {
      if (!validZips.includes(onlyNums)) {
        setZipError(true);
      } else {
        setZipError(false);
      }
    } else {
      setZipError(false); // Hide error while typing
    }
  };

  // --- Centralized Form State (Updated keys for new questions) ---
  const [formData, setFormData] = useState({
    homeType: "",
    damageNoticed: "",
    urgency: "",
    streetAddress: "",
    city: "",
    state: "TX",
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    serviceType: "STANDARD_ESTIMATE" 
  });

  // --- Navigation & Handlers (Logic remains unchanged) ---
  const nextStep = () => {
    if (currentStep < 5) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOptionSelect = (field: string, value: string) => {
    handleChange(field, value);
    // Auto-advance after a tiny delay for smooth UX
    setTimeout(() => {
      nextStep();
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Convert formData object into a URL query string
    const queryParams = new URLSearchParams(formData as Record<string, string>).toString();

    setTimeout(() => {
      toast.success("Estimate request sent successfully!");
      setIsSubmitting(false);
      router.push(`/storm-damage/book?${queryParams}`);
    }, 1000);
  };

  // --- Validation Logic (Adapted for 5 steps) ---
  const isStepValid = () => {
    switch (currentStep) {
      case 1: return !!formData.homeType;
      case 2: return !!formData.damageNoticed;
      case 3: return !!formData.urgency;
      // Step 4 now requires a 5-digit ZIP and NO zipError
      case 4: return !!formData.streetAddress && !!formData.city && formData.zipCode.length === 5 && !zipError;
      case 5: return !!formData.name && !!formData.email && !!formData.phone;
      default: return false;
    }
  };

  // Calculate Progress Percentage for 5 steps
  const progressPercent = Math.round((currentStep / 5) * 100);

  return (
    <div className="relative text-start w-full max-w-[480px] mx-auto mt-6 font-sans">

      {/* Main Card Container */}
      <div className="bg-[#1118276e] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden relative z-10">

        {/* --- Header Section (Matching dark theme) --- */}
        <div className="bg-[#1f091c99] border-b border-[#c41e3a]/10 p-5 md:p-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10  bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
              ⚡
            </div>
            <div>
              <h2 className="text-white  text-base md:text-lg font-bold leading-tight">
                Schedule Your Free Inspection
              </h2>
              <p className="text-gray-400 text-start text-xs md:text-sm mt-0.5">
                Josh will personally assess your roof
              </p>
            </div>
          </div>
        </div>

        {/* --- Progress Bar --- */}
        <div className="px-6 pt-6 pb-2">
          <div className="w-full bg-gray-800 rounded-full h-1 mb-3">
            <div
              className="bg-[#c41e3a] h-1 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[0.7rem] md:text-xs font-medium text-gray-500">
            <span>Step <span className="text-[#c41e3a] font-bold">{currentStep}</span> of 5</span>
            <span>{progressPercent}%</span>
          </div>
        </div>

        {/* --- FORM BODY --- */}
        <div className="px-6 pb-6 min-h-[350px] flex flex-col">

          {/* STEP 1: Home Type */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-white text-start text-base md:text-xl font-bold mb-1">
                What type of home do you have?
              </h3>
              <p className="text-gray-400 text-start text-sm mb-6">
                This helps us prepare the right equipment.
              </p>
              <div className="space-y-3">
                {step1Options.map((option) => (
                  <RadioOption
                    key={option.label}
                    label={option.label}
                    icon={option.icon}
                    selected={formData.homeType === option.label}
                    onClick={() => handleOptionSelect("homeType", option.label)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Damage Noticed */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-white text-base md:text-xl font-bold mb-1">
                What damage have you noticed?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Select what best describes your situation.
              </p>
              <div className="space-y-3">
                {step2Options.map((option) => (
                  <RadioOption
                    key={option.label}
                    label={option.label}
                    icon={option.icon}
                    selected={formData.damageNoticed === option.label}
                    onClick={() => handleOptionSelect("damageNoticed", option.label)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Urgency */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-white text-base md:text-xl font-bold mb-1">
                How urgently do you need the inspection?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We prioritize active leaks and severe damage.
              </p>
              <div className="space-y-3">
                {step3Options.map((option) => (
                  <RadioOption
                    key={option.label}
                    label={option.label}
                    icon={option.icon}
                    selected={formData.urgency === option.label}
                    onClick={() => handleOptionSelect("urgency", option.label)}
                  />
                ))}
              </div>
            </div>
          )}
          {/* STEP 4: Address */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-white text-base md:text-xl font-bold mb-1">
                Where is the property?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We need your address to schedule the inspection.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Street Address</label>
                  <input
                    type="text" placeholder="123 Main Street"
                    value={formData.streetAddress} onChange={(e) => handleChange("streetAddress", e.target.value)}
                    className="w-full p-3.5 bg-[#0a111a] border border-gray-700 rounded-lg outline-none focus:border-[#c41e3a] transition-colors text-white text-sm"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="w-[50%]">
                    <label className="block text-gray-300 text-sm font-bold mb-2">City</label>
                    <input
                      type="text" placeholder="Abilene"
                      value={formData.city} onChange={(e) => handleChange("city", e.target.value)}
                      className="w-full p-3.5 bg-[#0a111a] border border-gray-700 rounded-lg outline-none focus:border-[#c41e3a] transition-colors text-white text-sm"
                    />
                  </div>
                  <div className="w-[20%]">
                    <label className="block text-gray-300 text-sm font-bold mb-2">State</label>
                    <input
                      type="text" value={formData.state} disabled
                      className="w-full p-3.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-500 font-bold text-center text-sm"
                    />
                  </div>
                  <div className="w-[30%]">
                    <label className="block text-gray-300 text-sm font-bold mb-2">ZIP</label>
                    <input
                      type="text" placeholder="99950" maxLength={5}
                      value={formData.zipCode} onChange={(e) => handleZipChange(e.target.value)}
                      className={`w-full p-3.5 bg-[#0a111a] border rounded-lg outline-none transition-colors text-white text-sm ${zipError ? "border-[#c41e3a] focus:border-[#c41e3a] bg-[#c41e3a]/10" : "border-gray-700 focus:border-[#c41e3a]"
                        }`}
                    />
                  </div>
                </div>

                {/* Conditional Error Message */}
                {zipError && (
                  <p id="invalid-zip-error-message" className="text-[#c41e3a] md:text-xs font-semibold mt-4 animate-in fade-in">
                    We currently serve the Abilene & Big Country area. Please enter a valid ZIP code.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 5: Contact Info */}
          {currentStep === 5 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-white text-base md:text-xl font-bold mb-1">
                Where should we send your results?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                We&apos;ll use this to contact you with our findings.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Full Name</label>
                  <input
                    type="text" placeholder="John Doe"
                    value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full p-3.5 bg-[#0a111a] border border-gray-700 rounded-lg outline-none focus:border-[#c41e3a] transition-colors text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email" placeholder="john@example.com"
                    value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full p-3.5 bg-[#0a111a] border border-gray-700 rounded-lg outline-none focus:border-[#c41e3a] transition-colors text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel" placeholder="(555) 123-4567"
                    value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full p-3.5 bg-[#0a111a] border border-gray-700 rounded-lg outline-none focus:border-[#c41e3a] transition-colors text-white text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* --- Bottom Navigation Buttons --- */}
          <div className="flex gap-3 mt-8 pt-4 border-t border-gray-800">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="py-3.5 px-5 md:px-8 bg-transparent text-gray-300 font-bold rounded-xl flex items-center justify-center hover:bg-white/5 border border-gray-700 transition-colors text-sm"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Back
              </button>
            )}

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex-1 py-3.5 font-bold rounded-xl flex items-center justify-center transition-all text-sm tracking-wide ${isStepValid()
                    ? "bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] text-white shadow-lg hover:-translate-y-0.5"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  }`}
              >
                CONTINUE →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`flex-1 py-3.5 font-bold rounded-xl flex items-center justify-center transition-all text-sm tracking-wide ${isStepValid() && !isSubmitting
                    ? "bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] text-white shadow-lg hover:-translate-y-0.5"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {isSubmitting ? "PROCESSING..." : "SUBMIT REQUEST"}
              </button>
            )}
          </div>

        </div>

        {/* Footer Guarantees (Matching dark theme references) */}
        <div className="bg-[#0b121c] py-4 px-4 flex justify-center gap-4 md:gap-8 items-center text-[0.65rem] md:text-[0.7rem] text-gray-400 font-medium border-t border-gray-800">
          <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-[#c41e3a] mr-1.5" /> 100% Free</span>
          <span className="flex items-center"><Check className="w-3.5 h-3.5 text-[#c41e3a] mr-1.5" /> No Obligation</span>
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 text-[#c41e3a] mr-1.5" /> Under 24hr Response</span>
        </div>
      </div>
    </div>
  );
}

// --- Reusable Radio Option Component (No circles, matching images) ---
function RadioOption({ label, icon, selected, onClick }: { label: string, icon: string, selected: boolean, onClick: () => void }) {
  return (
    <label
      onClick={onClick}
      className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selected
          ? "border-[#c41e3a] bg-[#c41e3a]/5"
          : "border-gray-800 bg-white/2 hover:bg-white/4"
        }`}
    >
      <div className="w-6 text-base md:text-xl mr-3 opacity-90 flex justify-center">
        {icon}
      </div>
      <span className={`font-medium text-sm md:text-[15px] ${selected ? "text-white" : "text-gray-300"}`}>
        {label}
      </span>
    </label>
  );
}