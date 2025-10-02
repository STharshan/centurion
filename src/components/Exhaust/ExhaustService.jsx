import { FiShield, FiCheckCircle, FiTool } from "react-icons/fi";

const servicesData = [
  {
    title: "Common Exhaust System Problems",
    icon: FiShield,
    features: [
      "Corrosion & Rust – Common in areas with high humidity or salted roads, corrosion can weaken and damage exhaust components.",
      "Exhaust Leaks – Dangerous fumes may enter the cabin and reduce engine efficiency.",
      "Clogged Catalytic Converter – Restricts exhaust flow, lowers fuel efficiency, and can cause long-term engine damage.",
    ],
  },
  {
    title: "Why Regular Checks Matter",
    description: "Keeping your exhaust system in good condition ensures:",
    icon: FiTool,
    features: [
      "Better fuel economy",
      "Reduced emissions",
      "A quieter, safer drive",
      "Lower repair costs by catching issues early",
    ],
  },
];

export default function ExhaustsServices() {
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
