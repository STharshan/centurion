import React, { useEffect } from "react";
import { FaCar, FaWrench, FaLock, FaTools, FaCog, FaExclamationTriangle, FaBatteryFull, FaWind, FaClipboardCheck } from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi";
import { GiFlatTire } from "react-icons/gi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const services = [
  {
    title: "MOT & Car Servicing",
    description:
      "Keep your vehicle in peak condition with our thorough car servicing options, tailored to your specific needs. Our car service includes: oil filter change, air filter change, sparkplugs, oil change and a 120 point check.",
    image: "/mot.jpg",
    icon: <FaCar />,
    route: "/service/mot"
  },
  {
    title: "Tyres",
    description:
      "Choose from a wide selection of top-quality tyres to ensure your vehicle maintains optimal performance and safety.",
    image: "/tyre.jpg",
    icon: <GiFlatTire />,
    route: "/service/tyre"
  },
  {
    title: "Smart Repairs",
    description:
      "Our skilled technicians employ precise techniques using specific tools and specialised materials and paint to repair your car without compromising on quality.",
    image: "/smart.jpg",
    icon: <FaTools />,
    route: "/service/smart-repair"
  },
  {
    title: "OEM Diagnostic Tools",
    description:
      "We use (Original Equipment Manufacturer) vehicle diagnostic tools that are specialized devices made for and approved by vehicle manufacturers for use in repairing their vehicles.",
    image: "/oem.jpg",
    icon: <FaCog />,
    route: "/service/oem"
  },
  {
    title: "Ghost Immobiliser Fitting",
    description:
      "The Ghost Immobiliser System represents the next step forward in car security. Easy installation, undetectable by thieves, and impossible to start without your unique pin or app authorisation - it's the ultimate protection against car theft.",
    image: "/ghost.jpg",
    icon: <FaLock />,
    route: "/service/ghost"
  },
  {
    title: "Shock Absorbers & Suspension",
    description:
      "Get in touch with us for an instant quote on the right shock absorber for your vehicle's make and model.",
    image: "/shock.jpg",
    icon: <FaWrench />,
    route: "/service/shock"
  },
  {
    title: "Coventry Exhausts",
    description:
      "Our expert technicians can assess and replace your exhaust system, ensuring your vehicle runs efficiently and cleanly.",
    image: "/coventry.jpg",
    icon: <FaExclamationTriangle />,
    route: "/service/exhausts"
  },
  {
    title: "Brake Discs & Brake Pads",
    description:
      "Safety is paramount. Trust our specialists to provide effective brake solutions to keep you secure on the road.",
    image: "/brake.jpg",
    icon: <FaWrench />,
    route: "/service/brake"
  },
  {
    title: "Car Batteries",
    description:
      "We offer a comprehensive range of car batteries to ensure your vehicle starts every time.",
    image: "/car.jpg",
    icon: <FaBatteryFull />,
    route: "/service/battery"
  },
  {
    title: "Clutch Fitting",
    description:
      "Clutch replacement can be costly, if carried out wrongly. Get in touch with us today for exclusive offer on our clutch replacement service for your vehicle.",
    image: "/clutch.jpg",
    icon: <FaCog />,
    route: "/service/clutch"
  },
  {
    title: "Timing Belt Fitting Service",
    description:
      "Get in touch with us today to get the best prices on Timing belt change for your vehicle.",
    image: "/timing.jpg",
    icon: <FaTools />,
    route: "/service/timing-belt"
  },
  {
    title: "Aircon Re-gas & Repairs",
    description:
      "Over time, gas can permeate the air conditioning system, making it less efficient. Regular re-gassing helps keep it working properly and prevent costly repairs later.",
    image: "/aircon.jpg",
    icon: <FaWind />,
    route: "/service/aircon"
  },
  {
    title: "Vehicle Safety Assessments",
    description:
      "Our thorough safety assessments guarantee your vehicle meets all necessary safety standards.",
    image: "/vehicle.jpg",
    icon: <FaClipboardCheck />,
    route: "/service/vehicle-safety"
  },
];

const FeaturedServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: false, // Trigger on both scroll up and down
      offset: 200, // Offset to trigger animation
      easing: 'ease-in-out', // Easing for the animation
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <p className="text-red-600 font-semibold uppercase mb-2">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Our <span className="text-red-600">Comprehensive</span> Services
        </h2>
        <p className="text-gray-600 mb-10">
          At Centurion Fast Fit LLP, our services are designed with your safety and convenience in mind. Here's a closer look at what we offer:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${index === services.length - 1
                ? 'lg:col-span-3 mx-auto'  // Center the last item
                : ''
                } bg-white lg:w-92 rounded-lg overflow-hidden shadow border hover:shadow-red-400 active:shadow-red-400 active:shadow-xl border-gray-200 cursor-pointer transition transform hover:scale-105 hover:shadow-lg relative z-0 hover:z-10 flex flex-col h-full`}
              data-aos="fade-up" // Apply AOS fade-up effect to each card
              data-aos-delay={`${index * 100}`} // Delay staggered animations based on index
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left flex flex-col flex-grow">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-red-500 text-xl bg-red-200 rounded-full p-3">
                    {service.icon}
                  </span>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mt-2 flex-grow">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-red-600 text-white font-semibold px-4 py-1 rounded flex items-center gap-2 mx-auto transition-all duration-300 group"
                    
                  >
                    <Link to={service.route} className="flex items-center gap-2 group-hover:-translate-x-2 transition-all duration-300">
                      Read More
                    </Link>
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2 ml-2" />
                  </button>
                  {/* <Link to={service.route}>
                    <button className="text-red-600 font-semibold text-sm cursor-pointer flex items-center gap-1">
                       <FiArrowRight className="text-lg" />
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;