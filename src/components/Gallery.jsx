import { useState } from 'react'
import { projects } from '../data/portfolio'
import Lightbox from './Lightbox'
import ProjectCard from './ProjectCard'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <h2 className="font-serif-display mb-14 text-center text-2xl uppercase tracking-[0.2em] text-[var(--salmon)] md:text-3xl">
        Selected Works
      </h2>

      <div className="grid grid-flow-dense auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[160px] sm:grid-cols-3 lg:auto-rows-[180px] lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>

      <Lightbox project={active} onClose={() => setActive(null)} />
    </section>
  )
}
