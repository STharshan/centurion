import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';

const HeroSection = () => {

  return (
    <section className="relative h-[100vh] w-full overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/garage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-25 mt-20">
        <div className="max-w-3xl">
          <span className="bg-red-600 text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-4"
            data-aos="fade-up" // AOS Animation on this element
          >
            Professional Car Services in Centurion
          </span>
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up" // AOS Animation for heading
          >
            Your <span className='text-red-600'>Specialist</span> Independent Car Service Centre in Coventry
          </h1>
          <p
            className="text-lg font-bold text-gray-200 mb-6"
            data-aos="fade-up" // AOS Animation for paragraph
          >
            Your vehicle deserves nothing less than the best
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="tel: 02476 638999"
              className="bg-red-600 text-white px-5 py-2 rounded font-semibold flex items-center gap-2 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 "
              data-aos="fade-up" // AOS Animation for call button
              data-aos-offset="200" // AOS Offset effect
            >
              <FiPhoneCall />
              Call
            </a>
            <a
              href="/about"
              className="bg-white text-black px-5 py-2 rounded font-semibold flex items-center gap-2 hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              data-aos="fade-up" // AOS Animation for "find out more" button
              data-aos-offset="200" // AOS Offset effect
            >
              Find out more
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Logo Animation */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <img
          src="/scroll-down.svg"
          alt="Scroll Down"
          className="h-8 w-auto opacity-80"
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
