import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Highlights from './features/Highlights'
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Adventures from './pages/Adventures'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Highlights />
                </>
              }
            />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <div className="map-preload" aria-hidden="true">
        <iframe
          title="Preload map for Gordon's Bay Harbour"
          src="https://maps.google.com/maps?q=Gordon%27s%20Bay%20Harbour&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="eager"
          tabIndex={-1}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
