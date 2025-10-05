import { FiCalendar, FiPhone } from "react-icons/fi";

export default function OMECTA() {
    return (
        <section className="py-15 bg-red-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Book Your Vehicle Diagnostic Today</h2>
                <p className="text-xl mb-8 opacity-90">
                    Avoid guesswork and ensure your vehicle gets the care it deserves. Book a professional diagnostic service today and let our skilled technicians accurately identify and resolve issues using the latest OEM tools. Fast, precise, and reliable service every time.
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
