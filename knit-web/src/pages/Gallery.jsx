import ProductCard from '../components/ProductCard'
import { products } from '../data/site'

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="max-w-xl">
        <p className="text-xs text-hairline uppercase text-[var(--clay)]">Gallery</p>
        <h1 className="mt-4 font-display-kr text-4xl text-[var(--ink)] sm:text-5xl">작품 갤러리</h1>
        <p className="mt-5 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
          Knitmus가 완성한 니트 백을 소개합니다. 마음에 드는 작품을 눌러 상세 정보를 확인하고,
          해당 도안은 Etsy 스토어에서 구매하실 수 있어요.
        </p>
      </div>

      <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
