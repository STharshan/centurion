import React from "react";
import { CheckCircle, CircleDot, Radar, Settings } from "lucide-react";

const serviceCards = [
  {
    title: "Tyre Fitting",
    description: "Professional tyre supply and fitting service",
    icon: CircleDot,
    features: [
      "Premium brand tyres",
      "Affordable budget options",
      "Run-flat tyre fitting",
      "Tyre pressure monitoring",
      "Wheel balancing",
    ],
  },
  {
    title: "Wheel Alignment",
    description: "High tech precision wheel alignment service",
    icon: Radar,
    features: [
      "4-wheel laser alignment",
      "Toe, camber, and caster adjustment",
      "Thrust angle correction",
      "Steering wheel centering",
      "Alignment reports provided",
    ],
  },
  {
    title: "Wheel Services",
    description: "Complete wheel repair and maintenance",
    icon: Settings,
    features: [
      "Alloy wheel refurbishment",
      "Wheel rim repair",
      "Valve replacement",
      "Professional wheel cleaning",
      "Custom wheel fitting",
    ],
  },
];

const alignmentSections = [
  {
    title: "High-Tech Alignment Equipment",
    color: "text-red-700",
    items: [
      "3D laser alignment system",
      "Computer-controlled measurements",
      "Real-time adjustment monitoring",
      "Precision angle calculations",
      "Digital Reporting System (before & after comparisons)",
    ],
  },
  {
    title: "Alignment Parameters",
    color: "text-red-600",
    items: [
      "Toe angle adjustment",
      "Camber angle correction",
      "Caster angle setting",
      "Thrust angle alignment",
      "Steering wheel positioning",
      "Calibrated to manufacturer specifications",
    ],
  },
];

export default function TyreServices() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {serviceCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
  flex flex-col items-center text-center"
            >

              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-600 rounded-full">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-center font-semibold text-lg text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-center text-sm text-gray-500 mb-4">
                {card.description}
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mt-auto">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* High-Tech Alignment Equipment Section */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-300 rounded-xl shadow-md p-6 md:p-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          High-Tech Alignment Equipment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm md:text-base">
          {alignmentSections.map((section, idx) => (
            <div
              key={section}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
  flex flex-col items-center"
            >

              <h3 className={`${section.color} font-semibold mb-3`}>
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
