import React from 'react'
import BrakeHeader from '../components/Brake/BrakeHeader'
import BrakeAbout from '../components/Brake/BrakeAbout'
import BrakeServices from '../components/Brake/BrakeService'
import BrakeCTA from '../components/Brake/BrakeBook'

const Brake = () => {
  return (
    <div>
      <BrakeHeader />
      <BrakeAbout />
      <BrakeServices />
      <BrakeCTA />
    </div>
  )
}

export default Brake
