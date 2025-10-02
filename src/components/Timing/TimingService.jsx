import { FiShield, FiCheckCircle, FiTool } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";

const servicesData = [
  {
    title: "What the Timing Belt Does",
    icon: FiShield,
    features: [
       "Coordinates the movement of pistons and valves",
      "Ensures valves open and close at the correct time",
      "Prevents piston-to-valve collisions",
      "May also drive key components like the water pump or oil pump"
    ],
  },
  {
    title: "Why Timing Belt Replacement Matters",
    icon: FiTool,
    features: [
     "A failed belt can cause severe engine damage (bent valves, piston damage, cracked cylinder head)",
      "Prevents unexpected breakdowns and expensive repairs",
      "Keeps your engine running smoothly and efficiently",
      "Protects other engine components (cooling and lubrication systems)"
      ],
  },
    {
    title: "Signs Your Timing Belt May Need Replacement",
    icon: GrServices,
    features: [
     "Ticking or rattling noises from the engine",
      "Misfiring or rough running engine",
      "Difficulty starting the car",
      "Visible cracks, fraying, or wear on the belt",
      "Vehicle manufacturer’s recommended mileage interval reached"
      ],
  },
    {
    title: "Our Timing Belt Services",
    icon: MdOutlineAccessTime,
    features: [
     "Professional timing belt fitting & replacement",
      "Water pump inspection & replacement (if driven by the belt)",
      "Tensioner and pulley checks",
      "Full engine component inspection",
      "Manufacturer-approved parts and fitting standard"
      ],
  },
];

export default function TimingServices() {
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
