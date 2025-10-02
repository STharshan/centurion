import React from 'react'
import ClutchHeader from '../components/Clutch/ClutchHero'
import ClutchAbout from '../components/Clutch/ClutchAbout'
import ClutchServices from '../components/Clutch/ClutchService'
import ClutchyCTA from '../components/Clutch/ClutchBook'

const Clutch = () => {
  return (
    <div>
      <ClutchHeader />
      <ClutchAbout />
      <ClutchServices />
      <ClutchyCTA />
    </div>
  )
}

export default Clutch
