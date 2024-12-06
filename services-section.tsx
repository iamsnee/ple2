import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cake, Camera, Flower, Music, Home } from 'lucide-react'

const services = [
  { icon: Cake, title: "Catering", description: "Exquisite culinary experiences tailored to your taste and preferences." },
  { icon: Flower, title: "Decor", description: "Transform your venue into a breathtaking setting for your special day." },
  { icon: Camera, title: "Photography", description: "Capture every precious moment with our professional photographers." },
  { icon: Music, title: "Entertainment", description: "Keep your guests entertained with our curated selection of performers." },
  { icon: Home, title: "Accommodation", description: "Comfortable and convenient lodging options for your wedding guests." },
]

export function ServicesSection() {
  return (
    <section className="bg-[#F3E8FF] py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center space-y-1 p-4 pb-0">
                  <service.icon className="mb-2 h-8 w-8 text-[#4B0082]" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-2">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

