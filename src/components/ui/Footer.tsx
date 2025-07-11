// src/components/ui/Footer.tsx
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-blue-600 text-white py-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <p>© {currentYear} Sahil Jhajharia. All rights reserved.</p>
        <p className="mt-2 text-blue-200 text-sm">
          Crafted with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}