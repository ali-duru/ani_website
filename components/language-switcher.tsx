"use client"

import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="text-white hover:opacity-80 font-bold transition-opacity"
      aria-label={language === "tr" ? "Switch to English" : "Türkçe'ye geç"}
    >
      {language === "tr" ? "EN" : "TR"}
    </button>
  )
}
