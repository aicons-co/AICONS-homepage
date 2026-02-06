import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Building2, Landmark, Factory, Clock } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

const iconMap = {
  Building2,
  Landmark,
  Factory
}

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
  const { t, locale } = useTranslation()

  const handleDropdownEnter = (menu) => {
    setActiveDropdown(menu)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  // Get products categories from translations
  const categories = t('products.categories')
  const categoryOrder = ['building', 'civil', 'plant']

  const productsMenu = categoryOrder.map((key) => {
    const category = categories[key]
    return {
      key,
      name: category?.name || key,
      href: `/products/${key}`,
      description: category?.description || '',
      icon: category?.icon || 'Building2',
      status: category?.status || 'active'
    }
  })

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
                {t('nav.products')}
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border"
                  >
                    {productsMenu.map((item) => {
                      const Icon = iconMap[item.icon] || Building2
                      const isComingSoon = item.status === 'coming_soon'

                      return (
                        <Link
                          key={item.key}
                          to={item.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-lg bg-alice-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-alice-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-alice-dark">{item.name}</span>
                              {isComingSoon && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                  <Clock className="w-3 h-3" />
                                  {t('products.comingSoon')}
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                    <div className="border-t mt-2 pt-2 px-4 pb-2">
                      <Link
                        to="/products"
                        className="text-sm text-alice-primary hover:underline"
                      >
                        {t('products.viewAll')} →
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
              <button className="nav-link flex items-center gap-1">
                {t('nav.solutions')}
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
                          {t('nav.byStakeholder')}
                        </h4>
                        {solutionsMenu.byStakeholder.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-gray-700 hover:text-alice-primary"
                          >
                            {locale === 'ko' ? t(`solutions.${item.href.split('/').pop()}`) : item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          {t('nav.byProjectType')}
                        </h4>
                        {solutionsMenu.byProject.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-gray-700 hover:text-alice-primary"
                          >
                            {locale === 'ko' ? t(`solutions.${item.href.split('/').pop()}`) : item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/resources" className="nav-link">
              {t('nav.resources')}
            </Link>
            <Link to="/company" className="nav-link">
              {t('nav.company')}
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => navigate('/demo')}
              className="btn-primary"
            >
              {locale === 'ko' ? '데모 예약' : 'Book a Demo'}
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
                  <h4 className="font-semibold text-gray-900">{t('nav.products')}</h4>
                  {productsMenu.map((item) => {
                    const Icon = iconMap[item.icon] || Building2
                    const isComingSoon = item.status === 'coming_soon'

                    return (
                      <Link
                        key={item.key}
                        to={item.href}
                        className="flex items-center gap-2 pl-4 py-2 text-gray-600 hover:text-alice-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                        {isComingSoon && (
                          <span className="text-xs text-amber-600">({t('products.comingSoon')})</span>
                        )}
                      </Link>
                    )
                  })}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{t('nav.solutions')}</h4>
                  {[...solutionsMenu.byStakeholder, ...solutionsMenu.byProject].map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-alice-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {locale === 'ko' ? t(`solutions.${item.href.split('/').pop()}`) : item.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/resources"
                  className="block py-2 font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.resources')}
                </Link>
                <Link
                  to="/company"
                  className="block py-2 font-semibold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.company')}
                </Link>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      navigate('/demo')
                    }}
                    className="btn-primary w-full"
                  >
                    {locale === 'ko' ? '데모 예약' : 'Book a Demo'}
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
