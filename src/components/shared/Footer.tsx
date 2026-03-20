import Image from "next/image";
import Link from "next/link";
import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLogoInstagram, IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdArrowForward } from "react-icons/md";
// Assuming NewsletterForm is a simple input + button. 
// If you want to use the native HTML form below, you can replace <NewsletterForm />
// import NewsletterForm from "./NewsLatterForm"; 

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#023047] text-white overflow-hidden relative">

      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3A9AFF]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* ========================================= */}
      {/* PRE-FOOTER CTA (Highly Modern) */}
      {/* ========================================= */}
      <div className="relative z-10 border-b border-white/10">
        <div className="main-container py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to <span className="text-[#3A9AFF]">capture</span> the world?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Join thousands of creators using AMKOV digital imaging gear to tell their stories.
            </p>
          </div>
          <div className="shrink-0 w-full lg:w-auto">
            {/* Sleek inline newsletter form replacing standard component for a modern look */}
            <form className="flex items-center w-full lg:w-[400px] bg-white/5 border border-white/10 rounded-full p-1.5 focus-within:border-[#3A9AFF] focus-within:bg-white/10 transition-all duration-300">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full bg-transparent text-white px-4 py-2 outline-none placeholder:text-slate-500 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#3A9AFF] hover:bg-white hover:text-[#023047] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                aria-label="Subscribe"
              >
                <MdArrowForward size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* MAIN FOOTER LINKS */}
      {/* ========================================= */}
      <div className="relative z-10 main-container  py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column (Takes up more space) */}
          <div className="lg:col-span-4 space-y-6 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/logo.png"
                alt="AMKOV Logo"
                width={160}
                height={48}
                // Added 'invert' and 'brightness-0' to force a black logo to become pure white
                className="w-auto h-10 object-contain invert brightness-0"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering digital imaging technology. From rugged 4K action cameras to professional 5K vlogging setups, we equip creators with the tools to realize their vision.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: IoLogoInstagram, label: "Instagram" },
                { Icon: FaYoutube, label: "YouTube" },
                { Icon: FaLinkedinIn, label: "LinkedIn" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#3A9AFF] hover:text-white hover:border-[#3A9AFF] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">

            {/* Column 1: Products */}
            <div>
              <h6 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Products</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                {["V-Log Cameras", "Waterproof Action", "Optical Zoom", "Instant Print", "Accessories"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-[#3A9AFF] transition-colors inline-block relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#3A9AFF] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Support */}
            <div>
              <h6 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Support</h6>
              <ul className="space-y-4 text-sm text-slate-400">
                {["Help Center", "Firmware Downloads", "Warranty Registration", "Return Policy", "Find a Dealer"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-white transition-colors inline-block relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-span-2 md:col-span-1">
              <h6 className="text-white font-bold mb-6 tracking-wider uppercase text-xs">Get in Touch</h6>
              <ul className="space-y-5 text-sm text-slate-400">
                <li className="flex items-start gap-3 group">
                  <IoLocationSharp size={18} className="text-[#3A9AFF] mt-0.5 shrink-0" />
                  <span className="leading-relaxed group-hover:text-white transition-colors">
                    Banani, Dhaka,<br />Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <FaPhoneAlt size={16} className="text-[#3A9AFF] shrink-0" />
                  <a href="tel:+8801327357894" className="group-hover:text-white transition-colors">+880 1327 357894</a>
                </li>
                <li className="flex items-center gap-3 group">
                  <MdEmail size={18} className="text-[#3A9AFF] shrink-0" />
                  <a href="mailto:support@amkov.com" className="group-hover:text-white transition-colors">support@amkov.com</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM LEGAL BAR */}
      {/* ========================================= */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="main-container px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {currentYear} AMKOV Digital Imaging. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;