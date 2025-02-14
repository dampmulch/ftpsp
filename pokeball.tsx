"use client"

import { motion } from "framer-motion"

export function Pokeball({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      initial={{ scale: 0, x, y }}
      animate={{
        scale: 1,
        x: [x, x + 50, x + 100],
        y: [y, y - 100, y + 300],
      }}
      exit={{ scale: 0 }}
      transition={{
        duration: 1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="absolute z-50 pointer-events-none"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect y="2" width="4" height="4" fill="#FF0000" />
        <rect x="4" y="2" width="4" height="4" fill="#FF0000" />
        <rect x="8" y="2" width="4" height="4" fill="#FF0000" />
        <rect x="12" y="2" width="4" height="4" fill="#FF0000" />
        <rect x="16" y="2" width="4" height="4" fill="#FF0000" />
        <rect x="20" y="2" width="4" height="4" fill="#FF0000" />
        <rect y="6" width="4" height="4" fill="#FF0000" />
        <rect x="4" y="6" width="4" height="4" fill="#FF0000" />
        <rect x="8" y="6" width="4" height="4" fill="#FF0000" />
        <rect x="12" y="6" width="4" height="4" fill="#FF0000" />
        <rect x="16" y="6" width="4" height="4" fill="#FF0000" />
        <rect x="20" y="6" width="4" height="4" fill="#FF0000" />
        <rect y="10" width="24" height="4" fill="#000000" />
        <rect y="14" width="4" height="4" fill="#FFFFFF" />
        <rect x="4" y="14" width="4" height="4" fill="#FFFFFF" />
        <rect x="8" y="14" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="14" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="14" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="14" width="4" height="4" fill="#FFFFFF" />
        <rect y="18" width="4" height="4" fill="#FFFFFF" />
        <rect x="4" y="18" width="4" height="4" fill="#FFFFFF" />
        <rect x="8" y="18" width="4" height="4" fill="#FFFFFF" />
        <rect x="12" y="18" width="4" height="4" fill="#FFFFFF" />
        <rect x="16" y="18" width="4" height="4" fill="#FFFFFF" />
        <rect x="20" y="18" width="4" height="4" fill="#FFFFFF" />
      </svg>
    </motion.div>
  )
}

