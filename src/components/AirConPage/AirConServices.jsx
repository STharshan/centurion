import {
  FaSnowflake,
  FaThermometerHalf,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function AirConServices() {
  const services = [
    {
      title: "Air-Con Re-Gas Service",
      desc: "Restore your cooling performance with our professional re-gas service",
      icon: (
        <FaSnowflake className="h-5 w-5 text-[color:var(--aircon-icon)]" />
      ),
      points: [
        "Complete system evacuation",
        "Fresh refrigerant refill",
        "Leak detection check",
        "Anti-bacterial sanitisation clean",
      ],
    },
    {
      title: "System Diagnostics",
      desc: "Thorough checks to identify issues before they become costly",
      icon: (
        <FaThermometerHalf className="h-5 w-5 text-[color:var(--aircon-icon)]" />
      ),
      points: [
        "Temperature and pressure testing",
        "Component inspection",
        "Component inspection",
        "Fault code reading",
        "Nitrogen leak down test",
      ],
    },
    {
      title: "Component Repair",
      desc: "Expert repairs and replacements to keep your system running smoothly",
      icon: <FaTools className="h-5 w-5 text-[color:var(--aircon-icon)]" />,
      points: [
        "Compressor service",
        "Condenser repair",
        "Evaporator maintenance",
        "Pipe and hose replacement",
      ],
    },
    {
      title: "Preventive Maintenance",
      desc: "Stay ahead of breakdowns with regular servicing",
      icon: <FaShieldAlt className="h-5 w-5 text-[color:var(--aircon-icon)]" />,
      points: [
        "Filter replacement",
        "Full System cleaning",
        "Leak prevention",
        "Annual check-up",
      ],
    },
  ];

  return (
    <section
      className="transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 text-[color:var(--aircon-heading)]">
            Professional Air Conditioning Services
          </h2>
          <p className="text-lg font-body max-w-2xl mx-auto text-[color:var(--aircon-muted)]">
            Comprehensive air-con solutions designed for maximum comfort, efficiency, and reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-xl py-6 px-6 transition-all duration-300 shadow-sm 
                         hover:shadow-[0_8px_24px_rgba(47,125,51,0.35)] hover:ring-2 hover:ring-red-600 hover:ring-offset-2"
              style={{
                backgroundColor: "var(--aircon-card-bg)",
                border: "1px solid var(--aircon-card-border)",
              }}
            >
              <div className="grid auto-rows-min items-start gap-1.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-300 text-red-600"
                     
                    >
                      {s.icon}
                    </div>
                    <div className="text-xl font-heading font-bold text-[color:var(--aircon-heading)]">
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="text-[color:var(--aircon-muted)] font-body text-base">
                  {s.desc}
                </div>
              </div>

              <div>
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-center text-sm font-body text-[color:var(--aircon-muted)]"
                    >
                      <FiCheckCircle
                        className="h-4 w-4 mr-2 flex-shrink-0 text-red-600"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
