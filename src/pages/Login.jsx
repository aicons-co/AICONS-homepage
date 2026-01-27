import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, Globe } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function Login() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const regionParam = searchParams.get('region') || 'us'

  const [selectedRegion, setSelectedRegion] = useState(regionParam)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const regions = [
    { id: 'us', name: t('loginPage.regions.us'), flag: '🇺🇸' },
    { id: 'eu', name: t('loginPage.regions.eu'), flag: '🇪🇺' },
    { id: 'au', name: t('loginPage.regions.au'), flag: '🇦🇺' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo only - no actual authentication
    alert(t('loginPage.demoAlert'))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-alice-dark to-alice-navy flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-bold text-white">
              <span className="text-alice-primary">AICONS</span>
            </span>
          </Link>
          <p className="text-gray-400 mt-2">{t('loginPage.signIn')}</p>
        </div>

        {/* Region Selector */}
        <div className="bg-white/5 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{t('loginPage.selectRegion')}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`p-3 rounded-lg text-center transition-all ${
                  selectedRegion === region.id
                    ? 'bg-alice-primary text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <span className="text-xl block mb-1">{region.flag}</span>
                <span className="text-xs">{region.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('loginPage.emailAddress')}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('loginPage.emailPlaceholder')}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('loginPage.password')}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-alice-primary focus:ring-alice-primary"
                />
                <span className="text-sm text-gray-600">{t('loginPage.rememberMe')}</span>
              </label>
              <a href="#" className="text-sm text-alice-primary hover:underline">
                {t('loginPage.forgotPassword')}
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full"
            >
              {t('loginPage.signInButton')}
            </motion.button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">{t('loginPage.orContinueWith')}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            {t('loginPage.dontHaveAccount')}{' '}
            <Link to="/demo" className="text-alice-primary font-semibold hover:underline">
              {t('loginPage.requestAccess')}
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          {t('loginPage.termsAgreement')}{' '}
          <a href="#" className="text-gray-400 hover:text-white">{t('loginPage.termsOfService')}</a>
          {' '}{t('loginPage.and')}{' '}
          <a href="#" className="text-gray-400 hover:text-white">{t('loginPage.privacyPolicy')}</a>
          {t('loginPage.agreeEnd')}
        </p>
      </motion.div>
    </div>
  )
}

export default Login
