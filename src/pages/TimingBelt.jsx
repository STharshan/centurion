import React from 'react'

import TimingBeltAbout from '../components/Timing/TimingAbout'
import TimingServices from '../components/Timing/TimingService'
import TimingCTA from '../components/Timing/TimingCTA'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const TimingBelt = () => {
  return (
    <div>
      
        <ServiceHeader data={serviceData.timingBelt} />
      <TimingBeltAbout />
      <TimingServices />
      <TimingCTA />
    </div>
  )
}

export default TimingBelt
