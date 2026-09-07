import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { brand, products } from '../data/site'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src="/images/hero-santorini.webp"
          alt="Knitmus 니트 크로스백을 착용한 모습"
          className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-[var(--ink)]/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 text-[var(--paper)] sm:px-10 sm:pb-24">
          <p className="animate-fade-up text-xs text-hairline uppercase text-[var(--paper)]/80">
            Handmade Knit Bags
          </p>
          <h1 className="animate-fade-up mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-6xl">
            {brand.tagline}
          </h1>
          <p className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-[var(--paper)]/85 sm:text-base">
            {brand.description}
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4">
            <Link
              to="/gallery"
              className="rounded-full bg-[var(--paper)] px-7 py-3 text-xs text-hairline uppercase text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              작품 갤러리 보기
            </Link>
            <a
              href={brand.etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--paper)]/60 px-7 py-3 text-xs text-hairline uppercase text-[var(--paper)] transition-colors hover:border-[var(--paper)]"
            >
              Etsy에서 도안 구매
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src="/images/collection-resort.webp"
              alt="Knitmus 니트백 컬렉션 무드 컷"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs text-hairline uppercase text-[var(--clay)]">Our Craft</p>
            <h2 className="mt-4 font-display-kr text-3xl leading-snug text-[var(--ink)] sm:text-4xl">
              실 한 가닥의 결까지
              <br />
              손으로 매만진 디테일
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
              Knitmus의 모든 가방은 실을 고르는 순간부터 마지막 매듭까지 한 사람의 손을 거칩니다.
              기계로는 낼 수 없는 얀의 질감과 균형 잡힌 배색으로, 오래 두고 써도 질리지 않는
              가방을 만듭니다. 각 작품의 도안은 Etsy 스토어에서 만나보실 수 있어요.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b border-[var(--ink)] pb-1 text-sm text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:text-[var(--clay)]"
            >
              브랜드 이야기 더 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-hairline uppercase text-[var(--clay)]">Collection</p>
            <h2 className="mt-3 font-display-kr text-3xl text-[var(--ink)] sm:text-4xl">
              최근 작품
            </h2>
          </div>
          <Link
            to="/gallery"
            className="hidden shrink-0 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--clay)] sm:block"
          >
            전체 보기 →
          </Link>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <Link
          to="/gallery"
          className="mt-10 block text-center text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--clay)] sm:hidden"
        >
          전체 보기 →
        </Link>
      </section>
    </>
  )
}
