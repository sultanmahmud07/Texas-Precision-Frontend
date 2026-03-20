"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  x?: number;
  y?: number;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, x = 0, y = 0, delay = 0, className = "" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 50, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}