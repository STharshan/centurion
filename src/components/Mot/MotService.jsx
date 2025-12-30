import { FiShield, FiCheckCircle, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "MOT Testing",
    description: "Road Legal, Road Safe",
    icon: FiShield,
    features: [
      "Class 4 MOTs (Cars & Small Vans)",
      "Free Retests (within 10 working days)",
      "Pre-MOT Inspections Available",
      "Fast Testing While You Wait",
      "On-Site Repairs If Needed",
    ],
    buttonText: "Book Your MOT",
  },
  {
    title: "Car Servicing",
    description: "Keep Your Car Running at Its Best",
    icon: FiTool,
    features: [
      "Interim & Full Servicing Packages",
      "Oil & Filter Changes",
      "Brake & Suspension Checks",
      "Fluid Top-Ups",
      "Battery & Spark Plug Testing",
      "Full Vehicle Health Check",
      "Service Book Stamping (Protects Resale Value)",
    ],
    buttonText: "Book Your Service",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white flex flex-col justify-between rounded-xl border border-gray-300 py-6 shadow-lg relative overflow-hidden hover:shadow-lg hover:shadow-red-600 active:shadow-lg active:shadow-red-600"
              >
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>

                {/* Top Content */}
                <div className="px-6 space-y-4">
                  <div className="font-semibold text-2xl">{service.title}</div>
                  <div className="text-muted-foreground text-lg">
                    {service.description}
                  </div>
                  <p className="text-muted-foreground">
                    {service.description === "Road Legal, Road Safe"
                      ? "Driving without a valid MOT isn't worth the risk—fines, points on your licence, and even invalid insurance. We make MOTs quick, clear, and stress-free."
                      : "Regular servicing keeps your car reliable, efficient, and ready for the road. From oil changes to full inspections, we prevent problems before they become costly breakdowns."}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center space-x-2">
                        <FiCheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button at bottom */}
                <div className="px-6 mt-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-red-600 text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 w-full">
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
