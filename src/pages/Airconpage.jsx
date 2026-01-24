import React from "react";

// Sections from components/HomePage

import AirConServices from "../components/AirConPage/AirConServices";
import WhyServiceAirConditioning from "../components/AirConPage/WhyServiceAirConditioning";
import EmergencyCTA from "../components/AirConPage/EmergencyCTA";
import ServiceHeader from "../Common/hero";
import { serviceData } from "../Data/data";
export default function Aircon() {
    return (
        <div>
            {/* Hero */}
            <section >
              
                 <ServiceHeader data={serviceData.airCon} />
            </section>
            <section >
                <AirConServices />
            </section>
            <section >
                <WhyServiceAirConditioning />
            </section>
            <section >
                <EmergencyCTA />
            </section>
        </div>
    );
}
