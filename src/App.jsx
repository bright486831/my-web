import About from './components/About'
import Career from './components/Career'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import AuroraScene from './three/AuroraScene'

export default function App() {
  return (
    <>
      <AuroraScene />
      <main className="relative z-10">
        <Hero />
        <About />
        <Career />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}
