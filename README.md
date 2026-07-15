# 🏡 Texas Precision Roofing — Customer Portal (Next.js 16 + React 19)

A conversion-focused, high-performance customer landing page and scheduler application built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. 

This portal acts as the public face of **Texas Precision Roofing** (DFW's trusted roofing provider), enabling homeowners to calculate custom roofing estimates, check their ZIP codes for recent storm damage coverage, and schedule professional on-site roof inspections directly into the company calendar.

---

## 🚀 Key Features & Interactive Tools

### 1. 💰 Roofing Estimate & Lead Generation
* **Interactive Estimate Calculator**: Engaging step-by-step form capturing home specifics to output detailed, accurate material estimates.
* **Employee Pricing Campaign**: Prominent banners detailing special employee pricing offers starting from $7,999.
* **Owner-Operated Pledge**: Trust badges highlighting the company's owner-operated quality guarantees, reviews, and verified contractor ratings.
* **Social Proof Tickers**: Popups displaying real-time pricing alerts, active regional bookings, and recent customer signups to drive conversion rate optimizations.

### 2. 🌪️ Storm Damage & ZIP Zone Checker
* **ZIP Code Damage Validation**: Instantly matches user ZIP inputs against regional storm database profiles.
* **Insurance Claim Pathway**: Specialized guidance layout educating homeowners on how to maximize insurance coverage for storm-related damages.

### 3. 📅 Inspection Scheduler Form
* **Live Availability Lookup**: Integrates with the backend REST APIs to fetch open date slots in real-time, preventing double-bookings.
* **Responsive Step-by-Step Form**: Assembles inspection site details, contact numbers (with phone input formatting), and preferred timezone regions (Central Time, Eastern Time, etc.).
* **Dynamic Time Block Display**: Clean UI displaying available slots dynamically for the chosen date.

### 4. 💫 Micro-Animations & Responsive Styles
* Crafted using **Framer Motion** and **Tailwind CSS v4**'s advanced styling engine.
* Rich visual layouts optimized for mobile taps, desktop mouseovers, and strict web accessibility targets.

---

## 🛠️ Technology Stack

| Layer | Dependency | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | High performance, static rendering, and API routes integration |
| **Core UI** | React 19 & TypeScript | Strict type safety and robust, high-performance component architecture |
| **Styling** | Tailwind CSS v4 + PostCSS | Ultra-fast rendering engine and advanced CSS variables integration |
| **Components** | Radix UI, Lucide Icons | WAI-ARIA compliant design primitives and modern visual assets |
| **Forms & Check** | React Hook Form + Zod | Seamless input management with rigorous client-side schema validation |
| **Alerts** | Sonner & React-Toastify | Fluid, accessible toast overlays for lead validation updates |
| **Visual Assets** | Next/Image, Swiper, Embla | Lazy-loaded, responsive media galleries showcasing recent roofing jobs |

---

## 📂 Codebase Structure

```text
src/
├── app/                        # Next.js App Router folders
│   ├── roofing-estimate/       # Estimate calculation page
│   ├── schedule/               # Interactive inspection appointment page
│   ├── storm-damage/           # ZIP code storm path verification portal
│   └── success/                # Submission success splash page
│
├── components/                 # Reusable blocks and design layout modules
│   ├── loaders/                # Skeleton load placeholders
│   ├── pages/                  # Page-specific views:
│   │   ├── Estimate/           # CoreBenefits, EstimateForm, PricingToastAlert
│   │   └── Store/              # InspectForm, StormHero, InsuranceSection
│   ├── shared/                 # Navbars, Footer, Global buttons
│   └── ui/                     # Radix UI wrapper primitives (Alert, Dialog)
│
├── lib/                        # CSS utils and Tailwind helper adapters
├── types/                      # Common TypeScript interfaces
├── utils/                      # Helper hooks and formatting math utilities
└── zod/                        # Form schema validation blueprints (Schema validations)
```

---

## ⚙️ Development Setup

### 1. Prerequisite Checklist
* **Node.js** (v18.x or above)
* **npm** or **bun** packager installed locally

### 2. Dependency Installation
Run the install command inside the `Frontend` workspace:
```bash
npm install
```

### 3. Setup Local Environment
Create a `.env` file in the root of the `Frontend` folder:
```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api/v1
```
*Adjust this variable to match your local or production Server endpoints.*

### 4. Boot Dev Server
Spin up the Next.js development client:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 5. Production Compilation
Test compiling performance and asset optimizations:
```bash
npm run build
npm run start
```

---

💡 *Texas Precision Roofing Customer Portal — Providing premium roofing, precision estimates, and trusted service.*
