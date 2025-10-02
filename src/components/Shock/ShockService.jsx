import { FiShield, FiCheckCircle, FiTool } from "react-icons/fi";

const servicesData = [
  {
    title: "Signs You May Need Shock Absorber Replacement",
    icon: FiShield,
    features: [
      "Excessive bouncing after bumps or dips",
      "Uneven or rapid tire wear",
      "Poor handling or instability when cornering",
      "Nose-diving during braking or swaying on turns",
      "Unusual noises from suspension components"
    ],
  },
  {
    title: "Why Professional Suspension Maintenance Matters",
    icon: FiTool,
    features: [
      "Restores smooth, controlled ride quality",
      "Enhances vehicle handling and steering precision",
      "Reduces wear on tires and other suspension parts",
      "Improves braking performance and overall safety",
    ],
  },
];

export default function ShockServices() {
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
