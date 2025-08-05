// components/GarageDifference.tsx
import React from "react";
import { FaAward, FaWrench, FaClock, FaSmile } from "react-icons/fa";

const features = [
  {
    icon: <FaAward className="text-white text-3xl" />,
    title: "Expert Technicians",
    description:
      "Our team consists of certified professionals with years of experience in automotive repair.",
  },
  {
    icon: <FaWrench className="text-white text-3xl" />,
    title: "Quality Parts",
    description:
      "We use only genuine and high-quality parts for all repairs and replacements.",
  },
  {
    icon: <FaClock className="text-white text-3xl" />,
    title: "Fast Turnaround",
    description:
      "We understand the importance of your time and strive to complete all services promptly.",
  },
  {
    icon: <FaSmile className="text-white text-3xl" />,
    title: "Customer Satisfaction",
    description:
      "We prioritize customer satisfaction and strive to exceed expectations with every service.",
  },
];

const GarageDifference = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="text-center mb-12">
        <p className="text-red-600 font-semibold uppercase tracking-wide">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          The Centurion Service Centre Difference
        </h2>
        <div className="w-12 h-1 bg-red-600 mx-auto mt-2 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-red-600 text-white p-6 rounded-md flex flex-col items-center text-center shadow-md"
          >
            <div className="bg-red-400 bg-opacity-20 rounded-full p-4 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GarageDifference;
