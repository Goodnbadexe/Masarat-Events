"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { Languages, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const content = {
    en: {
      about: "About Us",
      work: "Our Work",
      services: "Our Services",
      contact: "Contact Us",
      quotation: "Get a Quotation",
      languageToggle: "عربي",
    },
    ar: {
      about: "من نحن",
      work: "أعمالنا",
      services: "خدماتنا",
      contact: "اتصل بنا",
      quotation: "احصل على عرض سعر",
      languageToggle: "English",
    },
  }

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`text-white hover:text-[#8b793c] transition-colors text-sm uppercase tracking-wider relative
        ${pathname === href ? "text-[#8b793c]" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      <span className="relative">
        {children}
        {pathname === href && (
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#8b793c] rounded-full" />
        )}
      </span>
    </Link>
  )

  const LanguageToggle = () => (
    <button
      onClick={() => {
        toggleLanguage()
        setIsOpen(false)
      }}
      className="text-white hover:text-[#8b793c] transition-colors flex items-center gap-2 text-sm uppercase tracking-wider"
    >
      <div className="relative w-5 h-5">
        <Languages className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 text-[10px] font-bold">{language === "en" ? "ع" : "E"}</span>
      </div>
      {content[language].languageToggle}
    </button>
  )

  return (
    <header className="fixed top-6 left-0 right-0 z-50 mx-6" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="bg-[#0a0a0a]/80 backdrop-blur-md rounded-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
        <nav className="flex items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Small%20Logo-QXWrjkxPyf2gunbB84lWlwWCKDZL30.png"
              alt="Masarat Events"
              width={48}
              height={48}
              className="w-auto h-8 md:h-10 min-w-[32px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-12">
            <li>
              <NavLink href="/about">{content[language].about}</NavLink>
            </li>
            <li>
              <NavLink href="/work">{content[language].work}</NavLink>
            </li>
            <li>
              <NavLink href="/services">{content[language].services}</NavLink>
            </li>
            <li>
              <NavLink href="/contact">{content[language].contact}</NavLink>
            </li>
            <li className="flex items-center gap-4">
              <LanguageToggle />
              <Link
                href="/contact"
                className="bg-[#8b793c] text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-[#8b793c]/80 transition-colors whitespace-nowrap"
              >
                {content[language].quotation}
              </Link>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#8b793c]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={language === "ar" ? "left" : "right"}
              className="w-[300px] bg-[#0a0a0a]/95 backdrop-blur-md border-[#8b793c]/20"
            >
              <div className="flex flex-col h-full" dir={language === "ar" ? "rtl" : "ltr"}>
                <div className="flex-1 mt-8">
                  <ul className="space-y-8 text-right rtl:text-right ltr:text-left">
                    <li>
                      <NavLink href="/about">{content[language].about}</NavLink>
                    </li>
                    <li>
                      <NavLink href="/work">{content[language].work}</NavLink>
                    </li>
                    <li>
                      <NavLink href="/services">{content[language].services}</NavLink>
                    </li>
                    <li>
                      <NavLink href="/contact">{content[language].contact}</NavLink>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="bg-[#8b793c] text-white px-4 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-[#8b793c]/80 transition-colors inline-block"
                        onClick={() => setIsOpen(false)}
                      >
                        {content[language].quotation}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="py-4 border-t border-[#8b793c]/20">
                  <LanguageToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}

