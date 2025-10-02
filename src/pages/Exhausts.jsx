import React from 'react'
import ExhaustsHero from '../components/Exhaust/ExhaustHeader'
import ExhaustsAbout from '../components/Exhaust/ExhaustAbout'
import ExhaustsServices from '../components/Exhaust/ExhaustService'
import ExhaustsBook from '../components/Exhaust/ExhaustBook'

const Exhausts = () => {
  return (
    <div>
      <ExhaustsHero />
      <ExhaustsAbout />
      <ExhaustsServices />
      <ExhaustsBook />
    </div>
  )
}

export default Exhausts
