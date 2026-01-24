import React from 'react'

import OEMAbout from '../components/OME/OMEAbout'
import OMEServices from '../components/OME/OMEService'
import OMECTA from '../components/OME/OMECTA'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const OEM = () => {
  return (
    <div>
     
      <ServiceHeader data={serviceData.oemDiagnostics} />
      <OEMAbout />
      <OMEServices />
      <OMECTA />
    </div>
  )
}

export default OEM
