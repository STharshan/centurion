import React from 'react'

import BrakeAbout from '../components/Brake/BrakeAbout'
import BrakeServices from '../components/Brake/BrakeService'
import BrakeCTA from '../components/Brake/BrakeBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Brake = () => {
  return (
    <div>
     <ServiceHeader data={serviceData.brakes} />
      <BrakeAbout />
      <BrakeServices />
      <BrakeCTA />
    </div>
  )
}

export default Brake
