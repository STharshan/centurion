import { FiCalendar, FiPhone } from "react-icons/fi";
import { FaCarSide } from "react-icons/fa";

export default function SmartHeader() {
    return (
        <section className="py-20 ">
            <div className="container mx-auto px-4 text-center mt-35">
                {/* Badge */}
                <span className="inline-flex items-center justify-center rounded-xl bg-red-200 border border-gray-200 shadow-lg px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 mb-4 bg-accent/10 text-accent-foreground border-accent/20">
                    <FaCarSide className="w-3 h-3" />
                    Smart Repairs (SMART)
                </span>

                {/* Heading */}
                <h1 className="text-5xl font-bold text-balance mb-6">
                    Fast, Precise Repairs for Minor Damage
                </h1>

                {/* Subheading */}
                <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
                    SMART repairs (Small to Medium Area Repair Technology) allow you to fix minor car body damage quickly and cost-effectively, without the need for full panel replacements or extensive paintwork. Our skilled technicians use specialised tools and materials to restore your vehicle to its original condition—fast, efficiently, and without compromising quality.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center justify-center bg-red-600 shadow-lg gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-6 bg-primary hover:bg-primary/90 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95 ">
                        <FiCalendar className="h-5 w-5 mr-2" />
                        Book Your MOT or Service Today
                    </button>

                    <button className="inline-flex items-center shadow-lg  justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                        <FiPhone className="h-5 w-5 mr-2" />
                        Call Us Today
                    </button>
                </div>

                {/* Footer note */}
                <p className="text-sm text-muted-foreground mt-4">
                    Fast, Honest &amp; Hassle-Free
                </p>
            </div>
        </section>
    );
}
