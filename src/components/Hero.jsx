import { profile } from '../data/portfolio'
import { useTilt } from '../hooks/useTilt'

export default function Hero() {
  const tilt = useTilt({ max: 14, scale: 1.06 })

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center"
    >
      <p
        className="font-serif-display mb-3 text-sm uppercase tracking-[0.35em] text-white/90 drop-shadow-[0_2px_18px_rgba(0,0,0,0.7)] animate-fade-up md:text-base"
      >
        {profile.title}
      </p>

      <h1
        className="font-script mb-10 text-6xl leading-none text-[var(--salmon)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.75)] animate-fade-up md:text-8xl"
        style={{ animationDelay: '0.15s' }}
      >
        Portfolio
      </h1>

      <div className="perspective-1000 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="hex-clip relative h-46 w-40 cursor-pointer overflow-hidden shadow-[inset_0_0_0_3px_var(--salmon)] transition-transform duration-200 ease-out will-change-transform md:h-52 md:w-44"
        >
          <img
            src={profile.photo}
            alt="프로필 사진"
            className="h-full w-full object-cover object-top grayscale contrast-110"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[var(--glare-o,0)] transition-opacity"
            style={{
              background:
                'radial-gradient(circle at var(--glare-x,50%) var(--glare-y,50%), rgba(255,255,255,0.9), transparent 55%)',
            }}
          />
        </div>
      </div>

      <div
        className="mt-5 inline-flex items-center gap-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] animate-fade-up"
        style={{ animationDelay: '0.42s' }}
      >
        <span className="hex-clip inline-block h-7 w-6 bg-[var(--salmon)] opacity-85" />
        <span className="text-sm font-semibold tracking-[0.12em]">{profile.name.split('').join(' ')}</span>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-xs uppercase tracking-[0.3em] text-white/50 transition-colors hover:text-white animate-bounce"
      >
        Scroll
      </a>
    </section>
  )
}
