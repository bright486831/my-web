import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-28 md:py-36">
      <div className="glass-panel rounded-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:p-12">
        <h2 className="font-serif-display mb-6 text-2xl uppercase tracking-[0.2em] text-[var(--salmon)] md:text-3xl">
          About Me
        </h2>
        <p className="mb-10 text-base leading-relaxed text-white/85 md:text-lg">{profile.about}</p>

        <div className="flex flex-col gap-5">
          {profile.skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm tracking-[0.04em]">
                <span className="font-medium">{skill.name}</span>
                <span className="text-white/60">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[var(--salmon)] transition-[width] duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
