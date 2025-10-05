// File: EmergencyCTA.jsx
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FiCalendar, FiPhone } from "react-icons/fi";

const palette = {
  primary: "#3F8D3A",          // Green background
  fgOnPrimary: "#FFFFFF",      // White text
  secondaryBg: "#B9C26D",      // Olive button
  secondaryText: "#1F2A10",    // Dark text on olive
  outline: "#FFFFFF",          // White outline
};

export default function EmergencyCTA() {
  return (
    <section
      className="py-16 bg-red-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Keep Cool with Professional Air-Con Service
        </h2>

        <p className="text-xl mb-8 opacity-90">
          Expert air conditioning services from qualified technicians using professional equipment
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* Book Now Button */}
          <a href="/contact">
          <button className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold bg-white text-red-600 hover:bg-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 rounded-md px-6 py-3 w-full sm:w-auto sm:min-w-[180px]">
            <FiCalendar className="h-5 w-5" />
            Book Now
          </button>
          </a>

          {/* Call Us Button */}
          <a href="tel:02476638999" className="w-full sm:w-auto sm:min-w-[180px]">
            <button className="flex items-center justify-center gap-2 text-base sm:text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 rounded-md px-6 py-3 w-full">
              <FiPhone className="h-5 w-5" />
              Call Us Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
