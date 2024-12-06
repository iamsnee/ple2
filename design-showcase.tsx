"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "mandap", label: "Mandap" },
  { id: "reception", label: "Reception" },
  { id: "haldi", label: "Haldi & Mehendi" },
  { id: "3d", label: "3D Design" },
]

const designs = {
  mandap: [
    { id: 1, title: "Traditional Floral Mandap", image: "/placeholder.svg?height=400&width=400&text=Traditional+Floral+Mandap" },
    { id: 2, title: "Modern Minimalist Mandap", image: "/placeholder.svg?height=400&width=400&text=Modern+Minimalist+Mandap" },
    { id: 3, title: "Royal Purple Mandap", image: "/placeholder.svg?height=400&width=400&text=Royal+Purple+Mandap" },
    { id: 4, title: "Outdoor Garden Mandap", image: "/placeholder.svg?height=400&width=400&text=Outdoor+Garden+Mandap" },
    { id: 5, title: "Beachside Mandap", image: "/placeholder.svg?height=400&width=400&text=Beachside+Mandap" },
  ],
  reception: [
    { id: 6, title: "Elegant Ballroom Reception", image: "/placeholder.svg?height=400&width=400&text=Elegant+Ballroom+Reception" },
    { id: 7, title: "Rustic Barn Reception", image: "/placeholder.svg?height=400&width=400&text=Rustic+Barn+Reception" },
    { id: 8, title: "Garden Party Reception", image: "/placeholder.svg?height=400&width=400&text=Garden+Party+Reception" },
    { id: 9, title: "Rooftop City View Reception", image: "/placeholder.svg?height=400&width=400&text=Rooftop+City+View+Reception" },
    { id: 10, title: "Poolside Evening Reception", image: "/placeholder.svg?height=400&width=400&text=Poolside+Evening+Reception" },
  ],
  haldi: [
    { id: 11, title: "Traditional Haldi Setup", image: "/placeholder.svg?height=400&width=400&text=Traditional+Haldi+Setup" },
    { id: 12, title: "Modern Haldi Decoration", image: "/placeholder.svg?height=400&width=400&text=Modern+Haldi+Decoration" },
    { id: 13, title: "Outdoor Haldi Ceremony", image: "/placeholder.svg?height=400&width=400&text=Outdoor+Haldi+Ceremony" },
    { id: 14, title: "Colorful Mehendi Arrangement", image: "/placeholder.svg?height=400&width=400&text=Colorful+Mehendi+Arrangement" },
    { id: 15, title: "Intimate Home Haldi Setting", image: "/placeholder.svg?height=400&width=400&text=Intimate+Home+Haldi+Setting" },
  ],
  "3d": [
    { id: 16, title: "3D Mandap Concept", image: "/placeholder.svg?height=400&width=400&text=3D+Mandap+Concept" },
    { id: 17, title: "3D Reception Hall Layout", image: "/placeholder.svg?height=400&width=400&text=3D+Reception+Hall+Layout" },
    { id: 18, title: "3D Outdoor Wedding Setup", image: "/placeholder.svg?height=400&width=400&text=3D+Outdoor+Wedding+Setup" },
    { id: 19, title: "3D Lighting and Decor Plan", image: "/placeholder.svg?height=400&width=400&text=3D+Lighting+and+Decor+Plan" },
    { id: 20, title: "3D Seating Arrangement", image: "/placeholder.svg?height=400&width=400&text=3D+Seating+Arrangement" },
  ],
};

export function DesignShowcase() {
  const [activeCategory, setActiveCategory] = useState("mandap")

  return (
    <section className="bg-white py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Explore our <span className="font-serif italic text-[#4B0082]">top-selling</span> designs
          </motion.h2>
        </div>

        <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "relative px-3 py-2 text-sm md:text-lg transition-colors",
                activeCategory === category.id
                  ? "text-[#4B0082]"
                  : "text-muted-foreground hover:text-[#4B0082]"
              )}
            >
              {category.label}
              {activeCategory === category.id && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4B0082]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-8 md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-5"
            >
              {designs[activeCategory as keyof typeof designs].map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-2 md:p-4">
                    <div className="flex h-full flex-col justify-end">
                      <h3 className="text-xs font-semibold text-white sm:text-sm md:text-base">{design.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#4B0082] text-white hover:bg-[#4B0082]/90"
          >
            Get free quote
          </Button>
        </div>
      </div>
    </section>
  )
}

