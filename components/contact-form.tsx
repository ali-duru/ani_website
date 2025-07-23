"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Mesajınız Gönderildi</h3>
          <p className="text-gray-600 text-center">
            Mesajınız başarıyla alınmıştır. En kısa sürede size geri dönüş yapacağız.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-xl font-bold text-gray-900 mb-6">İletişim Formu</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Adınız Soyadınız <span className="text-red-600">*</span>
              </label>
              <Input id="name" name="name" required placeholder="Adınız Soyadınız" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-posta Adresiniz <span className="text-red-600">*</span>
              </label>
              <Input id="email" name="email" type="email" required placeholder="ornek@email.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Telefon Numaranız
              </label>
              <Input id="phone" name="phone" placeholder="+90 (338) 224 12 30" />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Konu <span className="text-red-600">*</span>
              </label>
              <Select name="subject" required>
                <SelectTrigger>
                  <SelectValue placeholder="Konu seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Genel Bilgi</SelectItem>
                  <SelectItem value="product">Ürün Bilgisi</SelectItem>
                  <SelectItem value="complaint">Şikayet</SelectItem>
                  <SelectItem value="suggestion">Öneri</SelectItem>
                  <SelectItem value="business">İş Birliği</SelectItem>
                  <SelectItem value="other">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Mesajınız <span className="text-red-600">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Mesajınızı buraya yazınız..."
              className="min-h-[150px]"
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300"
              />
            </div>
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
              Kişisel verilerimin işlenmesine ilişkin{" "}
              <a href="#" className="text-[#e30613] hover:underline">
                Aydınlatma Metni
              </a>
              'ni okudum ve kabul ediyorum.
            </label>
          </div>

          <Button type="submit" className="bg-[#e30613] hover:bg-red-700 w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gönderiliyor...
              </>
            ) : (
              "Gönder"
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
