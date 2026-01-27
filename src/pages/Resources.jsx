import { motion } from 'framer-motion'
import { FileText, Video, BookOpen, Download, ArrowRight, Play } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function Resources() {
  const { t } = useTranslation()

  const resources = {
    caseStudies: [
      {
        title: t('resourcesPage.cases.alignJV.title'),
        description: t('resourcesPage.cases.alignJV.description'),
        type: t('resourcesPage.cases.alignJV.type'),
        image: null,
      },
      {
        title: t('resourcesPage.cases.dataCenter.title'),
        description: t('resourcesPage.cases.dataCenter.description'),
        type: t('resourcesPage.cases.dataCenter.type'),
        image: null,
      },
      {
        title: t('resourcesPage.cases.industrialBrazil.title'),
        description: t('resourcesPage.cases.industrialBrazil.description'),
        type: t('resourcesPage.cases.industrialBrazil.type'),
        image: null,
      },
    ],
    webinars: [
      {
        title: t('resourcesPage.webinarList.introAI.title'),
        description: t('resourcesPage.webinarList.introAI.description'),
        duration: t('resourcesPage.webinarList.introAI.duration'),
      },
      {
        title: t('resourcesPage.webinarList.resourceAllocation.title'),
        description: t('resourcesPage.webinarList.resourceAllocation.description'),
        duration: t('resourcesPage.webinarList.resourceAllocation.duration'),
      },
      {
        title: t('resourcesPage.webinarList.bimToSchedule.title'),
        description: t('resourcesPage.webinarList.bimToSchedule.description'),
        duration: t('resourcesPage.webinarList.bimToSchedule.duration'),
      },
    ],
    whitepapers: [
      {
        title: t('resourcesPage.whitepaperList.futureScheduling.title'),
        description: t('resourcesPage.whitepaperList.futureScheduling.description'),
        pages: t('resourcesPage.whitepaperList.futureScheduling.pages'),
      },
      {
        title: t('resourcesPage.whitepaperList.measuringROI.title'),
        description: t('resourcesPage.whitepaperList.measuringROI.description'),
        pages: t('resourcesPage.whitepaperList.measuringROI.pages'),
      },
    ],
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('resourcesPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('resourcesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">{t('resourcesPage.caseStudies')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video bg-gradient-to-br from-alice-primary/20 to-alice-secondary/20" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-alice-primary uppercase tracking-wider">
                    {study.type}
                  </span>
                  <h3 className="text-xl font-bold text-alice-dark mt-2 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <button className="inline-flex items-center gap-2 text-alice-primary font-semibold group-hover:gap-3 transition-all">
                    {t('resourcesPage.readMore')} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section id="webinars" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">{t('resourcesPage.webinars')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-alice-dark rounded-xl mb-4 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-alice-primary/20 flex items-center justify-center group-hover:bg-alice-primary/40 transition-colors">
                    <Play className="w-8 h-8 text-alice-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-alice-dark mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-3">{webinar.description}</p>
                <span className="text-sm text-alice-primary font-medium">{webinar.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="blog" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">{t('resourcesPage.whitepapers')}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-20 h-28 bg-alice-primary/10 rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-alice-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-alice-dark mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-3">{paper.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{paper.pages}</span>
                    <button className="text-alice-primary font-semibold hover:underline">
                      {t('resourcesPage.downloadPDF')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('resourcesPage.stayUpdated')}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            {t('resourcesPage.newsletterSubtitle')}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('resourcesPage.enterEmail')}
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-alice-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('resourcesPage.subscribe')}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Resources
