"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const words = ["Beautiful", "Beach", "Luxury", "Destination", "Traditional"]

export function AnimatedText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // Change word every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[1.5em] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute font-serif italic text-[#4B0082]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

