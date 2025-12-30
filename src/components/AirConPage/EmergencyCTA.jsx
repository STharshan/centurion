// File: EmergencyCTA.jsx
import React from "react";
import { FiCalendar, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

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

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 hover:bg-gray-700 hover:shadow-lg  active:bg-gray-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-lg bg-gray-200 text-black hover:bg-secondary/80 h-10 rounded-md px-6">
            <FiCalendar className="mr-2 h-5 w-5" />
            Book Now
          </Link>
          <a href="tel: +442476638999">
            <button className="inline-flex items-center justify-center gap-2 border-white whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border dark:bg-input/300 shadow-lg dark:border-input hover:bg-red-700 hover:shadow-lg  active:bg-red-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 dark:hover:bg-input/50 h-10 rounded-md px-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <FiPhone className="mr-2 h-5 w-5" />
              Call Us Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
