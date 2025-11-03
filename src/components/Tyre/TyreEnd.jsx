import { CheckCircle, CircleSlash, Target } from "lucide-react";
import React from "react";

const topCards = [
  {
    title: "Alignment Benefits",
    icon: Target,
    colorClass: "text-red-600",
    titleColor: "text-red-700",
    items: [
      "Improved fuel economy",
      "Extended tyre life",
      "Smoother handling & safer driving",
      "Reduced steering effort",
      "Prevents premature wear",
    ],
  },
  {
    title: "Tyre Health Checks",
    icon: CircleSlash,
    colorClass: "text-red-600",
    titleColor: "text-red-700",
    items: [
      "Tread depth measurement",
      "Sidewall damage inspection",
      "Pressure monitoring",
      "Uneven wear patterns",
      "Age and condition assessment",
      "Legal compliance check",
    ],
  },
];

const tyreBrands = [
  {
    category: "Premium",
    color: "text-red-700",
    brands: ["Michelin", "Continental", "Bridgestone", "Pirelli"],
  },
  {
    category: "Mid-Range",
    color: "text-red-600",
    brands: ["Goodyear", "Davanti", "Yokohama", "Hankook"],
  },
  {
    category: "Budget",
    color: "text-red-700",
    brands: ["Falken", "Kumho", "Nexen", "Toyo"],
  },
  {
    category: "Specialist",
    color: "text-red-600",
    brands: ["Run-flat tyres", "Winter tyres", "Performance tyres", "Commercial tyres"],
  },
];

export default function TyreEnd() {
  return (
    <section className="px-4 py-10 bg-gray-50">
      {/* Top Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {topCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={card}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
  flex flex-col items-center text-center"
            >

              <div className="flex items-center gap-2 mb-4">
                <Icon className={`w-5 h-5 ${card.colorClass}`} />
                <h3 className={`font-semibold text-lg ${card.titleColor}`}>
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-800">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 ml-5">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Tyre Brands */}
      <div className="max-w-6xl mx-auto bg-linear-to-r from-red-100 to-red-100 rounded-xl p-6 md:p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Tyre Brand We Offer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base text-gray-800">
          {tyreBrands.map((brandGroup, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
  flex flex-col items-center text-center"
            >

              <h3 className={`${brandGroup.color} font-semibold mb-2`}>
                {brandGroup.category}
              </h3>
              <ul className="space-y-1">
                {brandGroup.brands.map((brand, i) => (
                  <li key={i}>{brand}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
