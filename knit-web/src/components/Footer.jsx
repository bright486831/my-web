import { brand } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper-deep)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:px-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-2xl text-[var(--ink)]">{brand.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{brand.description}</p>
        </div>

        <div className="flex gap-12 text-sm text-[var(--ink-soft)]">
          <div className="flex flex-col gap-3">
            <p className="text-hairline text-xs uppercase text-[var(--ink)]">Shop</p>
            <a
              href={brand.etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--clay)]"
            >
              Etsy Store
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-hairline text-xs uppercase text-[var(--ink)]">Contact</p>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--clay)]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-6 py-6 text-center text-xs text-[var(--ink-soft)] sm:px-10">
        © {new Date().getFullYear()} {brand.name}. All pieces are handmade to order.
      </div>
    </footer>
  )
}
