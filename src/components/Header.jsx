import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const productsMenu = [
  { name: 'AICONS Plan', href: '/products/plan', description: 'Schedule visualization and planning' },
  { name: 'AICONS Optimize', href: '/products/optimize', description: 'P6/MSP-based optimization' },
  { name: 'AICONS Model', href: '/products/model', description: 'BIM-based modeling' },
]

const solutionsMenu = {
  byStakeholder: [
    { name: 'General Contractors', href: '/solutions/gc' },
    { name: 'Owners', href: '/solutions/owners' },
    { name: 'Consultants', href: '/solutions/consultants' },
  ],
  byProject: [
    { name: 'Industrial', href: '/solutions/industrial' },
    { name: 'Infrastructure', href: '/solutions/infrastructure' },
    { name: 'Commercial', href: '/solutions/commercial' },
  ],
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate()

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-alice-dark">
              <span className="text-alice-primary">AICONS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="nav-link flex items-center gap-1">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border"
                  >
                    {productsMenu.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 hover:bg-gray-50"
                      >
                        <div className="font-medium text-alice-dark">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </Link>
                    ))}
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
              <button className="nav-link flex items-center gap-1">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-4 border"
                  >
                    <div className="grid grid-cols-2 gap-4 px-4">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          By Stakeholder
                        </h4>
                        {solutionsMenu.byStakeholder.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-gray-700 hover:text-alice-primary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          By Project Type
                        </h4>
                        {solutionsMenu.byProject.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-gray-700 hover:text-alice-primary"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/resources" className="nav-link">
              Resources
            </Link>
            <Link to="/company" className="nav-link">
              Company
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigate('/demo')}
              className="btn-primary"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Products</h4>
                  {productsMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-alice-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Solutions</h4>
                  {[...solutionsMenu.byStakeholder, ...solutionsMenu.byProject].map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-alice-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/resources"
                  className="block py-2 font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/company"
                  className="block py-2 font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Company
                </Link>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      navigate('/demo')
                    }}
                    className="btn-primary w-full"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
