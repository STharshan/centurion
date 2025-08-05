import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    service: 'Over All Service',
    review:
      'After reading the reviews and having been recommended DG i would say to anyone that needs any work doing to give these guys a call. Always got time, good knowledge and are fairly priced with good quality work. Top lads… Great garage!',
    name: 'Tom Rowlands',
  },
  {
    service: 'Full Service',
    review:
      'Outstanding service from Derby Garage. They diagnosed and fixed the issue with my car quickly and at a reasonable price. Highly recommend!',
    name: 'James Wilson',
  },
  {
    service: 'MOT & Repairs',
    review:
      'Took my car for MOT and they identified several issues I wasn’t aware of. Very transparent about costs and completed all repairs efficiently.',
    name: 'Sarah Thompson',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-red-600 font-semibold text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Customers Say</h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mb-10 rounded" />

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {testimonials.map((item, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white">
              {/* Stars */}
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} />
                ))}
              </div>

              {/* Badge */}
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                {item.service}
              </span>

              {/* Text */}
              <p className="text-sm text-gray-700 mb-4">{item.review}</p>
              <p className="font-semibold text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
