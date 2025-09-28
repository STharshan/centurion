import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TyreHeader() {

    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to another route if needed (e.g., to the contact page or home)
    navigate("/contact");

    // Scroll to the section after navigation
    const contactSection = document.getElementById("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-20 px-4 mt-20 text-center bg-red-600 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-20">Tyres & High-Tech Alignment</h1>
      <p className="text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
        At Centurion, we combine premium tyre services with precision wheel alignment using the latest high-tech equipment—ensuring your vehicle performs safely, smoothly, and efficiently.
      </p>
       {/* Responsive Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
        {/* Email Quote Button */}
        <button
          onClick={handleClick} // Scroll to Contact section on Home page
          className="flex items-center justify-center gap-2 border border-white px-5 py-3 hover:text-red-600 rounded-md text-white hover:bg-white hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95  transition w-full sm:w-auto"
        >
          <Calendar size={18} />
          Book Consultation
        </button>

        {/* Call Now Button */}
        <a
          href="tel: 02476 638999" // Corrected the phone number format for proper functionality
          className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md shadow-lg hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95  hover:bg-gray-300 transition w-full sm:w-auto"
        >
          Schedule Your First Service
        </a>
      </div>
    </div>
  );
}
