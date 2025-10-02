import React from 'react'
import SmartHeader from '../components/Smart/SmartHeader'
import SmartServices from '../components/Smart/SmartService'
import SmartAbout from '../components/Smart/SmartAbout'
import SmartCTA from '../components/Smart/SmartCTA'

const SmartRepair = () => {
  return (
    <div>
      <SmartHeader />
      <SmartAbout />
      <SmartServices />
      <SmartCTA />
    </div>
  )
}

export default SmartRepair;
