import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-14 md:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
