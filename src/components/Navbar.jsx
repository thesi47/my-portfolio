import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-lg border-b border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* ── Logo ── */}
        <NavLink to="/" className="text-xl font-bold tracking-tight text-white transition hover:text-indigo-400">
          &lt;Dev /&gt;
        </NavLink>

        {/* ── Desktop Links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition
                  after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
                  after:bg-indigo-500 after:transition-all after:duration-300
                  ${isActive
                    ? 'text-white after:w-full'
                    : 'text-gray-400 after:w-0 hover:text-white hover:after:w-full'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-[5px] group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-[2px] w-6 bg-gray-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[2px] w-6 bg-gray-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-6 bg-gray-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 pb-6">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${isActive ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
