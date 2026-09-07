import { useTilt } from '../hooks/useTilt'

const SIZE_CLASSES = {
  xl: 'col-span-2 row-span-2',
  lg: 'col-span-2 row-span-1',
  md: 'col-span-1 row-span-2',
  sm: 'col-span-1 row-span-1',
}

export default function ProjectCard({ project, onOpen }) {
  const tilt = useTilt({ max: 10, scale: 1.03 })

  return (
    <div className={`perspective-1000 ${SIZE_CLASSES[project.size] || SIZE_CLASSES.sm}`}>
      <button
        type="button"
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        onClick={() => onOpen(project)}
        className="group relative block h-full w-full overflow-hidden rounded-xl bg-white/5 text-left transition-transform duration-200 ease-out will-change-transform"
      >
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[var(--glare-o,0)] transition-opacity"
          style={{
            background:
              'radial-gradient(circle at var(--glare-x,50%) var(--glare-y,50%), rgba(255,255,255,0.5), transparent 55%)',
          }}
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="font-serif-display text-sm italic tracking-wide text-white md:text-base">
            {project.title}
          </p>
        </div>
      </button>
    </div>
  )
}
