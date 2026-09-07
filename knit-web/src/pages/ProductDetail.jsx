import { Link, Navigate, useParams } from 'react-router-dom'
import { brand, products } from '../data/site'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    return <Navigate to="/gallery" replace />
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <Link
        to="/gallery"
        className="text-xs text-hairline uppercase text-[var(--ink-soft)] transition-colors hover:text-[var(--clay)]"
      >
        ← 갤러리로 돌아가기
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[var(--paper-deep)]">
          <img src={product.heroImage} alt={product.name} className="h-full w-full object-cover" />
        </div>

        <div className="flex flex-col">
          <p className="text-xs text-hairline uppercase text-[var(--clay)]">{product.colorway}</p>
          <h1 className="mt-3 font-display-kr text-3xl text-[var(--ink)] sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-sm text-[var(--ink-soft)] sm:text-base">{product.summary}</p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            {product.description}
          </p>

          <dl className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {Object.entries(product.details).map(([label, value]) => (
              <div key={label} className="flex gap-6 py-3 text-sm">
                <dt className="w-20 shrink-0 text-[var(--ink-soft)]">{label}</dt>
                <dd className="text-[var(--ink)]">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={product.etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--ink)] px-8 py-4 text-center text-xs text-hairline uppercase text-[var(--paper)] transition-transform hover:-translate-y-0.5"
            >
              PDF 도안 · Etsy에서 구매하기
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line-strong)] px-8 py-4 text-center text-xs text-hairline uppercase text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:text-[var(--clay)]"
            >
              제작 문의하기
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--ink-soft)]">
            도안 다운로드 및 구매는 Knitmus Etsy 스토어에서 진행됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}
