import { useCallback, useRef } from 'react'

export function useTilt({ max = 12, scale = 1.04 } = {}) {
  const ref = useRef(null)

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * max * 2
      const rotateX = -(py - 0.5) * max * 2
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
      el.style.setProperty('--glare-x', `${px * 100}%`)
      el.style.setProperty('--glare-y', `${py * 100}%`)
      el.style.setProperty('--glare-o', '0.16')
    },
    [max, scale],
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    el.style.setProperty('--glare-o', '0')
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
