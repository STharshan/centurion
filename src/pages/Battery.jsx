import React from 'react'
import BatteryHeader from '../components/Battery/BatteryHero'
import BatteryAbout from '../components/Battery/BatteryAbout'
import BatteryServices from '../components/Battery/BatteryService'
import BatteryCTA from '../components/Battery/BatteryBook'

const Battery = () => {
  return (
    <div>
      <BatteryHeader />
      <BatteryAbout />
      <BatteryServices />
      <BatteryCTA />
    </div>
  )
}

export default Battery
