import React from 'react'

import ShockAbout from '../components/Shock/ShockAbout'
import ShockServices from '../components/Shock/ShockService'
import ShockCTA from '../components/Shock/ShockBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Shock = () => {
  return (
    <div>
   
       <ServiceHeader data={serviceData.shocksAndSuspension} />
      <ShockAbout />
      <ShockServices />
      <ShockCTA />
    </div>
  )
}

export default Shock
