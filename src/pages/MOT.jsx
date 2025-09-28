import React from 'react'
import HeroSection from '../components/Mot/HeroSection'
import Services from '../components/Mot/MotService'
import CommonIssues from '../components/Mot/CommonIssue'
import WhyChoose from '../components/Mot/WhyChoose'
import ReadyToBook from '../components/Mot/Book'

const MOT = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <CommonIssues />
      <WhyChoose />
      <ReadyToBook />
    </div>
  )
}

export default MOT