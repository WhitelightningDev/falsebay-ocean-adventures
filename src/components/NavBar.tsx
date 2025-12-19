import { NavLink } from 'react-router-dom'
import logo from '../assets/falsebayocean-logo.jpeg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Adventures', to: '/adventures' },
  { label: 'FAQs', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

function NavBar() {
  return (
    <header className="nav-shell">
      <NavLink to="/" className="brand">
        <img className="brand-logo" src={logo} alt="False Bay Ocean Adventures logo" />
        <span>
          False Bay <span>Ocean Adventures</span>
        </span>
      </NavLink>
      <nav aria-label="Primary">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NavLink className="nav-cta" to="/book">
        Book now
      </NavLink>
    </header>
  )
}

export default NavBar
