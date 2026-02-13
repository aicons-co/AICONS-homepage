import { motion } from 'framer-motion'
import useTranslation from '../hooks/useTranslation'

function Company() {
  const { t } = useTranslation()

  const values = [
    { title: t('companyPage.values.innovation.title'), description: t('companyPage.values.innovation.description') },
    { title: t('companyPage.values.customerSuccess.title'), description: t('companyPage.values.customerSuccess.description') },
    { title: t('companyPage.values.integrity.title'), description: t('companyPage.values.integrity.description') },
    { title: t('companyPage.values.excellence.title'), description: t('companyPage.values.excellence.description') },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-aicons-dark to-aicons-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('companyPage.title')}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('companyPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">{t('companyPage.ourStory')}</h2>
              <div className="space-y-4 text-gray-600">
                <p>{t('companyPage.storyP1')}</p>
                <p>{t('companyPage.storyP2')}</p>
                <p>{t('companyPage.storyP3')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-aicons-primary/10 to-aicons-secondary/10 rounded-2xl aspect-video flex items-center justify-center"
            >
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-aicons-primary mb-2">2025</p>
                <p className="text-gray-600">{t('companyPage.foundedIn')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t('companyPage.ourValues')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-aicons-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Company
