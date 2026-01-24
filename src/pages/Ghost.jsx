import React from 'react'

import GhostAbout from '../components/Ghost/GhostAbout'
import GhostServices from '../components/Ghost/GhostService'
import GhostBook from '../components/Ghost/GhostBook'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Ghost = () => {
  return (
    <div>
   
        <ServiceHeader data={serviceData.ghostImmobiliser} />
      <GhostAbout />
      <GhostServices />
      <GhostBook />
    </div>
  )
}

export default Ghost
