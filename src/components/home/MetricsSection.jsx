import { motion } from 'framer-motion'
import { TrendingDown, Users, Truck } from 'lucide-react'

const metrics = [
  {
    icon: TrendingDown,
    value: '17%',
    label: 'Project Duration Reduction',
    description: 'Average reduction in overall project timeline',
  },
  {
    icon: Users,
    value: '14%',
    label: 'Labor Cost Savings',
    description: 'Reduced labor costs through optimization',
  },
  {
    icon: Truck,
    value: '12%',
    label: 'Equipment Cost Savings',
    description: 'More efficient equipment utilization',
  },
]

function MetricsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-alice-primary to-alice-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our customers consistently achieve measurable improvements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {metric.value}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
              <p className="text-white/70">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
