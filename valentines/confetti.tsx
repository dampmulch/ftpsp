"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Confetti {
  id: number
  side: "left" | "right"
  rotation: number
  delay: number
  size: number
  color: string
}

export function Confetti() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const colors = ["#ffc6dd", "#ff99c2", "#ff66a8"]
    const confettiPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      side: i % 2 === 0 ? "left" : "right",
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    })) as Confetti[]
    setConfetti(confettiPieces)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            x: piece.side === "left" ? -60 : "calc(100% + 60px)",
            y: "50%",
            rotate: piece.rotation,
            scale: 0,
          }}
          animate={{
            x: [
              piece.side === "left" ? -60 : "calc(100% + 60px)",
              `calc(50% + ${Math.random() * 200 - 100}px)`,
              `calc(${piece.side === "left" ? "100% + 60px" : "-60px"})`,
            ],
            y: ["50%", `${Math.random() * 20 + 40}%`, "120%"],
            rotate: [piece.rotation, piece.rotation + 360, piece.rotation + 720],
            scale: [0, 1, 1],
          }}
          transition={{
            duration: 2.5,
            delay: piece.delay,
            ease: [0.23, 0.51, 0.32, 0.95],
          }}
          className="absolute origin-center"
          style={{ width: piece.size, height: piece.size }}
        >
          <div className="w-full h-full rounded-sm" style={{ backgroundColor: piece.color }} />
        </motion.div>
      ))}
    </div>
  )
}

