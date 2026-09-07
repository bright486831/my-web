import { NavLink } from 'react-router-dom'
import { brand } from '../data/site'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 glass-panel">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <NavLink to="/" className="font-display text-xl tracking-wide text-[var(--ink)] sm:text-2xl">
          {brand.name}
        </NavLink>

        <nav className="flex items-center gap-4 text-xs text-hairline uppercase text-[var(--ink-soft)] sm:gap-8 sm:text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `pb-1 transition-colors hover:text-[var(--clay)] ${
                  isActive ? 'border-b border-[var(--clay)] text-[var(--clay)]' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={brand.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-[var(--line-strong)] px-3 py-2 text-[0.65rem] text-hairline uppercase text-[var(--ink)] transition-colors hover:border-[var(--clay)] hover:text-[var(--clay)] sm:px-4 sm:text-xs"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
