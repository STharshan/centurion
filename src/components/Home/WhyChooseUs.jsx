import React from 'react';
import { FiShield, FiSettings, FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiShield size={28} className="text-red-600" />,
      title: 'Certified Mercedes Technicians',
      description:
        'Our team consists of qualified professionals with extensive experience in automotive repair and maintenance.',
    },
    {
      icon: <FiSettings size={28} className="text-red-600" />,
      title: 'Advanced Equipment',
      description:
        'We use state-of-the-art diagnostic tools and equipment to ensure accurate and efficient servicing.',
    },
    {
      icon: <FiClock size={28} className="text-red-600" />,
      title: 'Quick Turnaround',
      description:
        'We strive to complete all repairs and services promptly without compromising on quality and attention to detail.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <p className="text-red-600 font-semibold text-sm uppercase">Our Services</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Why Choose Centurian Service Centre</h2>
      <div className="w-20 h-1 bg-red-600 mx-auto mb-10 rounded" />

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-lg transition text-center"
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
      <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded hover:bg-red-700 flex items-center gap-2 mx-auto">
        <Link to="/services" className="flex items-center gap-2">
          View All Services <FiArrowRight />
        </Link>
      </button>
    </section>
  );
};

export default WhyChooseUs;
