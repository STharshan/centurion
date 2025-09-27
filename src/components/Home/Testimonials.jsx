import React, { useEffect, useRef } from "react";
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    service: 'Overall Service',
    review:
      'Fantastic service and excellent customer service. Centurion Fast Fit is efficient and goes above and beyond the call of duty. Highly recommend using their services.',
    name: 'Deepa Patel',
  },
  {
    service: 'Overall Service',
    review:
      'Great customer service from the get go when I called to get my car booked in for its annual service. I was assured all parts were brought in from the dealer so therefore genuine and reliable. Very professional and a great price too.',
    name: 'Charlie S',
  },
  {
    service: 'Overall Service',
    review:
      'The service was impeccable and presented great value for money! Is now my new go-to for repairs. Highly recommended A+',
    name: 'Ketan Karia',
  },
  {
    service: 'Overall Service',
    review:
      "I would highly recommend Centurion fast fit. They provide a professional, friendly, and honest service and keep you well informed. Wouldn't go anywhere else now I've found them. Would recommend to anyone who is clueless about cars as they will not rip you off!",
    name: 'Suzi Barrett',
  },
  {
    service: 'Overall Service',
    review: 'Good honest service, The staff are very polite and welcoming.',
    name: 'Chris Hewitt',
  },
  {
    service: 'Overall Service',
    review:
      'Kirit and the team here are amazing, I needed a driveshaft replaced and they fitted me in the very next day with a good price. I have used this garage a number of times and always been pleased with the work done. Highly recommend using Centurion Fast Fit.',
    name: 'Adam Brooks',
  },
  {
    service: 'Overall Service',
    review:
      `We took our car there for a repair and the guys were so helpful and friendly. I couldn't believe how good the price was and I would recommend everyone to use these guys!`,
    name: 'Komal Kotecha',
  },
  {
    service: 'Overall Service',
    review:
      'I used Centurion for the first time a couple of weeks ago on recommendation So impressed with the lovely, friendly, and very reasonably priced service that I received that I immediately used them again for my daughters MOT and service. Highly recommended.',
    name: 'Anita Bassi',
  },
  {
    service: 'Overall Service',
    review:
      'After reading a number of posts praising Centurion FastFit (and maybe not quite believing that anywhere could be THAT good) with my service due yesterday, I decided to give them a go. I was not disappointed! My car was collected on-time when they said it would be.',
    name: 'Tony Swann',
  },
  {
    service: 'Overall Service',
    review:
      'Having always done my own servicing and repairs I was reluctant to trust any of my vehicles to anyone else. However, through reviews and recommendations, I put my trust in Kirit to service one of my vehicles. I found the whole experience really efficient. I delivered my vehicle.',
    name: 'John Rose',
  },
  {
    service: 'Overall Service',
    review:
      'Extremely helpful and polite. Also very quick with what had to be done. I would definitely recommend to anyone who needs help with their car.',
    name: 'Shyam Raichura',
  },
];

const Testimonials = () => {
  const testimonialContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'ease-in-out',
    });
  }, []);

  const scrollLeft = () => {
    if (testimonialContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? -280 : -320;
      testimonialContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (testimonialContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 320;
      testimonialContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-red-600 font-semibold text-xs sm:text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 px-4">What Our Customers Say</h2>
        <div className="w-16 sm:w-20 h-1 bg-red-600 mx-auto mb-8 sm:mb-10 rounded" />

        {/* Testimonials Scroll */}
        <div className="relative px-8 sm:px-12 md:px-16">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg z-10 hover:bg-red-700 transition-colors"
            aria-label="Scroll left"
          >
            <FiArrowLeft className="hover:-translate-x-2 transition-transform duration-300" size={window.innerWidth < 640 ? 20 : 24} />
          </button>

          {/* Testimonial container */}
          <div className="overflow-hidden w-full">
            <div
              ref={testimonialContainerRef}
              className="flex space-x-4 sm:space-x-6 overflow-x-auto p-6 scrollbar-hide"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px] h-100 px-4 sm:px-6 py-4 sm:py-5 border-2 border-gray-200 hover:shadow-lg hover:shadow-red-500 rounded-lg shadow-lg  transition-all duration-300 bg-white"
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 100}`}
                >
                  {/* Stars */}
                  <div className="flex justify-center text-yellow-400 mb-4 sm:mb-5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={16} className="sm:w-[18px] sm:h-[18px]" />
                    ))}
                  </div>

                  {/* Badge */}
                  <span className="bg-red-100 text-red-600 text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full inline-block mb-3 sm:mb-4">
                    {item.service}
                  </span>

                  {/* Text */}
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed min-h-[80px] sm:min-h-[100px]">
                    {item.review}
                  </p>
                  <p className="font-semibold text-sm sm:text-base text-black">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 sm:p-3 rounded-full shadow-lg z-10 hover:bg-red-700 transition-colors"
            aria-label="Scroll right"
          >
            <FiArrowRight className="hover:translate-x-2 transition-transform duration-300" size={window.innerWidth < 640 ? 20 : 24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;