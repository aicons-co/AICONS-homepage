import { motion } from 'framer-motion'
import { Cpu, Shield, Zap, GitMerge } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Automate Optimization',
    description: 'Simulate millions of possibilities to find the optimal schedule for your project.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Identify and Mitigate Risks',
    description: 'Proactively identify potential risks and develop mitigation strategies.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Recover or Accelerate',
    description: 'Find ways to recover delayed projects or accelerate on-track ones.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GitMerge,
    title: 'Integrate Project Controls',
    description: 'Seamlessly integrate with your existing project management tools.',
    color: 'from-green-500 to-teal-500',
  },
]

function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            Why Choose <span className="text-alice-primary">AICONS</span>?
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our AI-powered platform transforms how construction projects are planned and executed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-alice-primary/30 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-alice-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
