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
    </BrowserRouter>
  )
}

export default App
