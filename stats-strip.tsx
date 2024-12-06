"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

const stats = [
  { number: 1000, label: "Clients" },
  { number: 500, label: "Designs" },
  { number: 100, label: "Venues" }
]

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, latest => Math.round(latest))

  useEffect(() => {
    const controls = animate(motionValue, value, { duration: 2, ease: "easeOut" })
    return controls.stop
  }, [motionValue, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export function StatsStrip() {
  return (
    <section className="bg-[#F3E8FF] py-12 text-[#4B0082]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold">
                <AnimatedNumber value={stat.number} />+
              </h3>
              <p className="mt-2 text-base md:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

