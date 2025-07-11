"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-black border-t border-[#2a2a2a] py-8 sm:py-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <p className="text-[#a2a2a5] text-sm sm:text-base">
          © {currentYear} Sahil Jhajharia. All rights reserved.
        </p>
        <motion.p
          className="mt-3 text-[#a2a2a5] text-xs sm:text-sm cursor-pointer transition-colors"
          whileHover={{ color: "#a174ff" }}
          transition={{ duration: 0.5 }}
        >
          Crafted with Next.js, Tailwind CSS, and Framer Motion
        </motion.p>
      </div>
    </motion.footer>
  );
}  