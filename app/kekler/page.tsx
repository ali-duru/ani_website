import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import CakeProducts from "@/components/cake-products"

export const metadata = {
  title: "Kekler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli kek çeşitleri. Kakaolu, meyveli, kremalı ve mini kekler.",
}

export default function CakesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Featured Products */}
        <CakeProducts />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
