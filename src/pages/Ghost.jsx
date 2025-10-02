import React from 'react'
import GhostHero from '../components/Ghost/GhostHeader'
import GhostAbout from '../components/Ghost/GhostAbout'
import GhostServices from '../components/Ghost/GhostService'
import GhostBook from '../components/Ghost/GhostBook'

const Ghost = () => {
  return (
    <div>
      <GhostHero />
      <GhostAbout />
      <GhostServices />
      <GhostBook />
    </div>
  )
}

export default Ghost
