import React from "react";
import { FiArrowRight, FiPhone } from "react-icons/fi"; // Feather Phone icon
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BookServiceCTA = () => {
  return (
    <section className="bg-red-600 text-white py-12 px-4 rounded-2xl mx-4 md:mx-8 lg:mx-16 my-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Book a Service?
        </h2>
        <p className="text-base md:text-lg mb-8">
          Contact us today to schedule an appointment for any of our services.
          Our team is ready to assist you with all your automotive needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Phone Button with Clickable Number */}
          <a href="tel:02476638999">
            <button className="bg-white text-red-600 font-semibold px-5 py-3 rounded-md flex items-center gap-2 shadow hover:bg-gray-100 transition">
              <FiPhone className="w-4 h-4" /> 02476 638999
            </button>
          </a>

          {/* Contact Us Button with Link to Contact Page */}
          <Link to="/contact">
            <button className="border border-white text-white font-semibold px-5 py-3 rounded-md hover:bg-white hover:text-red-600 transition">
              Contact Us <span className="ml-1"><FiArrowRight className="inline-block" /></span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookServiceCTA;
