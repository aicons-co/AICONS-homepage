import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight, Clock, Building2, Landmark, Factory } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)

  const menuItems = {
    products: {
      title: 'Products',
      items: [
        {
          name: t('건축'),
          href: '/products/building',
          description: t('건축 분야 AI 관리 시스템'),
          icon: Building2,
          status: 'active',
        },
        {
          name: t('토목'),
          href: '/products/civil',
          description: t('토목 분야 AI 관리 시스템'),
          icon: Landmark,
          status: 'coming_soon',
        },
        {
          name: t('플랜트'),
          href: '/products/plant',
          description: t('플랜트 분야 AI 관리 시스템'),
          icon: Factory,
          status: 'coming_soon',
        },
      ],
    },
    solutions: {
      title: 'Solutions',
      sections: [
        {
          // title: t('nav.byStakeholder'),
          items: [
            { name: t('solutions.parsing'), href: '/solutions/parsing' },
            { name: t('solutions.automation'), href: '/solutions/automation' },
            { name: t('solutions.optimization'), href: '/solutions/optimization' },
            { name: t('solutions.scheduling'), href: '/solutions/scheduling' },
            { name: t('solutions.integration'), href: '/solutions/integration' },
            { name: t('solutions.feedback'), href: '/solutions/feedback' },
          ],
        },
        // {
        //   // title: t('nav.byProjectType'),
        //   items: [
        //     { name: t('solutions.industrial'), href: '/solutions/industrial' },
        //     { name: t('solutions.infrastructure'), href: '/solutions/infrastructure' },
        //     { name: t('solutions.commercial'), href: '/solutions/commercial' },
        //   ],
        // },
      ],
    },
    resources: {
      title: 'Resources',
      items: [
        { name: t('nav.patents'), href: '/resources#patents' },
        { name: t('nav.papers'), href: '/resources#papers' },
        { name: t('nav.downloads'), href: '/resources#downloads' },
      ],
    },
  }

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
      // className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
      //   isScrolled
      //     ? 'bg-white shadow-lg py-2'
      //     : 'bg-transparent py-4'
      // }`}
      className='fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-2'
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <motion.img
              src="/logo-main.svg"
              alt="AICONS"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-10 md:h-14 w-auto"
            />
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 text-[15px]">

            {/* Company */}
              <Link
                to="/company"
                // className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                //   isScrolled
                //     ? 'text-gray-700 hover:text-aicons-primary hover:bg-gray-100'
                //     : 'text-white/90 hover:text-white hover:bg-white/10'
                //   }`}
                className='px-4 py-2 rounded-lg font-medium text-black'
              >
              Company
              </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                // className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                //   isScrolled
                //     ? 'text-gray-700 hover:text-aicons-primary hover:bg-gray-100'
                //     : 'text-white/90 hover:text-white hover:bg-white/10'
                // }`}
                className='flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-black'
              >
                {menuItems.products.title}
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
                      {menuItems.products.items.map((item) => {
                        const isComingSoon = item.status === 'coming_soon'

                        if (isComingSoon) {
                          return (
                            <div
                              key={item.name}
                              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 opacity-60 cursor-default"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                                <item.icon className="w-5 h-5 text-gray-400" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-gray-400">{item.name}</span>
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-200 text-gray-500 text-xs font-medium rounded-full">
                                    <Clock className="w-3 h-3" />
                                    {t('products.comingSoon')}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-400">{item.description}</div>
                              </div>
                            </div>
                          )
                        }

                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-aicons-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-aicons-primary/20 transition-colors">
                              <item.icon className="w-5 h-5 text-aicons-primary" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-aicons-primary transition-colors">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="bg-gray-50 p-4 border-t">
                      <Link
                        to="/products"
                        className="text-sm text-aicons-primary font-medium hover:underline flex items-center gap-1"
                      >
                        {t('nav.viewAllProducts')} <ChevronRight className="w-4 h-4" />
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
                // className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                //   isScrolled
                //     ? 'text-gray-700 hover:text-aicons-primary hover:bg-gray-100'
                //     : 'text-white/90 hover:text-white hover:bg-white/10'
                // }`}
                className='flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-black'
              >
                {menuItems.solutions.title}
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
                          {/* <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            {section.title}
                          </h4> */}
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="block py-1.5 text-gray-700 hover:text-aicons-primary transition-colors"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 border-t">
                      <Link
                        to="/solutions"
                        className="text-sm text-aicons-primary font-medium hover:underline flex items-center gap-1"
                      >
                        {t('solutionsPage.viewAll')} <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('resources')}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                // className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                //   isScrolled
                //     ? 'text-gray-700 hover:text-aicons-primary hover:bg-gray-100'
                //     : 'text-white/90 hover:text-white hover:bg-white/10'
                // }`}
                className='flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-black'
              >
                {menuItems.resources.title}
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
                          className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-aicons-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          {/* CTA Button */}
          {/* ✅ AISIMS 링크 버튼 */}
          <div className="hidden lg:block">
            <motion.a
              href="https://www.aicons.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-6 py-2.5
                bg-aicons-primary text-white font-semibold rounded-lg
                hover:bg-aicons-primary/90 transition-colors shadow-lg shadow-aicons-primary/10"
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
                      {menuItems.products.title}
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
                            {menuItems.products.items.map((item) => {
                              const isComingSoon = item.status === 'coming_soon'

                              if (isComingSoon) {
                                return (
                                  <div
                                    key={item.name}
                                    className="flex items-center gap-2 px-4 py-2.5 text-gray-400 opacity-60 cursor-default rounded-lg"
                                  >
                                    {item.name}
                                    <span className="text-xs text-gray-400">({t('products.comingSoon')})</span>
                                  </div>
                                )
                              }

                              return (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  onClick={closeMobileMenu}
                                  className="block px-4 py-2.5 text-gray-600 hover:text-aicons-primary rounded-lg hover:bg-gray-50"
                                >
                                  {item.name}
                                </Link>
                              )
                            })}
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
                      {menuItems.solutions.title}
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
                                    className="block px-4 py-2 text-gray-600 hover:text-aicons-primary"
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

                  {/* Mobile Language Switcher */}
                  <LanguageSwitcher isMobile={true} />

                  {/* Mobile CTA */}
                  <div className="pt-4 px-4">
                    <a
                      href="https://www.aicons.co.kr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="block w-full py-3 bg-aicons-primary text-white font-semibold rounded-lg hover:bg-aicons-primary/90 transition-colors text-center"
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
