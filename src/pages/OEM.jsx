import React from 'react'
import OMEHeader from '../components/OME/OMEHeader'
import OEMAbout from '../components/OME/OMEAbout'
import OMEServices from '../components/OME/OMEService'
import OMECTA from '../components/OME/OMECTA'

const OEM = () => {
  return (
    <div>
      <OMEHeader />
      <OEMAbout />
      <OMEServices />
      <OMECTA />
    </div>
  )
}

export default OEM
