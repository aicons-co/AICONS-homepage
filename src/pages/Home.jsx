import HeroSection from '../components/home/HeroSection'
import LogoSlider from '../components/home/LogoSlider'
import FeaturesSection from '../components/home/FeaturesSection'
import ProductsSection from '../components/home/ProductsSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import MetricsSection from '../components/home/MetricsSection'
import CTASection from '../components/home/CTASection'

function Home() {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <FeaturesSection />
      <ProductsSection />
      <TestimonialsSection />
      <MetricsSection />
      <CTASection />
    </div>
  )
}

export default Home
