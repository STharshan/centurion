// components/GarageDifference.tsx
import React from "react";
import { FaAward, FaWrench, FaClock, FaSmile } from "react-icons/fa";

const GarageDifference = () => {
  return (
    <section className="py-5 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="text-center mb-12 bg-red-600 p-7 rounded-lg shadow-lg">
        <p className="text-white font-semibold uppercase tracking-wide mb-2">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Trusted & Approved
        </h2>
        {/* Add the new content here */}
        <p className="text-lg text-white sm:text-xl max-w-3xl mx-auto mt-4 mb-5">
          We’re proud members of Approved Garages, adhering to a strict code of conduct and consistently earning positive feedback from our loyal customer base.
        </p>
      </div>
    </section>
  );
};

export default GarageDifference;
