import { motion } from 'framer-motion'

const clients = [
  { name: 'Cranborne', color: '#1E40AF' },
  { name: 'Align JV', color: '#7C3AED' },
  { name: 'HS2', color: '#059669' },
  { name: 'Accenture', color: '#A855F7' },
  { name: 'Turner', color: '#0891B2' },
  { name: 'Skanska', color: '#DC2626' },
]

function LogoSlider() {
  // Duplicate the array multiple times for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm uppercase tracking-wider font-medium"
        >
          Trusted by industry leaders worldwide
        </motion.p>
      </div>

      {/* Logo slider container - reverse direction */}
      <div className="relative mt-8">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - reverse */}
        <motion.div
          className="flex"
          animate={{
            x: ['-75%', '-25%'],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {[...duplicatedClients].reverse().map((client, index) => (
            <div
              key={`${client.name}-reverse-${index}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <div className="group flex items-center justify-center h-16">
                <div
                  className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white shadow-sm border border-gray-100
                             hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-700 font-semibold whitespace-nowrap group-hover:text-gray-900 transition-colors">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container-custom mt-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '500+', label: 'Projects Optimized' },
            { value: '50+', label: 'Enterprise Clients' },
            { value: '30+', label: 'Countries' },
            { value: '$2B+', label: 'Project Value Optimized' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-3xl font-bold text-alice-dark">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default LogoSlider
