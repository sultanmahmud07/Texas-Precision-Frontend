/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Globe, Calendar as CalendarIcon, Clock, Mail } from "lucide-react";
import { toast } from "sonner";
import { BASEURL } from "@/utils/constant";

// --- Types ---
interface AvailableDate {
  date: string;
  slots: string[];
}

export default function BookingWidget() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // --- State Management ---
  const [activeTab, setActiveTab] = useState<"1. Date" | "2. Time" | "3. Info">("1. Date");

  // Calendar State
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 3, 1)); // April 2026 default based on image
  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // Time Slot State
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "TX",
    zip: "",
    serviceType: "",
    notes: "",
  });
  const [showNotes, setShowNotes] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Initialization & API Calls ---

  // 1. Fetch available dates on mount
  useEffect(() => {
    const fetchDates = async () => {
      try {
        const res = await fetch(`${BASEURL}/availability`);
        const json = await res.json();
        if (json.success && json.data) {
          setAvailableDates(json.data);
        }
      } catch (error) {
        console.error("Failed to fetch available dates:", error);
      }
    };
    fetchDates();

    // 2. Pre-fill form data from URL parameters
    const fullName = searchParams.get("name") || "";
    const nameParts = fullName.split(" ");

    setFormData((prev) => ({
      ...prev,
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      email: searchParams.get("email") || "",
      phone: searchParams.get("phone") || "",
      address: searchParams.get("streetAddress") || "",
      city: searchParams.get("city") || "",
      state: searchParams.get("state") || "TX",
      zip: searchParams.get("zipCode") || "",
    }));
  }, [searchParams]);

  // Fetch specific time slots when a date is selected
  const fetchTimeSlots = async (dateStr: string) => {
    try {
      // First check if we already have the slots from the initial bulk fetch
      const existingDate = availableDates.find(d => d.date === dateStr);
      if (existingDate && existingDate.slots.length > 0) {
        setTimeSlots(existingDate.slots);
      } else {
        // Fallback to specific API call
        const res = await fetch(`${BASEURL}/availability/${dateStr}`);
        const json = await res.json();
        if (json.success && json.data) {
          setTimeSlots(json.data.slots);
        }
      }
    } catch (error) {
      console.error("Failed to fetch time slots:", error);
      toast.error("Failed to load time slots.");
    }
  };

  // --- Handlers ---

  const handleDateSelect = (dateStr: string) => {
    setSelectedDate(dateStr);
    fetchTimeSlots(dateStr);
    setActiveTab("2. Time");
  };

  const handleTimeSelect = (timeStr: string) => {
    setSelectedTime(timeStr);
    setActiveTab("3. Info");
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      scheduledDate: selectedDate,
      scheduledTime: formatTime(selectedTime || ""),
      sender: searchParams.get("sender") || "DFW_ESTIMATE"
    };

    try {
      const res = await fetch(`${BASEURL}/inspection/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      if (res.ok) {
        toast.success("Appointment Confirmed!");
        // Redirect or show success page here
        router.push('/success?firstName=' + encodeURIComponent(formData.firstName) +
          '&email=' + encodeURIComponent(formData.email) +
          '&scheduledDate=' + encodeURIComponent(selectedDate || "") +
          '&scheduledTime=' + encodeURIComponent(formatTime(selectedTime || "")) +
          '&address=' + encodeURIComponent(formData.address) +
          '&city=' + encodeURIComponent(formData.city) +
          '&state=' + encodeURIComponent(formData.state) +
          '&serviceType=' + encodeURIComponent(formData.serviceType)
        );
      } else {
        toast.error(json.message || "Failed to book appointment.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- Helpers ---

  // --- Calendar Logic (Place this right before the return statement) ---
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDaysStart = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  // Add this to get "today" without the time for accurate day comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  // Format YYYY-MM-DD to "April 28, 2026"
  const formatDateFull = (dateStr: string) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split('-');
    const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  };

  // Format YYYY-MM-DD to "Apr 28"
  const formatDateShort = (dateStr: string) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split('-');
    const date = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Format 24h to 12h (e.g., "13:30" -> "1:30 PM CDT")
  const formatTime = (time24: string) => {
    if (!time24) return "";
    const [h, m] = time24.split(':');
    let hours = parseInt(h, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${m} ${ampm} CDT`;
  };

  // Check if form is valid to submit
  const isFormValid = () => {
    return formData.firstName && formData.lastName && formData.email && formData.phone &&
      formData.address && formData.city && formData.state && formData.zip &&
      selectedDate && selectedTime;
  };

  return (
    <div className="bg-white w-full text-[#6a7282] font-sans overflow-hidden">

      {/* --- Widget Header --- */}
      <div className="pt-8 pb-4 px-4 text-center">
        <h2 className="text-2xl font-bold text-[#0f2744] mb-2">Book an onsite estimate</h2>
        <p className="text-slate-500 text-sm mb-4">Service: <span className="text-slate-700">Roofing</span></p>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
          <span>Times shown in</span>
          <div className="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer hover:border-slate-300 transition-colors">
            <Globe className="w-4 h-4" />
            <span className="text-slate-700 font-medium">Central Time (CT)</span>
          </div>
        </div>
      </div>

      {/* --- Tabs Header --- */}
      <div className="flex border-b border-slate-200 px-2 mt-4">
        {["1. Date", "2. Time", "3. Info"].map((tab) => (
          <div
            key={tab}
            onClick={() => {
              if (tab === "2. Time" && !selectedDate) return;
              if (tab === "3. Info" && (!selectedDate || !selectedTime)) return;
              setActiveTab(tab as any);
            }}
            className={`flex-1 text-center py-4 text-sm font-medium transition-colors ${activeTab === tab
              ? "text-[#f97316] border-b-[3px] border-[#f97316]"
              : "text-slate-400 cursor-pointer hover:text-slate-600"
              }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* =========================================
          TAB 1: CALENDAR VIEW
          ========================================= */}
      {activeTab === "1. Date" && (
        <div className="p-6 md:p-8 animate-in fade-in slide-in-from-left-4 duration-300">

          {/* Month Selector */}
          <div className="flex items-center justify-between mb-8 px-2">
            <button onClick={prevMonth} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5 text-slate-800" />
            </button>
            <span className="text-lg font-bold text-[#0f2744]">
              {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={nextMonth} className="p-1 hover:bg-slate-100 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5 text-slate-800" />
            </button>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 text-center text-[13px] font-medium text-slate-500 mb-6 gap-y-4">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>

            {/* Empty Offset Days */}
            {emptyDaysStart.map((_, i) => <div key={`empty-${i}`}></div>)}

            {/* Calendar Days */}
            {daysArray.map((day) => {
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

              // 1. Check if the date is in the past or is today
              const cellDate = new Date(year, month, day);
              const isPast = cellDate < today;
              const isToday = cellDate.getTime() === today.getTime();

              // 2. Check if it's available in API AND not in the past
              const isAvailable = !isPast && availableDates.some(d => d.date === dateStr);

              // 3. Determine base styling
              let btnClass = "text-slate-300 cursor-not-allowed";
              if (isAvailable) {
                btnClass = "bg-[#f97316] text-white hover:bg-[#ea580c] shadow-md cursor-pointer";
              }

              return (
                <button
                  key={day}
                  disabled={!isAvailable}
                  onClick={() => handleDateSelect(dateStr)}
                  className={`relative flex items-center justify-center h-10 w-10 mx-auto font-medium text-[15px] rounded-lg transition-all ${btnClass} ${
                    // Highlight today with an outline if it's today's date
                    isToday ? "ring-2 ring-offset-2 ring-[#f97316] font-bold" : ""
                    }`}
                >
                  {day}

                  {/* Small dot indicator for today if it's not an available highlighted button */}
                  {isToday && !isAvailable && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#f97316]"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="text-center mt-8 text-sm text-slate-500">
            Select an available date to see time slots
          </div>
        </div>
      )}

      {/* =========================================
          TAB 2: TIME SLOTS
          ========================================= */}
      {activeTab === "2. Time" && (
        <div className="p-6 md:p-8 animate-in fade-in slide-in-from-right-4 duration-300">

          <button
            onClick={() => setActiveTab("1. Date")}
            className="flex items-center text-[#f97316] text-sm font-medium mb-6 hover:underline"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Change date
          </button>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3 mb-6">
            <CalendarIcon className="w-5 h-5 text-[#f97316]" />
            <span className="text-[#0f2744] font-medium">
              {formatDateFull(selectedDate!)}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {timeSlots.map((time24) => {
              const formattedTime = formatTime(time24);
              const isSelected = selectedTime === time24;
              return (
                <button
                  key={time24}
                  onClick={() => handleTimeSelect(time24)}
                  className={`py-3.5 px-4 rounded-xl text-sm font-medium border transition-all ${isSelected
                    ? "bg-[#f97316] border-[#f97316] text-white shadow-md"
                    : "bg-white border-slate-200 text-[#0f2744] hover:border-[#f97316] hover:text-[#f97316]"
                    }`}
                >
                  {formattedTime}
                </button>
              );
            })}
          </div>

          {timeSlots.length === 0 && (
            <div className="text-center text-slate-500 py-10">
              No time slots available for this date.
            </div>
          )}
        </div>
      )}

      {/* =========================================
          TAB 3: INFORMATION FORM
          ========================================= */}
      {activeTab === "3. Info" && (
        <div className="p-6 md:p-8 animate-in fade-in slide-in-from-right-4 duration-300">

          {/* Header Info */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setActiveTab("2. Time")}
              className="flex items-center text-[#f97316] text-sm font-medium hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Change
            </button>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
              <span className="flex items-center"><CalendarIcon className="w-4 h-4 text-[#f97316] mr-1" /> {formatDateShort(selectedDate!)}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 text-[#f97316] mr-1" /> {formatTime(selectedTime!)}</span>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name *</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
              <div className="relative">
                <input required type="email" name="email" value={formData.email} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
                <Mail className="absolute right-3 top-3.5 w-4 h-4 text-emerald-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Address *</label>
              <input required type="text" name="address" value={formData.address} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">City *</label>
                <input required type="text" name="city" value={formData.city} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">State *</label>
                <input required type="text" name="state" value={formData.state} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">ZIP *</label>
                <input required type="text" name="zip" value={formData.zip} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
              </div>
            </div>

            {/* Optional Notes Toggle */}
            {!showNotes ? (
              <button type="button" onClick={() => setShowNotes(true)} className="text-[#f97316] text-sm font-medium hover:underline">
                + Add service type & notes (optional)
              </button>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Type</label>
                  <input type="text" name="serviceType" placeholder="e.g., Roof Inspection" value={formData.serviceType} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Notes</label>
                  <textarea name="notes" rows={3} value={formData.notes} onChange={handleFormChange} className="w-full p-3 border border-slate-300 rounded-lg outline-none focus:border-[#f97316] text-slate-800 resize-none" />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-md transition-all mt-4 ${isFormValid() && !isSubmitting
                ? "bg-[#f97316] hover:bg-[#ea580c] hover:-translate-y-0.5"
                : "bg-slate-300 cursor-not-allowed"
                }`}
            >
              {isSubmitting ? "Processing..." : "Confirm Appointment"}
            </button>

          </form>
        </div>
      )}

      {/* Absolute Bottom Footer */}
      <div className="bg-slate-50 border-t border-slate-100 py-4 text-center text-sm text-slate-500 font-medium">
        Appointments are 60 minutes
      </div>
    </div>
  );
}