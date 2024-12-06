import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

const pageLinks = [
  { name: "Home", href: "#" },
  { name: "Our Services", href: "#services" },
  { name: "Our Designs", href: "#designs" },
  { name: "Our Venues", href: "#venues" },
  { name: "Why Choose Us?", href: "#why-choose-us" },
]

export function Footer() {
  return (
    <footer className="bg-[#2E0043] py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white hover:text-[#B388FF] transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <nav>
              <ul className="grid grid-cols-2 gap-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#B388FF] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-white" />
                <a
                  href="mailto:info@purplelightentertainment.com"
                  className="text-white hover:text-[#B388FF] transition-colors duration-300"
                >
                  info@purplelightentertainment.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white">+91 84468 98831</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white">123 Wedding Lane, Celebration City, 12345</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#B388FF] text-[#2D0043] hover:bg-[#B388FF]/90 transition-colors duration-300"
            >
              Get Free Quotation
            </Button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white">
          © {new Date().getFullYear()} Purple Light Entertainment. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

