/* eslint-disable no-unused-vars */
import { Database, Box, ClipboardCheck, RefreshCw, ArrowRight, Rocket, Handshake, ShieldCheck, Trophy } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function Company() {
  const { t } = useTranslation()

  const problems = [
    { key: 'isolation', icon: '🔒' },
    { key: 'manual', icon: '✋' },
    { key: 'change', icon: '🔄' },
  ]

  const solutionItems = [
    { key: 'parsing', Icon: Database },
    { key: 'bim', Icon: Box },
    { key: 'execution', Icon: ClipboardCheck },
    { key: 'revision', Icon: RefreshCw },
  ]

  const stages = ['stage1', 'stage2', 'stage3', 'stage4', 'stage5']

  const phases = ['phase1', 'phase2', 'phase3']

  const values = [
    { key: 'innovation', Icon: Rocket },
    { key: 'customerSuccess', Icon: Handshake },
    { key: 'integrity', Icon: ShieldCheck },
    { key: 'excellence', Icon: Trophy },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-neutral-950 to-neutral-900">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('companyPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('companyPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div
              className="lg:w-3/5"
            >
              <h2 className="text-3xl font-bold text-neutral-950 mb-8">{t('companyPage.vision.title')}</h2>
              <p className="text-xl font-semibold text-primary-500 mb-4">{t('companyPage.vision.description')}</p>
              <p className="text-neutral-700 leading-[170%]">{t('companyPage.vision.detail')}</p>
            </div>
            <div
              className="lg:w-2/5"
            >
              <img
                src="/images/vision.png"
                alt="AICONS 미래 비전"
                className="w-full max-h-[32rem] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className='mb-8'>
            <h2 className="text-3xl font-bold text-neutral-950">{t('companyPage.ourValues')}</h2>
            {/* <p className="text-lg text-gray-500">{t('companyPage.valuesSubtitle')}</p> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.key}
                className="rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="bg-neutral-950 flex items-center justify-center py-16">
                  <value.Icon className="w-20 h-20 text-white" strokeWidth={1.2} />
                </div>
                <div className="bg-white p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-neutral-950 mb-3">{t(`companyPage.values.${value.key}.title`)}</h3>
                  <p className="text-neutral-700">{t(`companyPage.values.${value.key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      {/* <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-950 mb-4">{t('companyPage.problem.title')}</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">{t('companyPage.problem.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">{t(`companyPage.problem.items.${item.key}.title`)}</h3>
                <p className="text-sm text-gray-600">{t(`companyPage.problem.items.${item.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Solution - AISIMS */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl font-bold text-neutral-950 mb-2">{t('companyPage.solution.title')}</h2>
            <p className="text-lg text-primary-500 font-semibold mb-4">{t('companyPage.solution.subtitle')}</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 max-w-3xl mx-auto mb-12"
          >
            {t('companyPage.solution.tagline')}
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl p-6 border border-primary-500/10"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">{t(`companyPage.solution.items.${item.key}.title`)}</h3>
                <p className="text-sm text-gray-600">{t(`companyPage.solution.items.${item.key}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pipeline */}
      {/* <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-neutral-950 mb-4">{t('companyPage.pipeline.title')}</h2>
            <p className="text-gray-500">{t('companyPage.pipeline.subtitle')}</p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {stages.map((stage, index) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex-1 relative"
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-white bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">{index + 1}</span>
                    <h3 className="text-sm font-bold text-neutral-950">{t(`companyPage.pipeline.stages.${stage}.title`)}</h3>
                  </div>
                  <p className="text-xs text-gray-500">{t(`companyPage.pipeline.stages.${stage}.description`)}</p>
                </div>
                {index < stages.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-primary-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Roadmap */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-neutral-950 text-center mb-12"
          >
            {t('companyPage.roadmap.title')}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100"
              >
                <span className="text-sm font-bold text-primary-500">{t(`companyPage.roadmap.phases.${phase}.period`)}</span>
                <h3 className="text-xl font-bold text-neutral-950 mt-1 mb-3">{t(`companyPage.roadmap.phases.${phase}.title`)}</h3>
                <p className="text-sm text-gray-600">{t(`companyPage.roadmap.phases.${phase}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  )
}

export default Company
