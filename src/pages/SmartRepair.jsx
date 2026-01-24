import React from 'react'
import SmartHeader from '../components/Smart/SmartHeader'
import SmartServices from '../components/Smart/SmartService'
import SmartAbout from '../components/Smart/SmartAbout'
import SmartCTA from '../components/Smart/SmartCTA'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const SmartRepair = () => {
  return (
    <div>
     
        <ServiceHeader data={serviceData.smartRepair} />
      <SmartAbout />
      <SmartServices />
      <SmartCTA />
    </div>
  )
}

export default SmartRepair;
