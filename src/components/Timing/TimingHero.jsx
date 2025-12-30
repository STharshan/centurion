import { FiCalendar, FiPhone } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TimingHeader() {
    return (
        <section className="py-10 ">
            <div className="container mx-auto px-4 text-center mt-45">
                {/* Badge */}
                <span className="inline-flex items-center justify-center rounded-xl bg-red-200 border border-gray-200 shadow-lg px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 mb-4 bg-accent/10 text-accent-foreground border-accent/20">
                    <FaCarSide className="w-3 h-3" />
                    Timing Belt Fitting Service
                </span>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                    Protect Your Engine, Prevent Costly Repairs
                </h1>

                {/* Subheading */}
                <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
                    Your timing belt (also called a cam belt) is one of the most critical parts of your car’s engine. It keeps the crankshaft and camshaft perfectly synchronized so the engine’s valves and pistons move in harmony. A worn or broken timing belt can lead to catastrophic engine failure—costing thousands in repairs. Our expert technicians fit and replace timing belts with precision, keeping your engine safe and reliable.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center bg-red-600 shadow-lg gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-6 bg-primary hover:bg-primary/90 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95 ">
                        <FiCalendar className="h-5 w-5 mr-2" />
                        Book Your Service Today
                    </Link>

                    <a
                        href="tel: +442476638999"
                        className="inline-flex items-center shadow-lg  justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                        <FiPhone className="h-5 w-5 mr-2" />
                        Call Us Today
                    </a>
                </div>

                {/* Footer note */}
                <p className="text-sm text-muted-foreground mt-4">
                    Fast, Honest &amp; Hassle-Free
                </p>
            </div>
        </section>
    );
}
