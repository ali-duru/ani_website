import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import CrackerProducts from "@/components/cracker-products"

export const metadata = {
  title: "Krakerler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli kraker çeşitleri. Tuzlu, baharatlı, peynirli ve çubuk krakerler.",
}

export default function CrackersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Ürün Listesi */}
        <CrackerProducts />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
