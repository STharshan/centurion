import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import FeaturedServices from '../components/Home/FeaturedServices'
import Testimonials from '../components/Home/Testimonials'
import Findmore from '../components/Home/Findmore'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Findmore />
      <WhyChooseUs />
      <FeaturedServices />
      <Testimonials />
    </div>
  )
}

export default Home
