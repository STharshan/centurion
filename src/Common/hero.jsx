import { FiCalendar, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ServiceHeader({ data }) {
    const Icon = data.badgeIcon; // Capitalized so React recognizes it as a component

    return (
        <section className="py-10">
            <div className="container mx-auto px-4 text-center mt-45">
                {/* Dynamic Badge */}
                <span className="inline-flex items-center justify-center rounded-xl bg-red-200 border border-gray-200 shadow-lg px-2 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 mb-4 bg-accent/10 text-accent-foreground border-accent/20">
                    <Icon className="w-3 h-3" />
                    {data.badgeText}
                </span>

                {/* Dynamic Heading */}
                <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                    {data.heading}
                </h1>

                {/* Dynamic Subheading */}
                <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto mb-8">
                    {data.subheading}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={data.primaryLink}
                        className="inline-flex items-center justify-center bg-red-600 shadow-lg gap-2 whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md px-6 hover:bg-red-700 hover:shadow-lg active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-white"
                    >
                        <FiCalendar className="h-5 w-5 mr-2" />
                        {data.primaryBtnText}
                    </Link>

                    <a
                        href={`tel:${data.phone}`}
                        className="inline-flex items-center shadow-lg justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border border-gray-300 h-10 rounded-md px-6 hover:bg-red-700 hover:text-white hover:shadow-lg active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                    >
                        <FiPhone className="h-5 w-5 mr-2" />
                        Call Us Today
                    </a>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                    {data.footerNote}
                </p>
            </div>
        </section>
    );
}