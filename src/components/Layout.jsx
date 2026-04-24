import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* pt-20 offsets the fixed navbar height */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
