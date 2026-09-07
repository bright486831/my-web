import { brand } from '../data/site'

export default function About() {
  return (
    <section>
      <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[21/9]">
        <img
          src="/images/collection-resort.webp"
          alt="Knitmus 니트백 컬렉션 무드 컷"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--ink)]/35" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1 className="font-display text-4xl text-[var(--paper)] sm:text-6xl">{brand.name}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10 sm:py-28">
        <p className="text-xs text-hairline uppercase text-[var(--clay)]">Our Story</p>
        <h2 className="mt-4 font-display-kr text-3xl leading-snug text-[var(--ink)] sm:text-4xl">
          느리게 완성해도, 오래 사랑받는 가방
        </h2>
        <p className="mt-8 text-base leading-loose text-[var(--ink-soft)]">
          {brand.description}
        </p>
        <p className="mt-6 text-base leading-loose text-[var(--ink-soft)]">
          공장에서 대량으로 찍어내는 가방 대신, 실 하나하나의 굵기와 텐션을 손으로 느끼며
          완성하는 방식을 고집합니다. 유행을 좇기보다 오래도록 곁에 두고 싶은 색과 구조를
          고민하고, 매 시즌 소수의 디자인만 선보이며 완성도를 지켜갑니다.
        </p>
        <p className="mt-6 text-base leading-loose text-[var(--ink-soft)]">
          모든 작품의 뜨개 도안은 Etsy 스토어를 통해 만나보실 수 있고, 제작이나 커스텀 관련
          문의는 Instagram DM으로 편하게 남겨주세요.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={brand.etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--ink)] px-7 py-3 text-xs text-hairline uppercase text-[var(--paper)] transition-transform hover:-translate-y-0.5"
          >
            Etsy Store
          </a>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--line-strong)] px-7 py-3 text-xs text-hairline uppercase text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:text-[var(--clay)]"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
