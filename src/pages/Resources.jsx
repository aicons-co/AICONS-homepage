import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Shield, Download, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import useTranslation from '../hooks/useTranslation'

function Resources() {
  const { t } = useTranslation()
  const [selectedPaper, setSelectedPaper] = useState(null)

  useEffect(() => {
    if (selectedPaper) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedPaper])

  const papers = [
    {
      title: t('resourcesPage.papers.items.paper1.title'),
      authors: t('resourcesPage.papers.items.paper1.authors'),
      journal: t('resourcesPage.papers.items.paper1.journal'),
      year: '2025',
      image: '/images/papers/paper1-decarbonization.png',
    },
    {
      title: t('resourcesPage.papers.items.paper2.title'),
      authors: t('resourcesPage.papers.items.paper2.authors'),
      journal: t('resourcesPage.papers.items.paper2.journal'),
      year: '2023',
      image: '/images/papers/paper2-beams.png',
    },
    {
      title: t('resourcesPage.papers.items.paper3.title'),
      authors: t('resourcesPage.papers.items.paper3.authors'),
      journal: t('resourcesPage.papers.items.paper3.journal'),
      year: '2024',
      image: '/images/papers/paper3-column.png',
    },
    {
      title: t('resourcesPage.papers.items.paper4.title'),
      authors: t('resourcesPage.papers.items.paper4.authors'),
      journal: t('resourcesPage.papers.items.paper4.journal'),
      year: '2024',
      image: '/images/papers/paper4-wall.png',
    },
    {
      title: t('resourcesPage.papers.items.paper5.title'),
      authors: t('resourcesPage.papers.items.paper5.authors'),
      journal: t('resourcesPage.papers.items.paper5.journal'),
      year: '2024',
      image: '/images/papers/paper5-diaphragm.png',
    },
    {
      title: t('resourcesPage.papers.items.paper6.title'),
      authors: t('resourcesPage.papers.items.paper6.authors'),
      journal: t('resourcesPage.papers.items.paper6.journal'),
      year: '2024',
      image: '/images/papers/paper6-combined-couplers.png',
    },
    {
      title: t('resourcesPage.papers.items.paper7.title'),
      authors: t('resourcesPage.papers.items.paper7.authors'),
      journal: t('resourcesPage.papers.items.paper7.journal'),
      year: '2024',
      image: '/images/papers/paper7-bim-bbs.png',
    },
    {
      title: t('resourcesPage.papers.items.paper8.title'),
      authors: t('resourcesPage.papers.items.paper8.authors'),
      journal: t('resourcesPage.papers.items.paper8.journal'),
      year: '2024',
      image: '/images/papers/paper8-simulation.png',
    },
  ]

  const patents = [
    {
      title: t('resourcesPage.patents.items.patent1.title'),
      number: t('resourcesPage.patents.items.patent1.number'),
      date: t('resourcesPage.patents.items.patent1.date'),
      status: 'registered',
      image: '/images/patents/patent1-bim.svg',
    },
    {
      title: t('resourcesPage.patents.items.patent2.title'),
      number: t('resourcesPage.patents.items.patent2.number'),
      date: t('resourcesPage.patents.items.patent2.date'),
      status: 'registered',
      image: '/images/patents/patent2-slp.svg',
    },
    {
      title: t('resourcesPage.patents.items.patent3.title'),
      number: t('resourcesPage.patents.items.patent3.number'),
      date: t('resourcesPage.patents.items.patent3.date'),
      status: 'pending',
      image: '/images/patents/patent3-simulation.svg',
    },
    {
      title: t('resourcesPage.patents.items.patent4.title'),
      number: t('resourcesPage.patents.items.patent4.number'),
      date: t('resourcesPage.patents.items.patent4.date'),
      status: 'pending',
      image: '/images/patents/patent4-detection.svg',
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={patent.image} alt={patent.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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

      {/* ✅ Papers 논문 */}
      <section id="papers" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-aicons-primary" />
            <h2 className="text-3xl font-bold text-aicons-dark">{t('resourcesPage.papers.title')}</h2>
          </div>
          <div className="space-y-4">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="sm:w-48 sm:flex-shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img src={paper.image} alt={paper.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5 flex flex-col justify-center flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-aicons-primary/10 text-aicons-primary">{paper.journal}</span>
                    <span className="text-xs text-gray-400">{paper.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-aicons-dark mb-2 leading-snug">{paper.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{paper.authors}</p>
                  <button className="inline-flex items-center gap-1.5 text-sm text-aicons-primary font-semibold hover:gap-2.5 transition-all self-start">
                    {t('resourcesPage.downloadPDF')} <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 텍스트형 레이아웃 (비교용) */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-400 mb-6 border-b border-gray-200 pb-2">Text Layout</h3>
            <ol className="space-y-4">
              {papers.map((paper, index) => (
                <motion.li
                  key={`text-${paper.title}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedPaper(paper)}
                  className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                >
                  <span className="text-lg font-bold text-aicons-primary/40 flex-shrink-0 w-8 text-right">{index + 1}</span>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-sm font-bold text-aicons-dark leading-snug mb-1">
                      {paper.title}
                      <span className="inline-flex items-center gap-1.5 ml-2 align-middle">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-aicons-primary/10 text-aicons-primary">{paper.journal}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">{paper.year}</span>
                      </span>
                    </h4>
                    <p className="text-xs text-gray-500">{paper.authors}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
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

      {/* Paper Detail Modal */}
      <AnimatePresence>
        {selectedPaper && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPaper(null)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-10 lg:inset-y-16 lg:inset-x-[20%] bg-white rounded-2xl z-50 overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-end p-3 border-b border-gray-200">
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-2xl mx-auto">
                  <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
                    <img
                      src={selectedPaper.image}
                      alt={selectedPaper.title}
                      className="w-full h-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-aicons-dark leading-snug mb-2">
                    {selectedPaper.title}
                    <span className="inline-flex items-center gap-1.5 ml-2 align-middle">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-aicons-primary/10 text-aicons-primary">{selectedPaper.journal}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 font-medium">{selectedPaper.year}</span>
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">{selectedPaper.authors}</p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-aicons-primary text-white font-semibold rounded-lg hover:bg-aicons-primary/90 transition-colors">
                    <Download className="w-4 h-4" />
                    {t('resourcesPage.downloadPDF')}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Resources
