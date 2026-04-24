import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col
      bg-[#F9FAFB] dark:bg-[#0B1220]
      transition-colors duration-300">
      <ScrollToTop />
      <Navbar />

      {/* pt-20 offsets the fixed navbar height */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
