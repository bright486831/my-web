import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/gallery/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--paper-deep)]">
        <img
          src={product.heroImage}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display-kr text-lg text-[var(--ink)]">{product.name}</h3>
          <p className="mt-1 text-xs text-hairline uppercase text-[var(--ink-soft)]">
            {product.colorway}
          </p>
        </div>
      </div>
    </Link>
  )
}
