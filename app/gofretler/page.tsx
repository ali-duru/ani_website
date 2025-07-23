import MainMenu from "@/components/main-menu"
import MainFooter from "@/components/main-footer"
import WaferProducts from "@/components/wafer-products"

export const metadata = {
  title: "Gofretler | Anı Bisküvi Gıda San. ve Tic. A.Ş.",
  description: "Anı Bisküvi'nin lezzetli gofret çeşitleri. Çikolatalı, fındıklı ve kremalı gofretler.",
}

export default function WafersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Menu */}
      <MainMenu />

      <main className="flex-1 pt-[100px]">
        {/* Ürün Listesi */}
        <WaferProducts />
      </main>

      {/* Footer */}
      <MainFooter />
    </div>
  )
}
