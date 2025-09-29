import React from "react";

// Sections from components/HomePage
import AirConHero from "../components/AirConPage/AirConHero";
import AirConServices from "../components/AirConPage/AirConServices";
import WhyServiceAirConditioning from "../components/AirConPage/WhyServiceAirConditioning";
import EmergencyCTA from "../components/AirConPage/EmergencyCTA";

export default function Aircon() {
    return (
        <div>
            {/* Hero */}
            <section >
                <AirConHero />
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
