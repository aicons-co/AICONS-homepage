import { motion } from 'framer-motion'
import { FileText, Video, BookOpen, Download, ArrowRight, Play } from 'lucide-react'

const resources = {
  caseStudies: [
    {
      title: 'Align JV - HS2 High Speed Rail',
      description: 'How Align JV reduced project duration by 17% using AICONS optimization.',
      type: 'Case Study',
      image: null,
    },
    {
      title: 'Data Center Construction',
      description: 'Optimizing complex MEP coordination in a large-scale data center project.',
      type: 'Case Study',
      image: null,
    },
    {
      title: 'Industrial Facility Brazil',
      description: 'Reta Engenharia saved millions in labor costs with AI-powered scheduling.',
      type: 'Case Study',
      image: null,
    },
  ],
  webinars: [
    {
      title: 'Introduction to AI-Powered Scheduling',
      description: 'Learn how AI is transforming construction project scheduling.',
      duration: '45 min',
    },
    {
      title: 'Optimizing Resource Allocation',
      description: 'Best practices for using AICONS to optimize resource leveling.',
      duration: '60 min',
    },
    {
      title: 'BIM to Schedule Automation',
      description: 'Generating schedules directly from your BIM models.',
      duration: '30 min',
    },
  ],
  whitepapers: [
    {
      title: 'The Future of Construction Scheduling',
      description: 'A comprehensive look at how AI is reshaping project controls.',
      pages: '24 pages',
    },
    {
      title: 'Measuring Schedule Optimization ROI',
      description: 'Quantifying the benefits of AI-powered schedule optimization.',
      pages: '18 pages',
    },
  ],
}

function Resources() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-alice-dark to-alice-navy">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore case studies, webinars, and whitepapers to learn more about AI-powered construction scheduling
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video bg-gradient-to-br from-alice-primary/20 to-alice-secondary/20" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-alice-primary uppercase tracking-wider">
                    {study.type}
                  </span>
                  <h3 className="text-xl font-bold text-alice-dark mt-2 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <button className="inline-flex items-center gap-2 text-alice-primary font-semibold group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars */}
      <section id="webinars" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">Webinars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-alice-dark rounded-xl mb-4 flex items-center justify-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-alice-primary/20 flex items-center justify-center group-hover:bg-alice-primary/40 transition-colors">
                    <Play className="w-8 h-8 text-alice-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-alice-dark mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-3">{webinar.description}</p>
                <span className="text-sm text-alice-primary font-medium">{webinar.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section id="blog" className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-alice-primary" />
            <h2 className="text-3xl font-bold text-alice-dark">Whitepapers</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.whitepapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-20 h-28 bg-alice-primary/10 rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-alice-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-alice-dark mb-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-3">{paper.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{paper.pages}</span>
                    <button className="text-alice-primary font-semibold hover:underline">
                      Download PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-alice-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest resources and industry insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-alice-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Resources
