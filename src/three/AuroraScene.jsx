import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sparkles, Sphere } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function MouseRig({ children, reduced }) {
  const group = useRef(null)
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (reduced) return
    const handleMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [reduced])

  useFrame((state) => {
    if (!group.current) return
    const { x, y } = target.current
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.035
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * 0.035
    state.camera.position.x += (x * 0.7 - state.camera.position.x) * 0.02
    state.camera.position.y += (-y * 0.5 - state.camera.position.y) * 0.02
    state.camera.lookAt(0, 0, 0)
  })

  return <group ref={group}>{children}</group>
}

function Blob({ position, color, scale = 1, speed = 1, distort = 0.45 }) {
  const ref = useRef(null)
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime() * speed
    ref.current.position.y = position[1] + Math.sin(t) * 0.4
    ref.current.position.x = position[0] + Math.cos(t * 0.6) * 0.3
  })
  return (
    <Sphere ref={ref} args={[1, 48, 48]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.15}
        distort={distort}
        speed={1.1}
        roughness={1}
        metalness={0}
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </Sphere>
  )
}

export default function AuroraScene() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(
      '(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)',
    )
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, reduced ? 1.25 : 2]}
        camera={{ position: [0, 0, 9.5], fov: 40 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#07090b']} />
        <fog attach="fog" args={['#07090b', 10, 24]} />
        <ambientLight intensity={0.25} />
        <Suspense fallback={null}>
          <MouseRig reduced={reduced}>
            <Blob position={[-2.6, 0.7, -2]} color="#8b5cf6" scale={2.1} speed={0.5} />
            <Blob position={[2.8, -0.5, -3]} color="#3b82f6" scale={1.8} speed={0.4} />
            <Blob position={[0.5, 1.8, -3.5]} color="#22d3ee" scale={1.55} speed={0.6} distort={0.35} />
            <Blob position={[-1.8, -1.8, -2.5]} color="#ec4899" scale={1.45} speed={0.45} />
            <Blob position={[2.2, 2.0, -3.2]} color="#10b981" scale={1.3} speed={0.55} distort={0.3} />
            {!reduced && (
              <Sparkles count={140} scale={10} size={2.2} speed={0.3} color="#ffffff" opacity={0.55} />
            )}
          </MouseRig>
        </Suspense>
        {!reduced && (
          <EffectComposer>
            <Bloom intensity={1.05} luminanceThreshold={0.1} luminanceSmoothing={0.85} mipmapBlur radius={0.85} />
            <Vignette eskil={false} offset={0.22} darkness={1.0} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  )
}
