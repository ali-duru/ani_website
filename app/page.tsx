"use client"
import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import ProductDetail from "@/components/product-detail"
import SustainabilitySection from "@/components/sustainability-section"
import CustomerTestimonials from "@/components/customer-testimonials"
import ModernHeroSlider from "@/components/modern-hero-slider"
import UltraModernProductSlider from "@/components/ultra-modern-product-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Modern Hero Slider */}
        <ModernHeroSlider />

        {/* Ultra Modern Product Slider - Updated component */}
        <UltraModernProductSlider />

        {/* Product Detail Section */}
        <ProductDetail />

        {/* Customer Testimonials Section */}
        <CustomerTestimonials />

        {/* Sustainability Section */}
        <SustainabilitySection />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
