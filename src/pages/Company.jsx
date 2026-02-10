import { motion } from 'framer-motion'
import { MapPin, Linkedin, Twitter, Globe } from 'lucide-react'
import useTranslation from '../hooks/useTranslation'

function Company() {
  const { t } = useTranslation()

  const team = [
    {
      name: t('companyPage.team.rene.name'),
      role: t('companyPage.team.rene.role'),
      bio: t('companyPage.team.rene.bio')
    },
    {
      name: t('companyPage.team.leadership.name'),
      role: t('companyPage.team.leadership.role'),
      bio: t('companyPage.team.leadership.bio')
    },
  ]

  const values = [
    { title: t('companyPage.values.innovation.title'), description: t('companyPage.values.innovation.description') },
    { title: t('companyPage.values.customerSuccess.title'), description: t('companyPage.values.customerSuccess.description') },
    { title: t('companyPage.values.integrity.title'), description: t('companyPage.values.integrity.description') },
    { title: t('companyPage.values.excellence.title'), description: t('companyPage.values.excellence.description') },
  ]

  const offices = [
    { city: t('companyPage.offices.sanFrancisco.city'), country: t('companyPage.offices.sanFrancisco.country'), type: t('companyPage.offices.sanFrancisco.type') },
    { city: t('companyPage.offices.london.city'), country: t('companyPage.offices.london.country'), type: t('companyPage.offices.london.type') },
    { city: t('companyPage.offices.sydney.city'), country: t('companyPage.offices.sydney.country'), type: t('companyPage.offices.sydney.type') },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
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
              className="bg-gradient-to-br from-alice-primary/10 to-alice-secondary/10 rounded-2xl aspect-video flex items-center justify-center"
            >
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-alice-primary mb-2">2025</p>
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
          <h2 className="section-title text-center mb-4">{t('companyPage.leadership')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('companyPage.leadershipSubtitle')}
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
            <p className="text-gray-600 mb-4">{t('companyPage.interestedInJoining')}</p>
            <button className="btn-primary">
              {t('companyPage.viewOpenPositions')}
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t('companyPage.globalOffices')}</h2>
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
            <h2 className="section-title text-center mb-4">{t('companyPage.getInTouch')}</h2>
            <p className="text-center text-gray-600 mb-8">
              {t('companyPage.getInTouchSubtitle')}
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('companyPage.form.firstName')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('companyPage.form.lastName')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('companyPage.form.email')}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('companyPage.form.company')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t('companyPage.form.message')}</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-alice-primary focus:ring-2 focus:ring-alice-primary/20 outline-none transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                {t('companyPage.form.sendMessage')}
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
