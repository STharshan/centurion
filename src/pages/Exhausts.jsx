import React from 'react'

import ExhaustsAbout from '../components/Exhaust/ExhaustAbout'
import ExhaustsServices from '../components/Exhaust/ExhaustService'
import ExhaustsBook from '../components/Exhaust/ExhaustBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Exhausts = () => {
  return (
    <div>
    
      <ServiceHeader data={serviceData.exhausts} />
      <ExhaustsAbout />
      <ExhaustsServices />
      <ExhaustsBook />
    </div>
  )
}

export default Exhausts
