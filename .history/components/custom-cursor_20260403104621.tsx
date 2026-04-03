"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });

  const trailX = useSpring(0, { damping: 40, stiffness: 150 });
  const trailY = useSpring(0, { damping: 40, stiffness: 150 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      cursorX.set(x - 8);
      cursorY.set(y - 8);

      trailX.set(x - 16);
      trailY.set(y - 16);

      setVisible(true);
    };

    const leave = () => setVisible(false);

    const handleHover = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full bg-cyan-400 mix-blend-difference md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isHovering ? 1.8 : 1,
          width: isHovering ? 24 : 12,
          height: isHovering ? 24 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* TRAIL EFFECT */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full border border-cyan-400/40 md:block"
        style={{ x: trailX, y: trailY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: isHovering ? 2.5 : 1.2,
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}