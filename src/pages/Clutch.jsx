import React from 'react'

import ClutchAbout from '../components/Clutch/ClutchAbout'
import ClutchServices from '../components/Clutch/ClutchService'
import ClutchyCTA from '../components/Clutch/ClutchBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Clutch = () => {
  return (
    <div>
      
      <ServiceHeader data={serviceData.clutch} />
      <ClutchAbout />
      <ClutchServices />
      <ClutchyCTA />
    </div>
  )
}

export default Clutch
