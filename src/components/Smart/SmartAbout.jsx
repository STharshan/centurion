import React from "react";

const SmartAbout = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="text-center">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <img
            src="/smart1.jpg"
            alt="Car Diagnostics"
            className="w-full md:w-1/2 lg:w-[45%] h-64 md:h-80 object-cover rounded-md shadow-md"
          />
          <img
            src="/smart2.jpg"
            alt="Car Diagnostics"
            className="w-full md:w-1/2 lg:w-[45%] h-64 md:h-80 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="mt-8 bg-red-500 text-white p-5 md:p-8 rounded-lg max-w-6xl mx-auto shadow-lg">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-relaxed">
            SMART repairs, also known as <strong>Small to Medium Area Repair
            Technology</strong>, have revolutionised the automotive industry.
            Unlike traditional bodyshop repairs that involve costly full panel
            replacements or extensive paintwork repairs, SMART repairs target
            specific areas affected by minor damages and repair them in a matter
            of hours. From bumper scuffs and minor dents to paintwork scratches,
            paint damage and car body imperfections, our skilled technicians
            employ precise techniques using specific tools and specialised
            materials and paint to repair your car without compromising on
            quality.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default SmartAbout;
