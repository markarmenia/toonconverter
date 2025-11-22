import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'
import Converter from './pages/Converter'
import About from './pages/About'
import Docs from './pages/Docs'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Cookies from './pages/Cookies'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
