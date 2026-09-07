import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
