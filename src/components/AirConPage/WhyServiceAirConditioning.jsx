"use client";

import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const WhyServiceAirConditioning = () => {
  return (
    <section
      className="py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-snug text-[color:var(--aircon-heading)]">
              Why Service Your Air <br /> Conditioning?
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-[color:var(--aircon-muted)]">
              Routine servicing not only improves comfort but also extends system life and prevents expensive repairs.
            </p>

            {/* Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Enhanced cabin comfort",
                "Cleaner, healthier air quality",
                "Prolonged system reliability",
                "Avoids unexpected breakdowns",
                "Consistent performance year-round",
                "Reduced strain on engine & fuel consumption",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-[color:var(--aircon-heading)]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Signs Box */}
            <div
              className="rounded-xl p-8 shadow-sm transition-colors duration-300 bg-gray-100"
  
            >
              <h3 className="text-2xl font-bold mb-4 text-[color:var(--aircon-heading)]">
                Signs You Need Air-Con Service
              </h3>
              <ul className="space-y-4 text-[color:var(--aircon-muted)]">
                {[
                  "Weak or warm air from vents",
                  "Musty or unusual odours",
                  "Strange noises when AC is running",
                  "Excessive condensation or fogging",
                  "System not serviced for 2+ years",
                ].map((sign, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-red-600" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

          {/* End Right Column */}
            {/* GAS TYPES */}
            <h3 className="text-2xl font-bold mb-4 mt-10 text-center text-[color:var(--aircon-heading)]">
              Signs You Need Air-Con Service
            </h3>
            <p className="text-lg mb-8 max-w-2xl text-[color:var(--aircon-muted)]">
              At Centurion, we use only high-quality refrigerants to suit your vehicle.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "R1234YF",
                  desc: "The latest eco-friendly refrigerant, designed to cool efficiently while reducing environmental impact.",
                },
                {
                  title: "R134A",
                  desc: "A proven and reliable refrigerant still widely used in many vehicles.",
                },
              ].map((gas, i) => (
                <div
                  key={i}
                  className="rounded-lg p-5 shadow-sm transition-colors duration-300 bg-gray-100"
                >
                  <h4 className="text-lg font-bold mb-2 text-[color:var(--aircon-heading)]">
                    {gas.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[color:var(--aircon-muted)]">
                    {gas.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyServiceAirConditioning;
