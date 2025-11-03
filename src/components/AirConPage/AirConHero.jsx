import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function AirConHero() {
  return (
    <section
      className="transition-colors duration-300 bg-linear-to-b 
                 from-[var(--aircon-grad-top)] to-[var(--aircon-grad-bottom)] 
                 dark:from-[var(--aircon-grad-top-dark)] dark:to-[var(--aircon-grad-bottom-dark)]"
    >
      <div className="max-w-7xl mt-40 mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <span
            className="inline-flex items-center justify-center rounded-lg px-2 py-1 text-xs font-medium mb-4 bg-red-400"
          >
            Climate Control Experts
          </span>

          {/* Heading */}
          <h1
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ color: "var(--aircon-heading)" }}
          >
            Air Conditioning{" "}
            <span style={{ color: "var(--aircon-primary)" }}>
              Re-Gas &amp; Service
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--aircon-muted)" }}
          >
            Keep your vehicle cool and comfortable all year round with <strong>Centurion’s expert air conditioning services.</strong>  From re-gas and diagnostics to full system repairs, our qualified technicians ensure your air-con runs at peak performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {/* Call Button */}
            <a href="tel: +442476 638999" className="inline-block">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 font-semibold transition-all bg-red-600 shadow-lg whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <FaPhoneAlt className="h-5 w-5" />
                Book Service: +442476 638999
              </button>
            </a>

            {/* Get Quote Button */}
            <a
              href="/contact"
              className="inline-flex items-center shadow-lg  justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 hover:bg-red-700 hover:shadow-lg  active:bg-red-800 duration-300 ease-in-out transform hover:scale-105 active:scale-95"

            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
