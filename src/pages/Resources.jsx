import { motion } from 'framer-motion'
import { FileText, Shield, Download, ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'

function Resources() {
  const { t } = useTranslation()

  const papers = [
    {
      title: t('resourcesPage.papers.items.paper1.title'),
      authors: t('resourcesPage.papers.items.paper1.authors'),
      journal: t('resourcesPage.papers.items.paper1.journal'),
      year: '2024',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: t('resourcesPage.papers.items.paper2.title'),
      authors: t('resourcesPage.papers.items.paper2.authors'),
      journal: t('resourcesPage.papers.items.paper2.journal'),
      year: '2024',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: t('resourcesPage.papers.items.paper3.title'),
      authors: t('resourcesPage.papers.items.paper3.authors'),
      journal: t('resourcesPage.papers.items.paper3.journal'),
      year: '2023',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: t('resourcesPage.papers.items.paper4.title'),
      authors: t('resourcesPage.papers.items.paper4.authors'),
      journal: t('resourcesPage.papers.items.paper4.journal'),
      year: '2023',
      gradient: 'from-purple-500 to-pink-600',
    },
  ]

  const patents = [
    {
      title: t('resourcesPage.patents.items.patent1.title'),
      number: t('resourcesPage.patents.items.patent1.number'),
      date: t('resourcesPage.patents.items.patent1.date'),
      status: 'registered',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: t('resourcesPage.patents.items.patent2.title'),
      number: t('resourcesPage.patents.items.patent2.number'),
      date: t('resourcesPage.patents.items.patent2.date'),
      status: 'registered',
      gradient: 'from-teal-600 to-cyan-700',
    },
    {
      title: t('resourcesPage.patents.items.patent3.title'),
      number: t('resourcesPage.patents.items.patent3.number'),
      date: t('resourcesPage.patents.items.patent3.date'),
      status: 'pending',
      gradient: 'from-violet-600 to-purple-700',
    },
    {
      title: t('resourcesPage.patents.items.patent4.title'),
      number: t('resourcesPage.patents.items.patent4.number'),
      date: t('resourcesPage.patents.items.patent4.date'),
      status: 'pending',
      gradient: 'from-rose-600 to-red-700',
    },
  ]

  const downloads = [
    {
      title: t('resourcesPage.downloads.items.dl1.title'),
      description: t('resourcesPage.downloads.items.dl1.description'),
      pages: t('resourcesPage.downloads.items.dl1.pages'),
    },
    {
      title: t('resourcesPage.downloads.items.dl2.title'),
      description: t('resourcesPage.downloads.items.dl2.description'),
      pages: t('resourcesPage.downloads.items.dl2.pages'),
    },
    {
      title: t('resourcesPage.downloads.items.dl3.title'),
      description: t('resourcesPage.downloads.items.dl3.description'),
      pages: t('resourcesPage.downloads.items.dl3.pages'),
    },
    {
      title: t('resourcesPage.downloads.items.dl4.title'),
      description: t('resourcesPage.downloads.items.dl4.description'),
      pages: t('resourcesPage.downloads.items.dl4.pages'),
    },
    {
      title: t('resourcesPage.downloads.items.dl5.title'),
      description: t('resourcesPage.downloads.items.dl5.description'),
      pages: t('resourcesPage.downloads.items.dl5.pages'),
    },
  ]

  const statusLabel = (status) => {
    if (status === 'registered') {
      return {
        text: t('resourcesPage.patents.registered'),
        className: 'bg-emerald-100 text-emerald-700',
      }
    }
    return {
      text: t('resourcesPage.patents.pending'),
      className: 'bg-amber-100 text-amber-700',
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-aicons-dark to-aicons-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('resourcesPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('resourcesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Patents */}
      <section id="patents" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-aicons-primary" />
            <h2 className="text-3xl font-bold text-aicons-dark">{t('resourcesPage.patents.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${patent.gradient} flex items-center justify-center`}>
                  <Shield className="w-12 h-12 text-white/60" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusLabel(patent.status).className}`}>
                      {statusLabel(patent.status).text}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-aicons-dark mb-2 line-clamp-3 leading-snug">{patent.title}</h3>
                  <p className="text-xs text-gray-500 mb-1">{patent.number}</p>
                  <p className="text-xs text-gray-400">{patent.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers */}
      <section id="papers" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-aicons-primary" />
            <h2 className="text-3xl font-bold text-aicons-dark">{t('resourcesPage.papers.title')}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${paper.gradient} flex items-center justify-center`}>
                  <FileText className="w-12 h-12 text-white/60" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-aicons-primary">{paper.journal}</span>
                    <span className="text-xs text-gray-400">{paper.year}</span>
                  </div>
                  <h3 className="text-sm font-bold text-aicons-dark mb-2 line-clamp-3 leading-snug">{paper.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">{paper.authors}</p>
                  <button className="inline-flex items-center gap-1.5 text-sm text-aicons-primary font-semibold hover:gap-2.5 transition-all">
                    {t('resourcesPage.downloadPDF')} <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Download className="w-8 h-8 text-aicons-primary" />
            <h2 className="text-3xl font-bold text-aicons-dark">{t('resourcesPage.downloads.title')}</h2>
          </div>
          <div className="space-y-4">
            {downloads.map((dl, index) => (
              <motion.div
                key={dl.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-5 bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-aicons-primary/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-7 h-7 text-aicons-primary" />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold text-aicons-dark mb-1">{dl.title}</h3>
                  <p className="text-sm text-gray-600">{dl.description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-4">
                  <span className="text-sm text-gray-400 hidden sm:block">{dl.pages}</span>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-aicons-primary text-white text-sm font-semibold rounded-lg hover:bg-aicons-primary/90 transition-colors">
                    <Download className="w-4 h-4" />
                    {t('resourcesPage.downloadPDF')}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-aicons-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('resourcesPage.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            {t('resourcesPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/company"
              className="px-8 py-3 bg-white text-aicons-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t('common.contactUs')}
            </Link>
            <Link
              to="/demo"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              {t('common.requestDemo')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources
