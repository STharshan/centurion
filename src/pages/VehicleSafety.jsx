import React from 'react'

import VehicleSafetyAbout from '../components/Vehicle/VehicleAbout'
import VehicleCTA from '../components/Vehicle/VehicleBook'
import VehicleServices from '../components/Vehicle/VehicleService'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const VehicleSafety = () => {
  return (
    <div>
     
      <ServiceHeader data={serviceData.safetyAssessment} />
      <VehicleSafetyAbout />
      <VehicleServices />
      <VehicleCTA />
    </div>
  )
}

export default VehicleSafety
