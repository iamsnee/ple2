"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const weddingStyles = [
  { value: "beach", label: "Beach" },
  { value: "luxury", label: "Luxury" },
  { value: "traditional", label: "Traditional" },
]

const guestRanges = [
  { value: "0-50", label: "0-50 guests" },
  { value: "51-100", label: "51-100 guests" },
  { value: "101-200", label: "101-200 guests" },
  { value: "201+", label: "201+ guests" },
]

const venueOptions = [
  { value: "open", label: "I'm open to suggestions" },
  { value: "beach-resort", label: "Beach Resort" },
  { value: "luxury-hotel", label: "Luxury Hotel" },
  { value: "garden-venue", label: "Garden Venue" },
  { value: "heritage-property", label: "Heritage Property" },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    weddingStyle: "",
    guests: "",
    venue: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="bg-[#F3E8FF] py-16 md:py-24 text-[#4B0082]">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">
            Get Your <span className="font-serif italic text-[#B388FF]">Custom</span> Wedding Quote
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-[#4B0082]">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 text-[#4B0082] placeholder-[#4B0082]/50"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#4B0082]">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 text-[#4B0082] placeholder-[#4B0082]/50"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-[#4B0082]">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/50 text-[#4B0082] placeholder-[#4B0082]/50"
              />
            </div>
            <div>
              <Label htmlFor="weddingStyle" className="text-[#4B0082]">Preferred Wedding Style</Label>
              <Select
                value={formData.weddingStyle}
                onValueChange={handleSelectChange("weddingStyle")}
              >
                <SelectTrigger className="bg-white/50 text-[#4B0082] border-[#4B0082]/20">
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  {weddingStyles.map((style) => (
                    <SelectItem key={style.value} value={style.value}>
                      {style.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="guests" className="text-[#4B0082]">Number of Guests</Label>
              <Select
                value={formData.guests}
                onValueChange={handleSelectChange("guests")}
              >
                <SelectTrigger className="bg-white/50 text-[#4B0082] border-[#4B0082]/20">
                  <SelectValue placeholder="Select guest range" />
                </SelectTrigger>
                <SelectContent>
                  {guestRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="venue" className="text-[#4B0082]">Preferred Venues</Label>
              <Select
                value={formData.venue}
                onValueChange={handleSelectChange("venue")}
              >
                <SelectTrigger className="bg-white/50 text-[#4B0082] border-[#4B0082]/20">
                  <SelectValue placeholder="Select a venue option" />
                </SelectTrigger>
                <SelectContent>
                  {venueOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#4B0082] text-white hover:bg-[#4B0082]/90"
            >
              Get Your Custom Wedding Quote
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

