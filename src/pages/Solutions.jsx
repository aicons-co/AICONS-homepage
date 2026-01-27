import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Users, Briefcase, Factory, Train, Store, ArrowRight, Check } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function SolutionPage({ solutionKey }) {
  const { t } = useTranslation()

  const solutionPages = {
    gc: {
      name: t('solutionsPage.gc.name'),
      icon: Building2,
      tagline: t('solutionsPage.gc.tagline'),
      description: t('solutionsPage.gc.description'),
      challenges: t('solutionsPage.gc.challenges'),
      solutions: t('solutionsPage.gc.solutions'),
    },
    owners: {
      name: t('solutionsPage.owners.name'),
      icon: Briefcase,
      tagline: t('solutionsPage.owners.tagline'),
      description: t('solutionsPage.owners.description'),
      challenges: t('solutionsPage.owners.challenges'),
      solutions: t('solutionsPage.owners.solutions'),
    },
    consultants: {
      name: t('solutionsPage.consultants.name'),
      icon: Users,
      tagline: t('solutionsPage.consultants.tagline'),
      description: t('solutionsPage.consultants.description'),
      challenges: t('solutionsPage.consultants.challenges'),
      solutions: t('solutionsPage.consultants.solutions'),
    },
    industrial: {
      name: t('solutionsPage.industrial.name'),
      icon: Factory,
      tagline: t('solutionsPage.industrial.tagline'),
      description: t('solutionsPage.industrial.description'),
      features: t('solutionsPage.industrial.features'),
    },
    infrastructure: {
      name: t('solutionsPage.infrastructure.name'),
      icon: Train,
      tagline: t('solutionsPage.infrastructure.tagline'),
      description: t('solutionsPage.infrastructure.description'),
      features: t('solutionsPage.infrastructure.features'),
    },
    commercial: {
      name: t('solutionsPage.commercial.name'),
      icon: Store,
      tagline: t('solutionsPage.commercial.tagline'),
      description: t('solutionsPage.commercial.description'),
      features: t('solutionsPage.commercial.features'),
    },
  }

  const solution = solutionPages[solutionKey]

  if (!solution) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">{t('solutionsPage.solutionNotFound')}</h1>
        <Link to="/solutions/gc" className="text-alice-primary hover:underline">
          {t('solutionsPage.viewGC')}
        </Link>
      </div>
    )
  }

  const isStakeholder = ['gc', 'owners', 'consultants'].includes(solutionKey)

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-alice-primary/20 flex items-center justify-center">
                <solution.icon className="w-8 h-8 text-alice-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">{solution.name}</h1>
                <p className="text-alice-primary text-lg">{solution.tagline}</p>
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8">{solution.description}</p>
            <div className="flex gap-4">
              <Link to="/demo" className="btn-primary">
                {t('solutionsPage.requestDemo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {isStakeholder ? (
        <>
          <section className="py-20 bg-white">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-2xl font-bold text-alice-dark mb-6">{t('solutionsPage.yourChallenges')}</h2>
                  <div className="space-y-4">
                    {solution.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-red-50 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-red-500 mt-2" />
                        <span className="text-gray-700">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-alice-dark mb-6">{t('solutionsPage.ourSolutions')}</h2>
                  <div className="space-y-4">
                    {solution.solutions.map((sol, index) => (
                      <motion.div
                        key={sol}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{sol}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">{t('solutionsPage.keyCapabilities')}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {solution.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl"
                >
                  <Check className="w-6 h-6 text-alice-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('solutionsPage.readyToTransform')}
          </h2>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-alice-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('solutionsPage.scheduleDemo')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function SolutionsIndex() {
  const { t } = useTranslation()
  const stakeholders = ['gc', 'owners', 'consultants']
  const projectTypes = ['industrial', 'infrastructure', 'commercial']

  const solutionData = {
    gc: { name: t('solutionsPage.gc.name'), tagline: t('solutionsPage.gc.tagline'), icon: Building2 },
    owners: { name: t('solutionsPage.owners.name'), tagline: t('solutionsPage.owners.tagline'), icon: Briefcase },
    consultants: { name: t('solutionsPage.consultants.name'), tagline: t('solutionsPage.consultants.tagline'), icon: Users },
    industrial: { name: t('solutionsPage.industrial.name'), tagline: t('solutionsPage.industrial.tagline'), icon: Factory },
    infrastructure: { name: t('solutionsPage.infrastructure.name'), tagline: t('solutionsPage.infrastructure.tagline'), icon: Train },
    commercial: { name: t('solutionsPage.commercial.name'), tagline: t('solutionsPage.commercial.tagline'), icon: Store },
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('solutionsPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('solutionsPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-alice-dark mb-8">{t('solutionsPage.byStakeholder')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stakeholders.map((key, index) => {
              const solution = solutionData[key]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/solutions/${key}`}
                    className="block bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-alice-primary/10 flex items-center justify-center mb-6">
                      <solution.icon className="w-7 h-7 text-alice-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alice-dark mb-2">{solution.name}</h3>
                    <p className="text-gray-600 mb-6">{solution.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-alice-primary font-semibold">
                      {t('solutionsPage.learnMore')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <h2 className="text-2xl font-bold text-alice-dark mb-8">{t('solutionsPage.byProjectType')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((key, index) => {
              const solution = solutionData[key]
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/solutions/${key}`}
                    className="block bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all group h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-alice-secondary/10 flex items-center justify-center mb-6">
                      <solution.icon className="w-7 h-7 text-alice-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alice-dark mb-2">{solution.name}</h3>
                    <p className="text-gray-600 mb-6">{solution.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-alice-secondary font-semibold">
                      {t('solutionsPage.learnMore')} <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

function Solutions() {
  return (
    <Routes>
      <Route index element={<SolutionsIndex />} />
      <Route path="gc" element={<SolutionPage solutionKey="gc" />} />
      <Route path="owners" element={<SolutionPage solutionKey="owners" />} />
      <Route path="consultants" element={<SolutionPage solutionKey="consultants" />} />
      <Route path="industrial" element={<SolutionPage solutionKey="industrial" />} />
      <Route path="infrastructure" element={<SolutionPage solutionKey="infrastructure" />} />
      <Route path="commercial" element={<SolutionPage solutionKey="commercial" />} />
    </Routes>
  )
}

export default Solutions
