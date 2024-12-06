import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="bg-[#F3E8FF] py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-[#4B0082] sm:text-4xl md:text-5xl"
          >
            Purple Light Entertainment
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 md:mt-10 flex flex-col items-center gap-4 text-base md:text-lg"
          >
            <a
              href="mailto:info@purplelightentertainment.com"
              className="text-[#4B0082] hover:text-[#B4366B] transition-colors duration-300"
            >
              info@purplelightentertainment.com
            </a>
            <a
              href="/weddings"
              className="text-[#4B0082] hover:text-[#B4366B] transition-colors duration-300"
            >
              www.purplelightentertainment.com/weddings
            </a>
            <p className="text-[#4B0082]">
              WhatsApp or Call @ +91 84468 98831
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-10"
          >
            <Button
              size="lg"
              className="bg-[#4B0082] text-white hover:bg-[#B4366B] transition-colors duration-300"
            >
              Get Free Quotation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

