import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Highlights from './features/Highlights'
import BookNow from './pages/BookNow'
import Contact from './pages/Contact'
import Home from './pages/Home'

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
            <Route path="/book" element={<BookNow />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
