import { motion } from 'framer-motion'
import { MapPin, Linkedin, Twitter, Globe } from 'lucide-react'

const team = [
  { name: 'René Morkos', role: 'Founder & CEO', bio: 'PhD in AI and Construction Management from Stanford' },
  { name: 'Leadership Team', role: 'Executive Team', bio: 'Experienced leaders from construction and technology' },
]

const values = [
  { title: 'Innovation', description: 'Pushing the boundaries of what\'s possible in construction technology' },
  { title: 'Customer Success', description: 'Your success is our success - we\'re partners in your journey' },
  { title: 'Integrity', description: 'Honest, transparent, and trustworthy in everything we do' },
  { title: 'Excellence', description: 'Delivering the highest quality solutions and support' },
]

const offices = [
  { city: 'San Francisco', country: 'USA', type: 'Headquarters' },
  { city: 'London', country: 'UK', type: 'Europe Office' },
  { city: 'Sydney', country: 'Australia', type: 'APAC Office' },
]

function Company() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About AICONS</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We&apos;re on a mission to transform how construction projects are planned and executed through the power of AI.
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
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AICONS Technologies was founded with a simple but ambitious goal: to bring the power of
                  artificial intelligence to construction scheduling and optimization.
                </p>
                <p>
                  Construction is one of the largest industries in the world, yet it has been slow to adopt
                  new technologies. We believe that AI can transform how projects are planned, scheduled,
                  and executed.
                </p>
                <p>
                  Today, AICONS is trusted by leading construction companies around the world to optimize
                  their projects, reduce costs, and deliver on time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-alice-primary/10 to-alice-secondary/10 rounded-2xl aspect-video flex items-center justify-center"
            >
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-alice-primary mb-2">2015</p>
                <p className="text-gray-600">Founded in Silicon Valley</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Values</h2>
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
                <h3 className="text-xl font-bold text-alice-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="careers" className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-4">Leadership</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our team brings together expertise in AI, construction management, and enterprise software.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-alice-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-alice-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-alice-dark">{member.name}</h3>
                <p className="text-alice-primary mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Interested in joining our team?</p>
            <button className="btn-primary">
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Global Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-alice-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-alice-primary" />
                </div>
                <h3 className="text-xl font-bold text-alice-dark">{office.city}</h3>
                <p className="text-gray-600">{office.country}</p>
                <p className="text-sm text-alice-primary mt-2">{office.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mb-4">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-8">
              Have questions? We&apos;d love to hear from you.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-alice-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-alice-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-alice-primary transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company
