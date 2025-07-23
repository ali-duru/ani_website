"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function MainFooter() {
  const { t } = useLanguage()

  return (
    <footer className="relative mt-20">
      {/* Curved Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,120 L1440,120 L1440,40 C1200,100 240,0 0,80 Z" fill="#e30613" />
        </svg>
      </div>

      <div className="bg-[#e30613] text-white pt-12 pb-6 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          {/* Quote */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">"{t("footer.quote")}"</h2>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-8 md:mb-0">
              <Link href="#" className="text-white hover:underline font-medium">
                HABERLER
              </Link>
              <Link href="#" className="text-white hover:underline font-medium">
                KURUMSAL
              </Link>
              <Link href="#" className="text-white hover:underline font-medium">
                YATIRIMCI İLİŞKİLERİ
              </Link>
              <Link href="/iletisim" className="text-white hover:underline font-medium">
                BİZE ULAŞIN
              </Link>
              <Link href="/bilgi-toplum-hizmeti" className="text-white hover:underline font-medium">
                BİLGİ TOPLUM HİZMETİ
              </Link>
              <Link href="/cerez-tercihleri" className="text-white hover:underline font-medium">
                ÇEREZ TERCİHLERİ
              </Link>
              <Link href="/kullanim-kosullari" className="text-white hover:underline font-medium">
                KULLANIM KOŞULLARI
              </Link>
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:opacity-80 transition-opacity">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity">
                <Youtube size={24} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" className="text-white hover:opacity-80 transition-opacity">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="#" className="flex items-center gap-2">
                <span className="font-bold text-xl">Anı Bisküvi Gıda San. ve Tic. A.Ş.</span>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>{t("footer.rights")}</span>
              <Link href="/kullanim-kosullari" className="text-white hover:underline">
                {t("footer.terms")}
              </Link>
              <span>+90 (338) 224 12 30</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
