'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, useEffect, useState } from 'react';

export default function NavLink({ href, className, ...rest }: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        // Base positioning
        `relative px-3 py-1.5 transition-colors duration-300 ease-out group z-10 ${className}`,
        
        // Text Color
        isActive
          ? `font-bold text-[#3A9AFF]`
          : `text-[#023047] hover:text-[#3A9AFF]`,

        // ==========================================
        // 1. TOP-LEFT CAMERA AUTOFOCUS BRACKET
        // ==========================================
        `before:absolute before:top-0 before:left-0 before:border-t-2 before:border-l-2 before:transition-all before:duration-300 before:ease-[cubic-bezier(0.34,1.56,0.64,1)]`,
        isActive 
          ? `before:w-2.5 before:h-2.5 before:border-[#3A9AFF] before:opacity-100 before:translate-x-0 before:translate-y-0`
          : `before:w-5 before:h-5 before:border-gray-300 before:opacity-0 before:-translate-x-3 before:-translate-y-3 group-hover:before:w-2.5 group-hover:before:h-2.5 group-hover:before:border-[#3A9AFF] group-hover:before:opacity-100 group-hover:before:translate-x-0 group-hover:before:translate-y-0`,

        // ==========================================
        // 2. BOTTOM-RIGHT CAMERA AUTOFOCUS BRACKET
        // ==========================================
        `after:absolute after:bottom-0 after:right-0 after:border-b-2 after:border-r-2 after:transition-all after:duration-300 after:ease-[cubic-bezier(0.34,1.56,0.64,1)]`,
        isActive 
          ? `after:w-2.5 after:h-2.5 after:border-[#3A9AFF] after:opacity-100 after:translate-x-0 after:translate-y-0`
          : `after:w-5 after:h-5 after:border-gray-300 after:opacity-0 after:translate-x-3 after:translate-y-3 group-hover:after:w-2.5 group-hover:after:h-2.5 group-hover:after:border-[#3A9AFF] group-hover:after:opacity-100 group-hover:after:translate-x-0 group-hover:after:translate-y-0`
      )}
      href={href}
      {...rest}
    />
  );
}