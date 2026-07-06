"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, ChevronRight, Clock, MapPin, Search } from "lucide-react";
import { toast } from "sonner";
import { IAddress } from "@/types/address.interface";
import { BASEURL } from "@/utils/constant";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const step1Options = ["Single Family Home", "Townhome or Duplex", "Manufactured or Mobile", "Commercial"];
const step2Options = ["Under 1,500", "1,500 to 2,500", "2,500 to 3,500", "3,500+"];
const step3Options = ["ASAP - Emergency", "In the next 30 days", "More than a month from now"];
const step4Options = ["Cash or Check", "Credit Card", "Financing / Monthly payments", "Insurance", "Not sure yet"];

export default function EstimateForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [validZips, setValidZips] = useState<string[]>([]);
  const [zipError, setZipError] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [zipSearch, setZipSearch] = useState("");

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await fetch(`${BASEURL}/address`);
        const json = await res.json();
        if (json.success && json.data) {
          console.log(json.data)
          const zips = Array.from(new Set(json.data.map((item: IAddress) => item.zip))) as string[];
          setValidZips(zips);
        }
      } catch (error) {
        console.error("Failed to fetch addresses", error);
      }
    };
    fetchAddresses();
  }, []);

  const filteredZips = [...validZips]
    .filter((zip) => zip.includes(zipSearch))
    .sort((a, b) => a.localeCompare(b));

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

  // --- Centralized Form State ---
  const [formData, setFormData] = useState({
    homeType: "",
    squareFeet: "",
    timeline: "",
    paymentMethod: "",
    streetAddress: "",
    city: "",
    state: "TX", // Defaulted to TX as per image
    zipCode: "",
    name: "",
    email: "",
    phone: "",
    sender: "DFW_ESTIMATE"
  });

  // --- Navigation & Handlers ---
  const nextStep = () => {
    if (currentStep < 6) setCurrentStep((prev) => prev + 1);
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
      // Navigate to schedule page with data in URL
      router.push(`/schedule?${queryParams}`);
    }, 1000);
  };

  // --- Validation Logic ---
  const isStepValid = () => {
    switch (currentStep) {
      case 1: return !!formData.homeType;
      case 2: return !!formData.squareFeet;
      case 3: return !!formData.timeline;
      case 4: return !!formData.paymentMethod;
      // Step 5 requires 5 digits and NO zip error
      case 5: return !!formData.streetAddress && !!formData.city && formData.zipCode.length === 5 && !zipError;
      case 6: return !!formData.name && !!formData.email && !!formData.phone;
      default: return false;
    }
  };

  // Calculate Progress Percentage
  const progressPercent = Math.round((currentStep / 6) * 100);

  return (
    <div className="relative w-full max-w-md md:max-w-lg mx-auto mt-5 font-sans">

      {/* Inline Styles for Custom Floating Animation & Gradients */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50% { transform: translateY(-6px) rotate(-4deg); }
        }
        .animate-float {
          animation: floatUpDown 3s ease-in-out infinite;
        }
        .form-cta-text {
          background: linear-gradient(135deg, #c41e3a 0%, #a01830 100%);
        }
        .waterflow-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .waterflow-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .waterflow-scroll::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .waterflow-scroll::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />

      {/* Floating Angled Badge */}
      <div className="absolute -top-5 -left-2 md:-left-8 z-20 bg-[#0f2744] border-2 border-white/20 text-white text-[0.65rem] md:text-xs font-bold px-4 py-1.5 rounded-md flex items-center shadow-xl animate-float">
        <MapPin className="w-3.5 h-3.5 text-primary mr-1.5" />
        EXCLUSIVE TO <span className="text-primary ml-1">TEXAS</span>
      </div>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden  relative z-10">

        {/* Header Section */}
        <div className="form-cta-text text-white text-center pt-10 pb-6 px-4 relative">

          {/* Active Light Dot + Limited Spots */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-white/10 border border-white/20 text-xs md:text-sm font-bold px-3 py-1 rounded-full flex items-center backdrop-blur-sm">
            {/* Glowing Yellow Pulse Dot */}
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400 shadow-[0_0_8px_#facc15]"></span>
            </span>
            LIMITED SPOTS AVAILABLE
          </div>

          <h2 className="text-xl md:text-2xl my-2 font-extrabold flex items-center justify-center gap-2 mt-2">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
            Get Your 60-Second Estimate
          </h2>
          <p className="text-xs md:text-sm mt-1 text-white/90 font-medium">
            Free quote • No obligation • Employee pricing available
          </p>
        </div>

        {/* Progress Bar */}
        {/* Progress Bar */}
        <div className="px-6 pt-5">
          <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
            <span>Step <span className="text-[#c41e3a]">{currentStep}</span> of 6</span>
            <span className="text-[#c41e3a]">{progressPercent}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div
              className="bg-linear-to-r from-[#0f2744] to-primary h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* --- FORM BODY --- */}
        <div className="px-6 pb-6 min-h-[300px] flex flex-col">

          {/* STEP 1: Home Type */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                What type of <span className="text-[#c41e3a]">home</span> do you have?
              </h3>
              <div className="space-y-3">
                {step1Options.map((option) => (
                  <RadioOption
                    key={option}
                    label={option}
                    selected={formData.homeType === option}
                    onClick={() => handleOptionSelect("homeType", option)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Square Feet */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                About how many <span className="text-[#c41e3a]">square feet</span> is your home?
              </h3>
              <div className="space-y-3">
                {step2Options.map((option) => (
                  <RadioOption
                    key={option}
                    label={option}
                    selected={formData.squareFeet === option}
                    onClick={() => handleOptionSelect("squareFeet", option)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Timeline */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                When do you need <span className="text-[#c41e3a]">your new roof</span>?
              </h3>
              <div className="space-y-3">
                {step3Options.map((option) => (
                  <RadioOption
                    key={option}
                    label={option}
                    selected={formData.timeline === option}
                    onClick={() => handleOptionSelect("timeline", option)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Payment */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                How are you planning to <span className="text-[#c41e3a]">pay</span>?
              </h3>
              <div className="space-y-3">
                {step4Options.map((option) => (
                  <RadioOption
                    key={option}
                    label={option}
                    selected={formData.paymentMethod === option}
                    onClick={() => handleOptionSelect("paymentMethod", option)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Address */}
          {currentStep === 5 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                What&apos;s your <span className="text-[#c41e3a]">property address</span>?
              </h3>
              <div className="space-y-4">
                <input
                  type="text" placeholder="Street Address"
                  value={formData.streetAddress} onChange={(e) => handleChange("streetAddress", e.target.value)}
                  className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors text-gray-700 font-medium"
                />
                <div className="flex gap-4">
                  <input
                    type="text" placeholder="City"
                    value={formData.city} onChange={(e) => handleChange("city", e.target.value)}
                    className="w-2/3 p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors text-gray-700 font-medium"
                  />
                  <input
                    type="text" value={formData.state} disabled
                    className="w-1/3 p-3.5 border-2 border-gray-200 bg-gray-50 rounded-lg text-gray-500 font-medium text-center"
                  />
                </div>

                {/* Updated ZIP Input */}
                <input
                  type="text" placeholder="Zip Code" maxLength={5}
                  value={formData.zipCode} onChange={(e) => handleZipChange(e.target.value)}
                  className={`w-full p-3.5 border-2 rounded-lg outline-none transition-colors text-gray-700 font-medium ${zipError ? "border-[#c41e3a] focus:border-[#c41e3a] bg-red-50" : "border-gray-200 focus:border-primary"
                    }`}
                />
              </div>

              {/* Conditional Error Message */}
              {zipError && (
                <div className="mt-2 space-y-2 animate-in fade-in">
                  <span id="invalid-zip-error-message" className="text-[#c41e3a] text-xs font-semibold block leading-relaxed">
                    Sorry, we don&apos;t currently service this area. Please enter a ZIP code in the Dallas-Fort Worth metro area.
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setZipSearch("");
                      setIsDialogOpen(true);
                    }}
                    className="text-[#c41e3a] hover:text-[#a01830] text-xs font-bold underline flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    View available service areas
                  </button>
                </div>
              )}
            </div>
          )}

          {/* STEP 6: Contact Info */}
          {currentStep === 6 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-lg md:text-xl font-bold text-center text-[#0f2744] mb-5">
                Almost done! <span className="text-[#c41e3a]">How can we reach you</span>?
              </h3>
              <div className="space-y-4">
                <input
                  type="text" placeholder="Full Name"
                  value={formData.name} onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors text-gray-700 font-medium"
                />
                <input
                  type="email" placeholder="Email Address"
                  value={formData.email} onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors text-gray-700 font-medium"
                />
                <input
                  type="tel" placeholder="Phone Number"
                  value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-primary transition-colors text-gray-700 font-medium"
                />
              </div>
            </div>
          )}

          {/* --- Bottom Navigation Buttons --- */}
          <div className="flex gap-3 mt-auto pt-5">
            {currentStep > 1 && (
              <button onClick={prevStep} className="flex-1 py-3.5 bg-gray-50 text-gray-500 font-bold rounded-lg flex items-center justify-center hover:bg-gray-100 border border-gray-200 transition-colors text-sm">
                <ChevronLeft className="w-4 h-4 mr-1" /> BACK
              </button>
            )}

            {currentStep < 6 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex-2 py-3.5 font-bold rounded-lg flex items-center justify-center transition-all shadow-md text-sm ${isStepValid()
                  ? "bg-[linear-gradient(135deg,#c41e3a_0%,#a01830_100%)] text-white hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                  }`}
              >
                CONTINUE <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid() || isSubmitting}
                className={`flex-2 py-3.5 font-bold rounded-lg flex items-center justify-center transition-all shadow-md text-sm ${isStepValid() && !isSubmitting
                  ? "bg-primary text-white hover:bg-red-800 hover:shadow-lg hover:-translate-y-0.5"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                  }`}
              >
                {isSubmitting ? "PROCESSING..." : "GET MY ESTIMATE →"}
              </button>
            )}
          </div>

        </div>

        {/* Footer Guarantees */}
        <div className="bg-[#0f2744] py-3 md:py-4 px-4 flex justify-between items-center text-[0.65rem] text-xs md:text-sm text-white/80 font-bold">
          <span className="flex items-center"><Check className="w-3 h-3 text-primary mr-1" /> Owner-Operated</span>
          <span className="flex items-center"><Check className="w-3 h-3 text-primary mr-1" /> Insured</span>
          <span className="flex items-center"><Check className="w-3 h-3 text-primary mr-1" /> Zero Obligation</span>
        </div>
      </div>

      {/* Dialog for available service areas with Waterflow Design */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent showCloseButton={false} className="sm:max-w-md bg-white border border-gray-100 rounded-2xl shadow-2xl p-0 overflow-hidden gap-0">
          
          {/* Waterflow Gradient Header */}
          <div className="bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_50%,#c41e3a_100%)] text-white p-6 pb-8 relative overflow-hidden">
            {/* Organic/Glassmorphic flowing backdrops */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-500/20 rounded-full blur-xl pointer-events-none"></div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider bg-white/15 border border-white/10 text-white mb-2.5 backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                SERVICE AREA
              </span>
              <DialogTitle className="text-2xl font-extrabold text-white tracking-tight">
                DFW Service Areas
              </DialogTitle>
              <DialogDescription className="text-white/80 text-xs mt-1.5 font-medium leading-relaxed">
                We provide custom estimates for these ZIP codes in the Dallas-Fort Worth metroplex.
              </DialogDescription>
            </div>
            
            {/* Wavy Waterflow SVG Divider */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[16px] fill-white text-white">
                <path d="M0,0 C150,90 350,90 500,60 C650,30 850,30 1200,90 L1200,120 L0,120 Z" />
              </svg>
            </div>
          </div>

          {/* Dialog Body */}
          <div className="p-6 pt-4 space-y-4">
            
            {/* Styled Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Type your ZIP code to search..."
                value={zipSearch}
                onChange={(e) => setZipSearch(e.target.value.replace(/\D/g, "").slice(0, 5))}
                className="w-full p-3 pl-10 border-2 border-slate-100 rounded-xl outline-none focus:border-primary text-sm font-semibold text-gray-700 bg-slate-50/50 shadow-inner focus:bg-white transition-all duration-300"
              />
              <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
            </div>

            {/* Cascading Scrollable ZIP Grid */}
            <div className="max-h-60 overflow-y-auto pr-1 border border-slate-100 rounded-xl p-3 bg-slate-50/30 waterflow-scroll">
              <div className="grid grid-cols-4 gap-2 text-center">
                {filteredZips.map((zip, index) => (
                  <div
                    key={zip}
                    style={{ 
                      animationDelay: `${index * 15}ms`,
                      animationFillMode: 'both'
                    }}
                    className="animate-in fade-in slide-in-from-bottom-2 duration-300 p-2.5 text-xs font-bold text-[#0f2744] bg-white border border-slate-200/60 rounded-xl shadow-xs hover:border-primary hover:text-[#c41e3a] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {zip}
                  </div>
                ))}
                {filteredZips.length === 0 && (
                  <div className="col-span-4 py-10 text-center text-sm text-slate-400 font-semibold flex flex-col items-center justify-center gap-2">
                    <span>No matching ZIP codes found</span>
                    <span className="text-xs font-normal text-slate-300">Try searching for a different code</span>
                  </div>
                )}
              </div>
            </div>

            {/* Footer / Close Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-600 font-bold rounded-xl transition-all duration-200 text-sm cursor-pointer shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// --- Reusable Radio Option Component ---
function RadioOption({ label, selected, onClick }: { label: string, selected: boolean, onClick: () => void }) {
  return (
    <label
      onClick={onClick}
      className={`flex items-center p-3.5 md:p-4 border-2 rounded-lg cursor-pointer transition-all ${selected
        ? "border-primary bg-[#fef2f2]"
        : "border-gray-100 bg-gray-50/50 hover:border-gray-300"
        }`}
    >
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 shadow-inner ${selected ? "border-primary bg-[#c41e3a]" : "border-gray-300 bg-white"
        }`}>
        {selected && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
      </div>
      <span className={`font-semibold text-sm md:text-base ${selected ? "text-[#c41e3a]" : "text-gray-700"}`}>
        {label}
      </span>
    </label>
  );
}