import React from "react";
import { FaShieldAlt } from "react-icons/fa"; // For the "Guaranteed Quality" icon
import { IoMdTime } from "react-icons/io"; // For the "Efficient Service" icon
import { AiOutlineTool } from "react-icons/ai"; // For the "Advanced Diagnostics" icon

const features = [
  {
    title: "Guaranteed Quality",
    description:
      "We stand behind our work with satisfaction guarantees and use only quality parts for all repairs and replacements.",
    icon: <FaShieldAlt size={30} />,
  },
  {
    title: "Efficient Service",
    description:
      "We understand the importance of your time and strive to complete all services promptly without compromising quality.",
    icon: <IoMdTime size={30} />,
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Our state-of-the-art diagnostic equipment helps us identify and resolve complex vehicle issues quickly and accurately.",
    icon: <AiOutlineTool size={30} />,
  },
];

const ExceptionalService = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-red-600 font-semibold uppercase mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Exceptional Service
          </h2>
          <p className="text-gray-700 mb-8">
            At Centurion Service Centre, we are committed to providing the highest quality automotive
            services with a focus on customer satisfaction. Our experienced technicians use
            advanced equipment and quality parts to ensure your vehicle is in the best condition.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-red-100 text-red-600 p-3 rounded-full text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-black text-lg">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image with Red Block */}
        <div className="relative">
          {/* Background element */}
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-lg z-0 hidden sm:block"></div>

          {/* Image with hover effect */}
          <div className="relative z-10 rounded-lg overflow-hidden">
            <img
              src="/side.jpg"
              alt="Service Technician"
              className="w-full object-cover h-110 rounded-lg hover:shadow-lg hover:transform hover:scale-105 hover:z-10 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExceptionalService;
