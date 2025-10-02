import React from 'react'
import ShockHeader from '../components/Shock/ShockHeader'
import ShockAbout from '../components/Shock/ShockAbout'
import ShockServices from '../components/Shock/ShockService'
import ShockCTA from '../components/Shock/ShockBook'

const Shock = () => {
  return (
    <div>
      <ShockHeader />
      <ShockAbout />
      <ShockServices />
      <ShockCTA />
    </div>
  )
}

export default Shock
