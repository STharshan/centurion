import { FiShield, FiCheckCircle, FiTool } from "react-icons/fi";
import { GrServices } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";

const servicesData = [
    {
        title: "Why Choose a Vehicle Safety Assessment?",
        icon: FiShield,
        features: [
            "Detect hidden issues before they become dangerous",
            "Reduce the risk of unexpected breakdowns",
            "Ensure compliance with road safety standards",
            "Improve vehicle reliability and performance",
            "Peace of mind for long journeys and daily driving"
        ],
    },
    {
        title: "Signs You May Need a Safety Check",
        icon: FiTool,
        features: [
            "Brakes feel soft, squeaky, or unresponsive",
            "Uneven tyre wear or low tread depth",
            "Steering pulls to one side",
            "Warning lights on your dashboard",
            "Unusual vibrations, noises, or handling issues"
        ],
    }
];

export default function VehicleServices() {
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
