import Link from 'next/link'
import { useLanguage } from '../contexts/LanguageContext'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      quickLinks: 'Quick Links',
      about: 'About Us',
      work: 'Our Work',
      services: 'Our Services',
      contact: 'Contact Us',
      rights: 'All rights reserved.',
      followUs: 'Follow Us'
    },
    ar: {
      quickLinks: 'روابط سريعة',
      about: 'من نحن',
      work: 'أعمالنا',
      services: 'خدماتنا',
      contact: 'اتصل بنا',
      rights: 'جميع الحقوق محفوظة.',
      followUs: 'تابعنا'
    }
  }

  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f5] py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Masarat Events</h3>
            <p className="text-sm mb-4">Imagine. Implement. Inspire.</p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#8b793c] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#8b793c] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#8b793c]">{content[language].about}</Link></li>
              <li><Link href="/work" className="hover:text-[#8b793c]">{content[language].work}</Link></li>
              <li><Link href="/services" className="hover:text-[#8b793c]">{content[language].services}</Link></li>
              <li><Link href="/contact" className="hover:text-[#8b793c]">{content[language].contact}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{content[language].contact}</h4>
            <p>Email: info@masaratevents.com</p>
            <p>WhatsApp: +966 59 769 5655</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Masarat Events. {content[language].rights}</p>
        </div>
      </div>
    </footer>
  )
}

