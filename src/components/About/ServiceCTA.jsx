import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ServiceCTA = () => {
  return (
    <section className="bg-red-600 text-white py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Quality Service?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Book your appointment today and let our expert team take care of your vehicle
          maintenance and repair needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-white text-red-600 font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2">
            Contact Us
            <FiArrowRight className="text-xl" />
          </button>
          <button className="border border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-red-600 transition">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
