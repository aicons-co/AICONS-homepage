import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import useTranslation from '../../hooks/useTranslation'

function TestimonialsSection() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      company: 'Align JV',
      project: 'HS2 High Speed Rail',
      quote: t('testimonials.quotes.alignJV'),
      author: t('testimonials.projectDirector'),
      image: null,
    },
    {
      id: 2,
      company: 'Reta Engenharia',
      project: 'Industrial Facility',
      quote: t('testimonials.quotes.reta'),
      author: t('testimonials.constructionManager'),
      image: null,
    },
    {
      id: 3,
      company: 'SCS Construction',
      project: 'Data Center',
      quote: t('testimonials.quotes.scs'),
      author: t('testimonials.vpOperations'),
      image: null,
    },
    {
      id: 4,
      company: 'Parsons',
      project: 'Infrastructure',
      quote: t('testimonials.quotes.parsons'),
      author: t('testimonials.seniorPM'),
      image: null,
    },
    {
      id: 5,
      company: 'HDCC',
      project: 'Commercial Building',
      quote: t('testimonials.quotes.hdcc'),
      author: t('testimonials.coo'),
      image: null,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">{t('testimonials.title')}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-aicons-primary/20 mb-4" />
              <p className="text-gray-700 mb-6 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-aicons-dark">{testimonial.company}</p>
                <p className="text-sm text-gray-500">{testimonial.project}</p>
                <p className="text-sm text-aicons-primary mt-1">{testimonial.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative bg-gradient-to-br from-aicons-dark to-aicons-navy rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aicons-primary/10 rounded-full blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Quote className="w-16 h-16 text-aicons-primary/30 mb-6" />
              <blockquote className="text-2xl md:text-3xl text-white font-light mb-8 max-w-4xl">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aicons-primary/20 flex items-center justify-center">
                  <span className="text-aicons-primary font-bold">
                    {testimonials[currentIndex].company.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[currentIndex].company}</p>
                  <p className="text-gray-400">{testimonials[currentIndex].author}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-aicons-primary w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
