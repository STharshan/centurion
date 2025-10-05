import { FiCalendar, FiPhone } from "react-icons/fi";

export default function SmartCTA() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Book Your SMART Repair Today
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Don’t let minor damage reduce your car’s appearance or value. Book a
          SMART repair with our expert technicians and restore your vehicle
          quickly, efficiently, and to the highest standard. Fast, reliable, and
          professional service every time.
        </p>

        {/* Buttons */}
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
