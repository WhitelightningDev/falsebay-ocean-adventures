import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/falsebayocean-logo.jpeg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Adventures', to: '/adventures' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function NavBar() {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  return (
    <header className={`nav-shell ${open ? 'nav-open' : ''}`}>
      <NavLink to="/" className="brand">
        <img className="brand-logo" src={logo} alt="False Bay Ocean Adventures logo" />
        <span>
          False Bay <span>Ocean Adventures</span>
        </span>
      </NavLink>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav aria-label="Primary">
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={handleClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink className="nav-cta" to="/book" onClick={handleClose}>
        Book now
      </NavLink>
    </header>
  )
}

export default NavBar
