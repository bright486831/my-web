---
name: frontend-design
description: Frontend/UI design guidance for this repo (sonyeongje-portfolio) — a React + Vite + Tailwind CSS v4 + React Three Fiber personal portfolio site. Use this whenever adding or changing UI: new components under src/components, layout or styling work, color/typography/spacing decisions, responsive/accessibility passes, or anything touching the animated 3D background in src/three. Trigger even if the user just says "make this look better", "add a section", "fix the layout on mobile", or "tweak the colors" without naming the skill.
---

# Frontend design for this project

This project is a single-page portfolio: React components in `src/components`
render over a fixed full-screen WebGL background (`src/three/AuroraScene.jsx`).
Keep changes consistent with the conventions already established rather than
introducing a new styling system or component pattern.

## Design tokens

Colors and a few reusable primitives live as CSS custom properties and
utility classes in `src/index.css`, not as Tailwind `@theme` tokens:

- `--ink` (near-white text), `--deep` (background), `--panel` (translucent
  card fill), `--salmon` (accent), `--line` (hairline borders).
- `.glass-panel` — the frosted-glass card look (`backdrop-filter: blur`).
  Reuse it for any new card/panel instead of hand-rolling another blur.
- `.font-serif-display` / `.font-script` for display type; body text stays
  on the default `Work Sans` sans-serif.
- `.animate-fade-up` for scroll-in reveals.

When a new color or effect is needed, add it as a CSS variable or utility in
`index.css` next to the existing ones so the whole palette stays in one
place — don't scatter one-off hex values through component `className`s.
Tailwind v4 here is used utility-first for layout/spacing/typography
(`flex`, `gap-*`, `text-*`), with the custom tokens above layered on top for
anything brand-specific. There is no `@theme` block in this project yet; if
one is introduced, migrate the `:root` variables into it rather than
maintaining both.

## Components

Each section of the page is a single component in `src/components`
(`Hero.jsx`, `About.jsx`, `Career.jsx`, `Gallery.jsx`, `ProjectCard.jsx`,
`Footer.jsx`, `Lightbox.jsx`), composed in `src/App.jsx`. Content data (copy,
project lists, etc.) lives in `src/data/portfolio.js`, separate from
presentation — put new copy/data there rather than inlining it in JSX.

When building a new section or component:
- Match the existing spacing rhythm and container widths of neighboring
  sections instead of picking new ones.
- Reuse `useTilt` (`src/hooks/useTilt.js`) for any hover-tilt/parallax card
  effect rather than writing a new pointer handler.
- Keep interactive/animated elements accessible: respect
  `prefers-reduced-motion`, ensure sufficient contrast against the dark
  `--deep` background, and make sure focus states remain visible (the site
  is dark-themed, so a default browser focus ring can disappear — check it
  explicitly).

## Responsive and accessibility checks

Before considering UI work done:
- Check the layout at a narrow mobile width (~375px) and a typical desktop
  width — this is a scroll-driven single page, so verify sections don't
  overlap or clip against the fixed 3D background at either size.
- Verify text stays legible over `AuroraScene`'s glow/bloom (use
  `.glass-panel` or a solid/semi-opaque backing behind dense text, not bare
  text floating over the scene).
- Confirm images/icons have alt text and interactive elements are
  reachable by keyboard (tab order, visible focus, `Lightbox` closable via
  Escape).

## Working with the React Three Fiber background

`AuroraScene` renders behind everything (`fixed inset-0 -z-10`) for the
entire page, so its performance budget affects every section, not just one
component. When touching it:

- Preserve the reduced-motion / low-power path: the scene already checks
  `(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)`
  and responds by lowering `dpr`, dropping `Sparkles`, and skipping
  `EffectComposer` post-processing entirely. Any new heavy effect (more
  geometry, another post-processing pass, more lights) needs the same kind
  of gate — don't add cost that runs unconditionally on mobile or for users
  who asked for reduced motion.
- Keep per-frame work in `useFrame` cheap and allocation-free (mutate
  existing vectors/positions, don't create new objects every frame) since
  it runs every animation frame for the whole session.
- Favor additive-blended, transparent, low-poly shapes (as `Blob` does)
  over opaque high-poly meshes — this scene is a soft ambient backdrop, not
  a focal 3D object, so it should stay cheap and never compete with
  foreground text for attention.
- Test that scroll performance over the page stays smooth with the scene
  running; a jank check (does scrolling past `Gallery`/`Career` stay at
  60fps) matters more here than in a typical DOM-only page.
