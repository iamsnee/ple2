import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const venues = [
  { id: 1, name: "Seaside Resort", image: "/placeholder.svg?height=400&width=600&text=Seaside+Resort" },
  { id: 2, name: "Mountain Retreat", image: "/placeholder.svg?height=400&width=600&text=Mountain+Retreat" },
  { id: 3, name: "City Skyline", image: "/placeholder.svg?height=400&width=600&text=City+Skyline" },
  { id: 4, name: "Rustic Barn", image: "/placeholder.svg?height=400&width=600&text=Rustic+Barn" },
  { id: 5, name: "Tropical Paradise", image: "/placeholder.svg?height=400&width=600&text=Tropical+Paradise" },
];

export function VenueCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % venues.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + venues.length) % venues.length)
  }

  return (
    <section className="bg-[#FFFCF7] py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Select from Beautiful Venues
        </h2>
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={venues[currentIndex].image}
                alt={venues[currentIndex].name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold">{venues[currentIndex].name}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-[#4B0082] hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-[#4B0082] hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

