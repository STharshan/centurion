import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const BookServiceCTA = () => {
  return (
    <section className="bg-red-600 text-white py-12 px-4 md:px-8 rounded-2xl mx-4 md:mx-8 lg:mx-16 my-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Ready to Book a Service?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed opacity-90">
          Contact us today to schedule an appointment for any of our services.
          Our team is ready to assist you with all your automotive needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Call Button */}
          <a href="tel:02476638999" className="w-full sm:w-auto sm:min-w-[190px]">
            <button className="w-full flex items-center justify-center gap-2 bg-white text-red-600 font-semibold text-base sm:text-lg px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95">
              <FiPhone className="w-5 h-5" />
              02476 638999
            </button>
          </a>

          {/* Contact Us Button */}
          <Link to="/contact" className="w-full sm:w-auto sm:min-w-[190px]">
            <button className="w-full flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-md hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
              <span className="transition-transform duration-300 group-hover:-translate-x-1 group-active:-translate-x-1">
                Contact Us
              </span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookServiceCTA;
