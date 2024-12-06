import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  { id: 1, title: "Beautiful Wedding 1", description: "A stunning celebration of love and joy.", image: "/placeholder.svg?height=300&width=400&text=Wedding+1" },
  { id: 2, title: "Beautiful Wedding 2", description: "An elegant affair with timeless charm.", image: "/placeholder.svg?height=300&width=400&text=Wedding+2" },
  { id: 3, title: "Beautiful Wedding 3", description: "A romantic day filled with unforgettable moments.", image: "/placeholder.svg?height=300&width=400&text=Wedding+3" },
  { id: 4, title: "Beautiful Wedding 4", description: "A magical union of two hearts.", image: "/placeholder.svg?height=300&width=400&text=Wedding+4" },
  { id: 5, title: "Beautiful Wedding 5", description: "A dreamy celebration in a picturesque setting.", image: "/placeholder.svg?height=300&width=400&text=Wedding+5" },
  { id: 6, title: "Beautiful Wedding 6", description: "An intimate gathering of love and laughter.", image: "/placeholder.svg?height=300&width=400&text=Wedding+6" },
];

export function PortfolioSection() {
  return (
    <section className="bg-[#F3E8FF] py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg bg-white shadow-md"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="mb-4 text-muted-foreground">{item.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline">View Details</Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div></section>
  )
}

