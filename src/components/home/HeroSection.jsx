import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function HeroSection() {
  const { t } = useTranslation()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const heroWords = ['Optimize', 'De-risk', 'Recover', 'Accelerate']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const wordVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        />
        {/* Dark overlay with gradient ✅ 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/50 via-[#0A1628]/0 to-[#0A1628]/10" />
        {/* Additional gradient for depth - bottom darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/20 to-transparent" />
      </div>

      {/* Animated accent elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-alice-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-alice-secondary/10 rounded-full blur-[100px]"
      />

      {/* ✅ 히어로 섹션 컨테이너 너비 조정 */}
      <div className="container-custom relative z-10 pb-24 pt-48 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-start">
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm backdrop-blur-sm"> */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/50 text-white text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-alice-primary" />
              AI-Powered Construction Scheduling
            </span>
          </motion.div>

          {/* Main Headline with sliding words */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              {/* Animated word container */}
              <div className="h-[1.2em] overflow-hidden mb-2">
                {/* ✅ 메인 타이틀 애니메이션 */}
                {/* <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    // className="block text-alice-primary"
                    className="block text-white"
                  >
                    {heroWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence> */}
                {/* Optimize */}
                Orchestrating
              </div>

              <span className="block">
                {/* project with{' '} */}
                End-to-End{' '}
                <span className="relative inline-block">
                  {/* <span className="text-alice-primary">AICONS</span> */}
                  {/* <span className="text-white">AICONS</span> */}
                  <span className="text-white">Optimization</span>
                  <motion.span
                    // className="absolute -bottom-2 left-0 right-0 h-1 bg-alice-primary rounded-full"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle 서브 타이틀*/}
          <motion.p
            variants={itemVariants}
            // className="text-sm md:text-base text-gray-300 mb-10 leading-relaxed max-w-3xl"
            // className="text-sm md:text-base text-gray-200 mb-10 leading-relaxed max-w-3xl"
            className="text-base md:text-lg text-white mb-10 leading-relaxed max-w-3xl"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 justify-start"
          >
            <motion.a
              href="https://www.aicons.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(104, 120, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 px-6 py-2.5 bg-alice-primary text-white font-semibold rounded-xl hover:bg-alice-primary/90 transition-all shadow-xl shadow-alice-primary/20 text-base md:text-lg"
            >
              AISIMS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 px-6 py-2.5 border-2 border-white/50 text-white font-semibold rounded-xl hover:border-white/50 transition-all backdrop-blur-sm text-base md:text-lg"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              {t('hero.watchVideo')}
            </motion.button>
          </motion.div>

          {/* Stats 가로선 */}
          <motion.div
            variants={itemVariants}
            // className="mt-10 pt-10 border-t border-white/10"
            className="mt-10 pt-10 border-t border-white/50"
          >
            <div className="grid grid-cols-3 gap-12">
              {[
                { value: '17%', label: t('hero.durationReduction') },
                { value: '14%', label: t('hero.laborCostSavings') },
                { value: '12%', label: t('hero.equipmentSavings') },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="text-left"
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
