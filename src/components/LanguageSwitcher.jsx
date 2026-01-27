import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function LanguageSwitcher({ isScrolled = false, isMobile = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ]

  const currentLang = languages.find((l) => l.code === language)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  if (isMobile) {
    return (
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 mb-3 text-gray-500">
          <Globe className="w-4 h-4" />
          <span className="text-sm">{t('language.select')}</span>
        </div>
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                language === lang.code
                  ? 'bg-alice-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        // className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium transition-colors ${
        //   isScrolled
        //     ? 'text-gray-700 hover:text-alice-primary hover:bg-gray-100'
        //     : 'text-white/90 hover:text-white hover:bg-white/10'
        // }`}
        className='flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium text-black'
      >
        <Globe className="w-4 h-4" />
        <span className="text-[20px]">{currentLang?.flag}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-36 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors ${
                    language === lang.code
                      ? 'bg-alice-primary/10 text-alice-primary'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
