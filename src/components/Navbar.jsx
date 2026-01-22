import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

const menuItems = {
  products: {
    title: 'Products',
    items: [
      {
        name: 'AISIMS Plan',
        href: '/products/plan',
        description: 'Schedule visualization and planning',
      },
      {
        name: 'AISIMS Optimize',
        href: '/products/optimize',
        description: 'AI-powered schedule optimization',
      },
      {
        name: 'AISIMS Model',
        href: '/products/model',
        description: 'BIM-based modeling and scheduling',
      },
    ],
  },
  solutions: {
    title: 'Solutions',
    sections: [
      {
        title: 'By Stakeholder',
        items: [
          { name: 'General Contractors', href: '/solutions/gc' },
          { name: 'Owners', href: '/solutions/owners' },
          { name: 'Consultants', href: '/solutions/consultants' },
        ],
      },
      {
        title: 'By Project Type',
        items: [
          { name: 'Industrial', href: '/solutions/industrial' },
          { name: 'Infrastructure', href: '/solutions/infrastructure' },
          { name: 'Commercial', href: '/solutions/commercial' },
        ],
      },
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { name: 'Projects', href: '/resources#case-studies' },
      { name: 'Webinars', href: '/resources#webinars' },
      { name: 'Blog', href: '/resources#blog' },
      { name: 'Whitepapers', href: '/resources#whitepapers' },
    ],
  },
}

const loginRegions = [
  { name: 'US', flag: '🇺🇸', href: '/login?region=us' },
  { name: 'UK/EU', flag: '🇪🇺', href: '/login?region=eu' },
  { name: 'AU', flag: '🇦🇺', href: '/login?region=au' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSubmenu(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-alice-dark' : 'text-white'
              }`}
            >
              <span className="text-alice-primary">AICONS</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {menuItems.products.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-alice-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-alice-primary/20 transition-colors">
                            <span className="text-alice-primary font-bold">
                              {item.name.split(' ')[1]?.charAt(0) || 'A'}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-alice-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 border-t">
                      <Link
                        to="/products"
                        className="text-sm text-alice-primary font-medium hover:underline flex items-center gap-1"
                      >
                        View all products <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('solutions')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6 grid grid-cols-2 gap-6">
                      {menuItems.solutions.sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            {section.title}
                          </h4>
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="block py-1.5 text-gray-700 hover:text-alice-primary transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Case Studies */}
            <Link
              to="/resources#case-studies"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Projects
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {menuItems.resources.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-alice-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company */}
            <Link
              to="/company"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Company
            </Link>

            {/* Login Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('login')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Login
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'login' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'login' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {loginRegions.map((region) => (
                        <Link
                          key={region.name}
                          to={region.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-alice-primary transition-colors"
                        >
                          <span>{region.flag}</span>
                          <span>{region.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="https://www.aicons.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-2.5 bg-alice-primary text-white font-semibold rounded-lg hover:bg-alice-primary/90 transition-colors shadow-lg shadow-alice-primary/25"
            >
              AISIMS<sup className="text-xs">®</sup>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t overflow-hidden"
            >
              <div className="max-h-[80vh] overflow-y-auto">
                <div className="p-4 space-y-1">
                  {/* Products */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                    >
                      Products
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === 'products' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {menuItems.products.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={closeMobileMenu}
                                className="block px-4 py-2.5 text-gray-600 hover:text-alice-primary rounded-lg hover:bg-gray-50"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Solutions */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                    >
                      Solutions
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === 'solutions' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-3">
                            {menuItems.solutions.sections.map((section) => (
                              <div key={section.title}>
                                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                                  {section.title}
                                </p>
                                {section.items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={closeMobileMenu}
                                    className="block px-4 py-2 text-gray-600 hover:text-alice-primary"
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other Links */}
                  <Link
                    to="/resources#case-studies"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/resources"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                  >
                    Resources
                  </Link>
                  <Link
                    to="/company"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                  >
                    Company
                  </Link>

                  {/* Login */}
                  <div>
                    <button
                      onClick={() => setMobileSubmenu(mobileSubmenu === 'login' ? null : 'login')}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-900 font-medium rounded-lg hover:bg-gray-50"
                    >
                      Login
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileSubmenu === 'login' ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileSubmenu === 'login' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 flex gap-4">
                            {loginRegions.map((region) => (
                              <Link
                                key={region.name}
                                to={region.href}
                                onClick={closeMobileMenu}
                                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-alice-primary bg-gray-50 rounded-lg"
                              >
                                <span>{region.flag}</span>
                                <span>{region.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-4 px-4">
                    <a
                      href="https://www.aicons.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="block w-full py-3 bg-alice-primary text-white font-semibold rounded-lg hover:bg-alice-primary/90 transition-colors text-center"
                    >
                      AISIMS<sup className="text-xs">®</sup>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
