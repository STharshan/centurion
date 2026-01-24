import React from 'react'

import BatteryAbout from '../components/Battery/BatteryAbout'
import BatteryServices from '../components/Battery/BatteryService'
import BatteryCTA from '../components/Battery/BatteryBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Battery = () => {
  return (
    <div>
     
      <ServiceHeader data={serviceData.battery} />
      <BatteryAbout />
      <BatteryServices />
      <BatteryCTA />
    </div>
  )
}

export default Battery
