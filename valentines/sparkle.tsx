"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  size: number
  style: {
    top: string
    left: string
    zIndex: number
  }
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const initialSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      style: {
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        zIndex: 20,
      },
    }))
    setSparkles(initialSparkles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ scale: 0, rotate: 0 }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
          style={sparkle.style}
          className="absolute"
        >
          <svg
            width={sparkle.size * 10}
            height={sparkle.size * 10}
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
              fill="#FFC6DD"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

