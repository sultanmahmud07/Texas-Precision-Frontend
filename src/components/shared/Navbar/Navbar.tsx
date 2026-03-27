

const Navbar = () => {
  // Dynamically get the current month in uppercase (e.g., "MARCH")
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' }).toUpperCase();

  return (
    <header className="w-full font-sans">
      {/* Top Promotional Bar */}
      <div className="bg-[#0f2744] border-b-2 border-[#c41e3a]/80 w-full py-3 px-4 md:px-8 relative flex flex-col md:flex-row items-center justify-center min-h-[60px]">

        {/* Left Badge - Hidden on very small screens, absolutely positioned on desktop for perfect text centering */}
        <button className="hidden md:flex absolute left-4 lg:left-5 bg-[#c41e3a] text-white font-extrabold px-3 py-1 rounded text-xs tracking-wider shadow-sm">
          {currentMonth} SPECIAL
        </button>

        {/* Center Content Group */}
        <div className="flex flex-col items-center justify-center space-y-1 text-center w-full">

          {/* Main Headline */}
          <h5 className="text-white font-bold text-base md:text-2xl tracking-tight">
            Employee Pricing Now Available — No Games, No Gimmicks.
          </h5>

          {/* Subtext & Tags */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs md:text-sm">
            <span className="text-gray-200">Exclusive savings for</span>

            {/* Pill Badge for Location */}
            <span className="bg-[#c41e3a] text-white px-2.5 py-1 rounded-full font-bold shadow-sm">
              ALL Homeowners
            </span>

            {/* Limited Time Text */}
            <span className="text-[#c41e3a] font-bold ml-1">
              • Limited Time Only
            </span>
          </div>

        </div>
        {/* <Link href={"/"}>
          <Image
            src="/logo/logo.jpg"
            alt="Company Logo"
            width={120}
            height={40}
          />

        </Link> */}
      </div>

      {/* Main Navbar Area would go below here */}
      {/* <nav className="bg-white h-20 shadow-md">...</nav> */}
    </header>
  );
};

export default Navbar;