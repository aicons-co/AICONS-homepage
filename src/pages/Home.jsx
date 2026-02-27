import HeroSection from '../components/home/HeroSection'
import LogoSlider from '../components/home/LogoSlider'
import FeaturesSection from '../components/home/FeaturesSection'
import ProductsSection from '../components/home/ProductsSection'
import SolutionsSection from '../components/home/SolutionsSection'
import MetricsSection from '../components/home/MetricsSection'
import CTASection from '../components/home/CTASection'

function Home() {
  return (
    <div>
      <HeroSection />
      <LogoSlider />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      {/* <MetricsSection /> */}
      {/* <CTASection /> */}
    </div>
  )
}

export default Home
