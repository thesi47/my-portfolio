import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import data from '../data/portfolioData.json'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

/* ── Sun icon (shown in dark mode → click to go light) ── */
function SunIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    </svg>
  )
}

/* ── Moon icon (shown in light mode → click to go dark) ── */
function MoonIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition
    after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]
    after:transition-all after:duration-300
    ${isActive
      ? 'text-gray-900 dark:text-white after:w-full after:bg-blue-600 dark:after:bg-blue-400'
      : 'text-gray-500 dark:text-gray-400 after:w-0 after:bg-blue-600 dark:after:bg-blue-400 hover:text-gray-900 dark:hover:text-white hover:after:w-full'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `text-sm font-medium transition ${
      isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300
      bg-white/80 border-gray-200 backdrop-blur-lg
      dark:bg-[#0B1220]/80 dark:border-white/5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* ── Logo ── */}
        <NavLink to="/" className="text-xl font-bold tracking-tight transition
          text-gray-900 hover:text-blue-600
          dark:text-white dark:hover:text-blue-400">
          &lt;{data.personal.name.split(' ')[0]} /&gt;
        </NavLink>

        {/* ── Desktop Links + Theme Toggle ── */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                <NavLink to={to} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-lg p-2 transition-colors
              text-gray-500 hover:text-gray-900 hover:bg-gray-100
              dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* ── Mobile: Theme Toggle + Hamburger ── */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-lg p-2 transition-colors
              text-gray-500 hover:text-gray-900
              dark:text-gray-400 dark:hover:text-white"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="flex flex-col gap-[5px] group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block h-[2px] w-6 transition-all duration-300
              bg-gray-500 dark:bg-gray-400
              ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300
              bg-gray-500 dark:bg-gray-400
              ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[2px] w-6 transition-all duration-300
              bg-gray-500 dark:bg-gray-400
              ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
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
                className={mobileLinkClass}
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
