"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Playfair_Display, Inter } from "next/font/google"
import { Sparkles } from "./sparkle"
import { Pokeball } from "./pokeball"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

const shakeAnimation = {
  initial: { rotate: 0 },
  shake: {
    rotate: [0, -5, 5, -5, 5, -3, 3, -2, 2, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
    },
  },
}

interface PokeballState {
  isVisible: boolean
  x: number
  y: number
}

export default function ValentinePage() {
  const [response, setResponse] = useState<"initial" | "yes" | "no">("initial")
  const [pokeball, setPokeball] = useState<PokeballState>({ isVisible: false, x: 0, y: 0 })

  const handleImageClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPokeball({ isVisible: true, x, y })
    setTimeout(() => {
      setPokeball((prev) => ({ ...prev, isVisible: false }))
    }, 1000)
  }, [])

  return (
    <div
      className={`min-h-[100dvh] bg-pink-50 flex items-center justify-center p-4 ${inter.className} relative overflow-hidden`}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md flex flex-col h-[calc(100dvh-2rem)] max-h-[800px]"
      >
        <AnimatePresence>{response === "yes" && <Sparkles />}</AnimatePresence>

        {response === "initial" && (
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-none"
            >
              <span className="block text-pink-400 font-medium tracking-wide mb-2">SAM</span>
              <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold text-pink-600 mb-4 leading-tight`}>
                Will you be my Valentine?
                <span className="block text-xl md:text-2xl mt-2 text-pink-400">🌹</span>
              </h1>
            </motion.div>
            <div className="flex-1 flex flex-col justify-center gap-6 min-h-0">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl cursor-pointer relative"
                variants={shakeAnimation}
                initial="initial"
                whileHover="shake"
                whileTap="shake"
                onClick={handleImageClick}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2804-enEtS6cJnXFOf47Y5BBeOUQZFWyGJh.jpeg"
                  alt="Cute cat asking to be your valentine from their cozy bed"
                  className="w-full h-full object-cover aspect-square"
                />
                <AnimatePresence>{pokeball.isVisible && <Pokeball x={pokeball.x} y={pokeball.y} />}</AnimatePresence>
              </motion.div>
              <div className="flex justify-center gap-4 flex-none">
                <Button
                  onClick={() => setResponse("no")}
                  variant="outline"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg transition-all duration-300 font-medium tracking-wide"
                >
                  No 😢
                </Button>
                <Button
                  onClick={() => setResponse("yes")}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 font-medium tracking-wide"
                >
                  Yes! 💖
                </Button>
              </div>
            </div>
          </div>
        )}

        {response === "yes" && (
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-none"
            >
              <span className="block text-pink-400 font-medium tracking-wide mb-2">Wonderful!</span>
              <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold text-pink-600 mb-4 leading-tight`}>
                I knew you would say Yes!
                <span className="block text-xl md:text-2xl mt-2 text-pink-400">🎉</span>
              </h1>
            </motion.div>
            <div className="flex-1 flex flex-col justify-center gap-6 min-h-0">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl cursor-pointer relative"
                variants={shakeAnimation}
                initial="initial"
                whileHover="shake"
                whileTap="shake"
                onClick={handleImageClick}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2903-ilckBT5g3Wu7GOLr3M9luelrrlSHt8.jpeg"
                  alt="Happy cat perched on a wooden stick"
                  className="w-full h-full object-cover aspect-square"
                />
                <AnimatePresence>{pokeball.isVisible && <Pokeball x={pokeball.x} y={pokeball.y} />}</AnimatePresence>
              </motion.div>
              <p className="text-lg text-pink-600 font-light tracking-wide flex-none">
                Now let&apos;s get some
                <span className="font-medium"> lamb sandwiches</span>! 🥪
              </p>
              <Button
                onClick={() => setResponse("initial")}
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg transition-all duration-300 font-medium tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Start Over
              </Button>
            </div>
          </div>
        )}

        {response === "no" && (
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-none"
            >
              <span className="block text-pink-400 font-medium tracking-wide mb-2">Oh hell no...</span>
              <h1 className={`${playfair.className} text-3xl md:text-4xl font-bold text-pink-600 mb-4 leading-tight`}>
                Go back and try again!
                <span className="block text-xl md:text-2xl mt-2 text-pink-400">😾</span>
              </h1>
            </motion.div>
            <div className="flex-1 flex flex-col justify-center gap-6 min-h-0">
              <motion.div
                className="rounded-lg overflow-hidden shadow-xl cursor-pointer relative"
                variants={shakeAnimation}
                initial="initial"
                whileHover="shake"
                whileTap="shake"
                onClick={handleImageClick}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2763-dwg8bsW1v4ZOamuwyYDrGpUdA8LyD0.jpeg"
                  alt="Disapproving cat hiding under furniture"
                  className="w-full h-full object-cover aspect-square"
                />
                <AnimatePresence>{pokeball.isVisible && <Pokeball x={pokeball.x} y={pokeball.y} />}</AnimatePresence>
              </motion.div>
              <Button
                onClick={() => setResponse("initial")}
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-full text-lg transition-all duration-300 font-medium tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

