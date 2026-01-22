import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Users, Briefcase, Factory, Train, Store, ArrowRight, Check } from 'lucide-react'

const solutionPages = {
  gc: {
    name: 'General Contractors',
    icon: Building2,
    tagline: 'Optimize Your Construction Operations',
    description: 'AICONS helps general contractors deliver projects on time and under budget through AI-powered schedule optimization.',
    challenges: [
      'Complex schedule coordination',
      'Resource allocation conflicts',
      'Risk management',
      'Client reporting demands',
    ],
    solutions: [
      'Automated schedule optimization',
      'Real-time resource leveling',
      'Risk scenario modeling',
      'Visual progress reporting',
    ],
  },
  owners: {
    name: 'Owners',
    icon: Briefcase,
    tagline: 'Maximize Your Investment Value',
    description: 'AICONS gives owners visibility and control over their construction projects with data-driven insights.',
    challenges: [
      'Limited project visibility',
      'Schedule reliability concerns',
      'Cost overrun risks',
      'Stakeholder communication',
    ],
    solutions: [
      'Real-time project dashboards',
      'Schedule confidence metrics',
      'Scenario comparison tools',
      'Automated reporting',
    ],
  },
  consultants: {
    name: 'Consultants',
    icon: Users,
    tagline: 'Deliver Superior Advisory Services',
    description: 'AICONS empowers consultants to provide more accurate scheduling advice and project controls services.',
    challenges: [
      'Manual scheduling processes',
      'Limited optimization capabilities',
      'Time-consuming analysis',
      'Competitive differentiation',
    ],
    solutions: [
      'AI-powered optimization tools',
      'Rapid scenario analysis',
      'Data-driven recommendations',
      'Advanced analytics platform',
    ],
  },
  industrial: {
    name: 'Industrial Projects',
    icon: Factory,
    tagline: 'Complex Industrial Construction',
    description: 'AICONS handles the complexity of industrial construction with advanced sequencing and optimization.',
    features: [
      'Module installation sequencing',
      'Equipment coordination',
      'Shutdown planning',
      'Safety integration',
    ],
  },
  infrastructure: {
    name: 'Infrastructure Projects',
    icon: Train,
    tagline: 'Large-Scale Infrastructure',
    description: 'AICONS manages the scale and complexity of infrastructure projects across multiple work fronts.',
    features: [
      'Multi-front coordination',
      'Linear project scheduling',
      'Stakeholder management',
      'Phased delivery planning',
    ],
  },
  commercial: {
    name: 'Commercial Projects',
    icon: Store,
    tagline: 'Commercial Building Construction',
    description: 'AICONS optimizes commercial construction projects for speed to market and cost efficiency.',
    features: [
      'Fast-track scheduling',
      'Tenant coordination',
      'Finish optimization',
      'Turnover planning',
    ],
  },
}

function SolutionPage({ solutionKey }) {
  const solution = solutionPages[solutionKey]

  if (!solution) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">Solution not found</h1>
        <Link to="/solutions/gc" className="text-alice-primary hover:underline">
          View Solutions for General Contractors
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
                Request Demo
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
                  <h2 className="text-2xl font-bold text-alice-dark mb-6">Your Challenges</h2>
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
                  <h2 className="text-2xl font-bold text-alice-dark mb-6">Our Solutions</h2>
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
            <h2 className="section-title text-center mb-12">Key Capabilities</h2>
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
            Ready to Transform Your Projects?
          </h2>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-white text-alice-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

function SolutionsIndex() {
  const stakeholders = ['gc', 'owners', 'consultants']
  const projectTypes = ['industrial', 'infrastructure', 'commercial']

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solutions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AICONS provides tailored solutions for every stakeholder and project type
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-alice-dark mb-8">By Stakeholder</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stakeholders.map((key, index) => {
              const solution = solutionPages[key]
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
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <h2 className="text-2xl font-bold text-alice-dark mb-8">By Project Type</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((key, index) => {
              const solution = solutionPages[key]
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
                      Learn More <ArrowRight className="w-4 h-4" />
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
