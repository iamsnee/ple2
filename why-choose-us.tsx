import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, ClipboardCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep knowledge of venues and vendors in your area"
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "10+ years of successful event management"
  },
  {
    icon: ClipboardCheck,
    title: "End-to-End Service",
    description: "Comprehensive planning, coordination, and execution"
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    description: "Tailored solutions for your unique vision"
  }
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#F3E8FF] py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center space-y-1 p-6">
                  <div className="rounded-full bg-[#4B0082]/10 p-3">
                    <feature.icon className="h-6 w-6 text-[#4B0082]" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

