import { motion } from 'framer-motion'
import useTranslation from '../../hooks/useTranslation'

const clients = [
  'Cranborne',
  'Align JV',
  'HS2',
  'Accenture',
  'Turner',
  'Skanska',
  'AECOM',
  'Parsons',
  'Kiewit',
  'PCL',
  'Mortenson',
  'Clark',
  'Fluor',
  'Jacobs',
]

function TrustSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8"
        >
          {t('trust.title')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-gray-400 font-semibold text-lg hover:text-alice-primary transition-colors"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustSection
