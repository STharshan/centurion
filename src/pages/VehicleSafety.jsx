import React from 'react'
import VehicleHeader from '../components/Vehicle/VehicleHero'
import VehicleSafetyAbout from '../components/Vehicle/VehicleAbout'
import VehicleCTA from '../components/Vehicle/VehicleBook'
import VehicleServices from '../components/Vehicle/VehicleService'

const VehicleSafety = () => {
  return (
    <div>
      <VehicleHeader />
      <VehicleSafetyAbout />
      <VehicleServices />
      <VehicleCTA />
    </div>
  )
}

export default VehicleSafety
