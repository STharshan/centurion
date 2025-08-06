import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import AboutSection from '../components/About/AboutSection'
import MeetTheTeam from '../components/About/MeetTheTeam'
import GarageDifference from '../components/About/GarageDifference'
import ServiceCTA from '../components/About/ServiceCTA'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutSection />
      {/* <MeetTheTeam /> */}
      <GarageDifference />
      {/* <ServiceCTA /> */}
      
    </div>
  )
}

export default About