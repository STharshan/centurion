import React from 'react'
import TimingHeader from '../components/Timing/TimingHero'
import TimingBeltAbout from '../components/Timing/TimingAbout'
import TimingServices from '../components/Timing/TimingService'
import TimingCTA from '../components/Timing/TimingCTA'

const TimingBelt = () => {
  return (
    <div>
      <TimingHeader />
      <TimingBeltAbout />
      <TimingServices />
      <TimingCTA />
    </div>
  )
}

export default TimingBelt
