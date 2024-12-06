"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsStrip } from "@/components/stats-strip"
import { VenueCarousel } from "@/components/venue-carousel"
import { PartnersSection } from "@/components/partners-section"
import { DesignShowcase } from "@/components/design-showcase"
import { WeddingCostCalculator } from "@/components/wedding-cost-calculator"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

const menuItems = [
  { href: "#services", label: "Our Services" },
  { href: "#designs", label: "Our Designs" },
  { href: "#venues", label: "Our Venues" },
  { href: "#why-choose-us", label: "Why Choose Us?" },
  { href: "#calculator", label: "Cost Calculator" },
  { href: "#contact", label: "Contact" },
]

export default function WeddingCompany() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
        setIsMobileMenuOpen(false);
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFCF7]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Your%20paragraph%20text%20(2)-RPKpQ42mNYVZ2mtdqjySB66pmSHNkh.png"
              width={40}
              height={40}
              alt="Purple Light Entertainment Logo"
              className="aspect-square object-contain"
            />
            <span className="text-xl font-semibold tracking-tight text-[#4B0082]">Purple Light Entertainment</span>
          </Link>
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    className="px-4 py-2 rounded-md text-sm font-medium text-[#4B0082] hover:bg-gray-100 transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <button
            className="lg:hidden text-[#4B0082]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-white shadow-lg lg:hidden"
          >
            <nav className="container py-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-[#4B0082] hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main>
        <section id="home" className="relative overflow-hidden py-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(26)-mQEYYI0jNwgd5lPnyz1Rl361vMMPVe.png"
            alt="Decorative mandala corner patterns with geometric background"
            fill
            className="object-cover opacity-75"
            priority
          />
          <div className="container relative">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative mx-auto aspect-[3/4] w-full max-w-md"
              >
                <motion.div
                  initial={{ scale: 0.9, rotate: -5 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  className="relative h-full overflow-hidden rounded-t-[8rem] rounded-b-[2rem] border-8 border-[#4B0082]/20 bg-white p-2"
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full overflow-hidden rounded-t-[7.5rem] rounded-b-[1.7rem]"
                  >
                    <Image
                      alt="Indian wedding couple smiling on a beach"
                      className="h-full w-full object-cover"
                      height={600}
                      width={400}
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iamyoro_Indian_hindu_wedding_shot_of_bride_and_groom_happy_wi_21fbdc82-dc39-4922-b2fd-d9e2117def90_0-NHDNYjzEOJHmfTwOq7YrNfeuZPOs58.png"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col items-start justify-center"
              >
                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="font-serif italic text-[#4B0082]">Perfect</span> Weddings,
                  <br />
                  Stress-Free
                </h1>
                <p className="mt-4 max-w-lg text-lg text-gray-600">
                  Let us take the stress off your shoulders and plan your perfect day.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="mt-8 bg-[#4B0082] px-8 text-white hover:bg-[#B4366B]"
                    size="lg"
                  >
                    Get Free Quote
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        <StatsStrip />
        <section id="designs">
          <DesignShowcase />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="venues">
          <VenueCarousel />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="partners">
          <PartnersSection />
        </section>
        <PortfolioSection />
        <section id="calculator">
          <WeddingCostCalculator />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

