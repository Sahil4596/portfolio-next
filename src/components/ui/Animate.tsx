"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface AnimateProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: boolean;
  rotate?: number;
}

export default function Animate({
  children,
  delay = 0,
  direction = "up",
  scale = false,
  rotate = 0,
  ...props
}: AnimateProps) {
  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
    ...(scale ? { scale: 0.9 } : {}),
    ...(rotate ? { rotate } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}