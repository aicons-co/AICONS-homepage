import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Building2, Landmark, Factory, Clock, FileSearch, Bot, Target, CalendarClock, Link2, ClipboardCheck } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

const iconMap = {
  Building2,
  Landmark,
  Factory
}

const solutionIconMap = {
  FileSearch,
  Bot,
  Target,
  CalendarClock,
  Link2,
  ClipboardCheck
}

const solutionsMenu = [
  { key: 'parsing', icon: 'FileSearch' },
  { key: 'automation', icon: 'Bot' },
  { key: 'optimization', icon: 'Target' },
  { key: 'scheduling', icon: 'CalendarClock' },
  { key: 'integration', icon: 'Link2' },
  { key: 'feedback', icon: 'ClipboardCheck' },
]

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
            <span className="text-2xl font-bold text-aicons-dark">
              <span className="text-aicons-primary">AICONS</span>
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

                      if (isComingSoon) {
                        return (
                          <div
                            key={item.key}
                            className="flex items-start gap-3 px-4 py-3 bg-gray-100 opacity-60 cursor-not-allowed"
                          >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-gray-200">
                              <Icon className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-gray-400">{item.name}</span>
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
                          key={item.key}
                          to={item.href}
                          className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-aicons-primary/10">
                            <Icon className="w-5 h-5 text-aicons-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-aicons-dark">{item.name}</span>
                            </div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      )
                    })}
                    <div className="border-t mt-2 pt-2 px-4 pb-2">
                      <Link
                        to="/products"
                        className="text-sm text-aicons-primary hover:underline"
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
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 border"
                  >
                    {solutionsMenu.map((item) => {
                      const Icon = solutionIconMap[item.icon] || FileSearch
                      return (
                        <Link
                          key={item.key}
                          to={`/solutions/${item.key}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                        >
                          <div className="w-10 h-10 rounded-lg bg-aicons-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-aicons-primary" />
                          </div>
                          <div>
                            <span className="font-medium text-aicons-dark block">{t(`solutionsPage.${item.key}.name`)}</span>
                            <span className="text-sm text-gray-500">{t(`solutionsPage.${item.key}.tagline`)}</span>
                          </div>
                        </Link>
                      )
                    })}
                    <div className="border-t mt-2 pt-2 px-4 pb-2">
                      <Link
                        to="/solutions"
                        className="text-sm text-aicons-primary hover:underline"
                      >
                        {t('solutionsPage.viewAll')} →
                      </Link>
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

                    if (isComingSoon) {
                      return (
                        <div
                          key={item.key}
                          className="flex items-center gap-2 pl-4 py-2 text-gray-400 opacity-60 cursor-not-allowed"
                        >
                          <Icon className="w-4 h-4 text-gray-400" />
                          {item.name}
                          <span className="text-xs text-gray-400">({t('products.comingSoon')})</span>
                        </div>
                      )
                    }

                    return (
                      <Link
                        key={item.key}
                        to={item.href}
                        className="flex items-center gap-2 pl-4 py-2 text-gray-600 hover:text-aicons-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    )
                  })}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">{t('nav.solutions')}</h4>
                  {solutionsMenu.map((item) => {
                    const Icon = solutionIconMap[item.icon] || FileSearch
                    return (
                      <Link
                        key={item.key}
                        to={`/solutions/${item.key}`}
                        className="flex items-center gap-2 pl-4 py-2 text-gray-600 hover:text-aicons-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {t(`solutionsPage.${item.key}.name`)}
                      </Link>
                    )
                  })}
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
