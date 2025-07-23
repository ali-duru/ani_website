"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "tr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})

  useEffect(() => {
    // Tarayıcıda çalıştığında localStorage'dan dil tercihini al
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }

    // Çevirileri yükle
    import("@/translations").then((module) => {
      setTranslations(module.default)
    })
  }, [])

  // Dil değiştiğinde localStorage'a kaydet
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  // Çeviri fonksiyonu
  const t = (key: string): string => {
    if (!translations || !translations[key]) {
      return key
    }
    return translations[key][language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
