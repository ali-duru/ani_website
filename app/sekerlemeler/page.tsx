import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import CandyProducts from "@/components/candy-products"

export const metadata = {
  title: "Şekerlemeler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli şekerleme çeşitleri. Jelibon, yumuşak şeker, sert şeker ve draje çeşitleri.",
}

export default function CandiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Ürün Listesi */}
        <CandyProducts />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
