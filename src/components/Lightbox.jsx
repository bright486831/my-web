import { useEffect } from 'react'

export default function Lightbox({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm animate-fade-up"
      style={{ animationDuration: '0.25s' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="glass-panel flex max-h-[85vh] max-w-[90vw] flex-col items-center gap-4 rounded-lg p-6 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.src}
          alt={project.title}
          className="max-h-[65vh] max-w-[80vw] rounded object-contain"
        />
        <p className="font-serif-display text-lg italic tracking-wide text-white">{project.title}</p>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 text-sm uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          닫기 ✕
        </button>
      </div>
    </div>
  )
}
