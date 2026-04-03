"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const cursorX = useSpring(0, { damping: 28, stiffness: 240, mass: 0.2 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 240, mass: 0.2 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 10);
      cursorY.set(event.clientY - 10);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-accent-cyan/70 bg-accent-cyan/20 mix-blend-screen md:block"
      style={{ x: cursorX, y: cursorY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    />
  );
}
