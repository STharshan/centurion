import React from 'react'
import TyreHeader from '../components/Tyre/TyreHeader'
import TyreWhyChooseUs from '../components/Tyre/TyreWhyChoose'
import TyreAbout from '../components/Tyre/TyreAbout'
import TyreServices from '../components/Tyre/TyreService'
import TyreEnd from '../components/Tyre/TyreEnd'
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
const Tyre = () => {
  return (
    <div>
      
         <ServiceHeader data={serviceData.tyres} />
      <TyreWhyChooseUs />
      <TyreAbout />
      <TyreServices />
      <TyreEnd />
    </div>
  )
}

export default Tyre
