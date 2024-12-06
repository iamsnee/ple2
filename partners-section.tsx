import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Grand Hyatt",
    logo: "/placeholder.svg?height=80&width=200&text=Grand+Hyatt",
  },
  {
    name: "Taj Exotica Resort & Spa",
    logo: "/placeholder.svg?height=80&width=200&text=Taj+Exotica",
  },
  {
    name: "The LaLiT Golf & Spa Resort",
    logo: "/placeholder.svg?height=80&width=200&text=The+LaLiT",
  },
  {
    name: "W Hotels",
    logo: "/placeholder.svg?height=80&width=200&text=W+Hotels",
  },
]

export function PartnersSection() {
  return (
    <section className="bg-[#FFFCF7] py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold tracking-tight text-[#4B0082] sm:text-4xl"
        >
          Our Partners
        </motion.h2>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={200}
                height={80}
                className="h-12 w-auto object-contain md:h-20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

