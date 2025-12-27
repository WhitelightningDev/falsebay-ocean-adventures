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
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <NavLink to="/" className="flex items-center gap-3 text-slate-900 font-semibold" onClick={handleClose}>
          <img className="h-10 w-10 rounded-xl border border-slate-200 object-cover" src={logo} alt="False Bay Ocean Adventures logo" />
          <span className="flex flex-col leading-tight text-sm sm:text-base">
            <span>False Bay</span>
            <span className="text-sky-700">Ocean Adventures</span>
          </span>
        </NavLink>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-5 rounded bg-slate-800" />
            <span className="block h-[2px] w-5 rounded bg-slate-800" />
            <span className="block h-[2px] w-5 rounded bg-slate-800" />
          </span>
        </button>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${
                      isActive ? 'bg-sky-100 text-sky-800' : 'hover:bg-slate-100'
                    }`
                  }
                  onClick={handleClose}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink
          className="hidden items-center justify-center rounded-full bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-md transition hover:shadow-lg md:inline-flex"
          to="/book"
          onClick={handleClose}
        >
          Book now
        </NavLink>
      </div>

      {open ? (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-10">
            <ul className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 transition ${
                        isActive ? 'bg-sky-100 text-sky-800' : 'hover:bg-slate-100'
                      }`
                    }
                    onClick={handleClose}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-800 to-cyan-500 px-4 py-3 text-sm font-bold text-white shadow-md transition hover:shadow-lg"
              to="/book"
              onClick={handleClose}
            >
              Book now
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default NavBar
