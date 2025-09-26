import React, { useEffect } from 'react';
import { FiShield, FiSettings, FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield size={28} className="text-red-600" />,
      title: 'Ongoing Technician Training',
      description:
        'Our team regularly attends specialist training courses, keeping up with the latest automotive technology to deliver high-quality service every time.',
    },
    {
      icon: <FiSettings size={28} className="text-red-600" />,
      title: 'Advanced Equipment',
      description:
        'We use state-of-the-art diagnostic tools and equipment to ensure accurate and efficient servicing on nearly all makes and models.',
    },
    {
      icon: <FiClock size={28} className="text-red-600" />,
      title: 'Family-Run with Honest Values',
      description:
        'As a long-established family business, we pride ourselves on being fair, honest, and genuinely caring—earning the trust and loyalty of our customers year after year.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      once: false, // Trigger on both scroll up and down
      offset: 200, // Offset for triggering the animation
      easing: 'ease-in-out', // Easing for the animations
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white text-center">
      <p className="text-red-600 font-semibold text-sm uppercase">Our Services</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Centurian Service Centre</h2>
      <div className="w-20 h-1 bg-red-600 mx-auto mb-10 rounded" />

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 hover:shadow-red-400 active:shadow-red-400 active:shadow-xl rounded-lg p-6 hover:shadow-xl transition text-center"
            data-aos="fade-up" // AOS animation on scroll
            data-aos-delay={`${index * 100}`} // Stagger the animations
          >
            <div className="bg-red-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="text-lg font-semibold text-black mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="bg-red-600 text-white font-semibold px-6 py-3 rounded flex items-center gap-2 mx-auto transition-all duration-300 group"
        data-aos="fade-up" // AOS animation for button
        data-aos-delay="300" // Delay for the button animation
      >
        <Link to="/services" className="flex items-center gap-2 group-hover:-translate-x-2 transition-all duration-300">
          View All Services
        </Link>
        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2 ml-2" />
      </button>
    </section>
  );
};

export default WhyChooseUs;
