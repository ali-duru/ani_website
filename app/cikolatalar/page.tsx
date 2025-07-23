import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import ChocolateProducts from "@/components/chocolate-products"

export const metadata = {
  title: "Çikolatalar | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli çikolata çeşitleri. Sütlü, bitter, fındıklı ve dolgulu çikolatalar.",
}

export default function ChocolatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Featured Products */}
        <ChocolateProducts />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
