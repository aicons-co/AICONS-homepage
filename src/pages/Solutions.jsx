import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2, Users, Briefcase, Factory, Train, Store, ArrowRight, Check,
  AlertTriangle, TrendingUp, Package, Truck, Clock, Shield, PlayCircle,
  GitBranch, Layers, FileCheck, Zap, Layout, Paintbrush, Calendar, Building,
  Target, Lightbulb, ChevronRight
} from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

// Icon mapping for dynamic icon rendering
const iconMap = {
  Package, Truck, Clock, Shield, PlayCircle, GitBranch, TrendingUp, Users,
  Layers, FileCheck, Zap, Layout, Paintbrush, Calendar, Building
}

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
      metrics: t('solutionsPage.gc.metrics'),
      useCases: t('solutionsPage.gc.useCases'),
      workflow: t('solutionsPage.gc.workflow'),
      recommendedProducts: t('solutionsPage.gc.recommendedProducts'),
      relatedCaseStudy: t('solutionsPage.gc.relatedCaseStudy'),
    },
    owners: {
      name: t('solutionsPage.owners.name'),
      icon: Briefcase,
      tagline: t('solutionsPage.owners.tagline'),
      description: t('solutionsPage.owners.description'),
      challenges: t('solutionsPage.owners.challenges'),
      solutions: t('solutionsPage.owners.solutions'),
      metrics: t('solutionsPage.owners.metrics'),
      useCases: t('solutionsPage.owners.useCases'),
      workflow: t('solutionsPage.owners.workflow'),
      recommendedProducts: t('solutionsPage.owners.recommendedProducts'),
      relatedCaseStudy: t('solutionsPage.owners.relatedCaseStudy'),
    },
    consultants: {
      name: t('solutionsPage.consultants.name'),
      icon: Users,
      tagline: t('solutionsPage.consultants.tagline'),
      description: t('solutionsPage.consultants.description'),
      challenges: t('solutionsPage.consultants.challenges'),
      solutions: t('solutionsPage.consultants.solutions'),
      metrics: t('solutionsPage.consultants.metrics'),
      useCases: t('solutionsPage.consultants.useCases'),
      workflow: t('solutionsPage.consultants.workflow'),
      recommendedProducts: t('solutionsPage.consultants.recommendedProducts'),
      relatedCaseStudy: t('solutionsPage.consultants.relatedCaseStudy'),
    },
    industrial: {
      name: t('solutionsPage.industrial.name'),
      icon: Factory,
      tagline: t('solutionsPage.industrial.tagline'),
      description: t('solutionsPage.industrial.description'),
      features: t('solutionsPage.industrial.features'),
      metrics: t('solutionsPage.industrial.metrics'),
      projectExamples: t('solutionsPage.industrial.projectExamples'),
      uniqueCapabilities: t('solutionsPage.industrial.uniqueCapabilities'),
      integratedProducts: t('solutionsPage.industrial.integratedProducts'),
      relatedCaseStudy: t('solutionsPage.industrial.relatedCaseStudy'),
    },
    infrastructure: {
      name: t('solutionsPage.infrastructure.name'),
      icon: Train,
      tagline: t('solutionsPage.infrastructure.tagline'),
      description: t('solutionsPage.infrastructure.description'),
      features: t('solutionsPage.infrastructure.features'),
      metrics: t('solutionsPage.infrastructure.metrics'),
      projectExamples: t('solutionsPage.infrastructure.projectExamples'),
      uniqueCapabilities: t('solutionsPage.infrastructure.uniqueCapabilities'),
      integratedProducts: t('solutionsPage.infrastructure.integratedProducts'),
      relatedCaseStudy: t('solutionsPage.infrastructure.relatedCaseStudy'),
    },
    commercial: {
      name: t('solutionsPage.commercial.name'),
      icon: Store,
      tagline: t('solutionsPage.commercial.tagline'),
      description: t('solutionsPage.commercial.description'),
      features: t('solutionsPage.commercial.features'),
      metrics: t('solutionsPage.commercial.metrics'),
      projectExamples: t('solutionsPage.commercial.projectExamples'),
      uniqueCapabilities: t('solutionsPage.commercial.uniqueCapabilities'),
      integratedProducts: t('solutionsPage.commercial.integratedProducts'),
      relatedCaseStudy: t('solutionsPage.commercial.relatedCaseStudy'),
    },
  }

  const productNames = {
    plan: t('products.plan.name'),
    optimize: t('products.optimize.name'),
    model: t('products.model.name'),
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

      {/* Metrics Section */}
      {solution.metrics && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-alice-dark text-center mb-10">{t('solutionsPage.keyMetrics')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(solution.metrics).map(([key, metric], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold text-alice-primary mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content - Stakeholder Type */}
      {isStakeholder ? (
        <>
          {/* Challenges & Solutions */}
          <section className="py-20 bg-white">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Challenges */}
                <div>
                  <h2 className="text-2xl font-bold text-alice-dark mb-8 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                    {t('solutionsPage.yourChallenges')}
                  </h2>
                  <div className="space-y-4">
                    {solution.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-red-50 rounded-xl p-5 border border-red-100"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                        <p className="text-gray-600 text-sm mb-2">{challenge.description}</p>
                        <div className="text-red-600 text-xs font-medium">{challenge.impact}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h2 className="text-2xl font-bold text-alice-dark mb-8 flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-green-500" />
                    {t('solutionsPage.ourSolutions')}
                  </h2>
                  <div className="space-y-4">
                    {solution.solutions.map((sol, index) => (
                      <motion.div
                        key={sol.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-green-50 rounded-xl p-5 border border-green-100"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{sol.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{sol.description}</p>
                            <div className="flex items-center gap-2 text-xs">
                              <span className="bg-alice-primary/10 text-alice-primary px-2 py-1 rounded">
                                {productNames[sol.product]}
                              </span>
                              <span className="text-green-600 font-medium">{sol.benefit}</span>
                            </div>
                          </div>
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          {solution.useCases && (
            <section className="py-20 bg-gray-50">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-4">{t('solutionsPage.useCases')}</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  {solution.name}를 위한 실제 적용 사례를 확인하세요
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {solution.useCases.map((useCase, index) => (
                    <motion.div
                      key={useCase.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-alice-primary/10 flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-alice-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-alice-dark mb-3">{useCase.title}</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-700">시나리오:</span>
                          <p className="text-gray-600 mt-1">{useCase.scenario}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-700">솔루션:</span>
                          <p className="text-gray-600 mt-1">{useCase.solution}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                          <span className="font-semibold text-green-700">결과:</span>
                          <p className="text-green-600 mt-1">{useCase.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Workflow Section */}
          {solution.workflow && (
            <section className="py-20 bg-white">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-12">{t('solutionsPage.workflow')}</h2>
                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-alice-primary/20 hidden md:block" />

                    <div className="space-y-6">
                      {solution.workflow.map((step, index) => (
                        <motion.div
                          key={step.step}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-6"
                        >
                          <div className="w-12 h-12 rounded-full bg-alice-primary text-white flex items-center justify-center font-bold flex-shrink-0 z-10">
                            {step.step}
                          </div>
                          <div className="flex-1 bg-gray-50 rounded-xl p-5 -mt-1">
                            <h3 className="font-semibold text-alice-dark mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Recommended Products */}
          {solution.recommendedProducts && (
            <section className="py-16 bg-gray-50">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-8">{t('solutionsPage.recommendedProducts')}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {solution.recommendedProducts.map((productKey) => (
                    <Link
                      key={productKey}
                      to={`/products/${productKey}`}
                      className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <span className="font-semibold text-alice-dark">{productNames[productKey]}</span>
                      <ChevronRight className="w-4 h-4 text-alice-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Features Section - Project Type */}
          <section className="py-20 bg-white">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">{t('solutionsPage.keyCapabilities')}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {solution.features.map((feature, index) => {
                  const IconComponent = iconMap[feature.icon] || Check
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6"
                    >
                      <div className="w-12 h-12 rounded-xl bg-alice-secondary/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-alice-secondary" />
                      </div>
                      <h3 className="font-semibold text-alice-dark mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Project Examples Section */}
          {solution.projectExamples && (
            <section className="py-20 bg-gray-50">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-12">{t('solutionsPage.projectExamples')}</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {solution.projectExamples.map((project, index) => (
                    <motion.div
                      key={project.type}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <h3 className="text-lg font-bold text-alice-dark mb-2">{project.type}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="space-y-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-alice-secondary flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Unique Capabilities Section */}
          {solution.uniqueCapabilities && (
            <section className="py-20 bg-white">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-12">{t('solutionsPage.uniqueCapabilities')}</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {solution.uniqueCapabilities.map((capability, index) => (
                    <motion.div
                      key={capability.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-alice-secondary/5 to-alice-primary/5 rounded-xl p-6 border border-alice-secondary/20"
                    >
                      <h3 className="font-semibold text-alice-dark mb-2">{capability.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{capability.description}</p>
                      <div className="inline-block bg-alice-secondary/10 text-alice-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {capability.benefit}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Integrated Products */}
          {solution.integratedProducts && (
            <section className="py-16 bg-gray-50">
              <div className="container-custom">
                <h2 className="text-2xl font-bold text-alice-dark text-center mb-8">{t('solutionsPage.recommendedProducts')}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  {solution.integratedProducts.map((productKey) => (
                    <Link
                      key={productKey}
                      to={`/products/${productKey}`}
                      className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <span className="font-semibold text-alice-dark">{productNames[productKey]}</span>
                      <ChevronRight className="w-4 h-4 text-alice-secondary" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
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
