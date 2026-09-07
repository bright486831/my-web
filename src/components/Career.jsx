import { careerSections } from '../data/portfolio'

export default function Career() {
  return (
    <section id="career" className="relative mx-auto max-w-3xl px-6 py-20 md:py-28">
      <div className="glass-panel rounded-2xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:p-12">
        <h2 className="font-serif-display mb-12 text-center text-2xl uppercase tracking-[0.2em] text-[var(--salmon)] md:text-3xl">
          Career History
        </h2>

        {careerSections.map((section) => (
          <div key={section.label} className="mb-14 last:mb-0">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[var(--salmon)]">— {section.label} —</p>
            <div className="space-y-8 border-l border-white/15 pl-6">
              {section.items.map((item) => (
                <div key={`${section.label}-${item.role}`} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--salmon)] shadow-[0_0_10px_var(--salmon)]" />
                  <p className="text-sm font-semibold md:text-base">
                    {item.period} {item.role}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
