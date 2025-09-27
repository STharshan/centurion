import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top CTA Section */}
      <div className="bg-[url('/car-cta.jpg')] bg-cover bg-center bg-no-repeat bg-opacity-20 backdrop-brightness-50 py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Experience Quality Service?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Book your appointment today and let our expert team take care of your vehicle maintenance and repair needs.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.location.href = "tel:+442476638999"}
            className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold py-2 px-6 rounded"
          >
            Work Number
          </button>
          <Link to="/contact">
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold py-2 px-6 rounded flex items-center gap-2 group">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">Book Now</span>
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2 ml-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Left: Logo and Description */}
        <div>
          <img src="/logo.png" alt="Derby Garage" className="h-20 mb-4" />
          <p className="text-gray-300 text-sm">
            Centurion Service Centre provides quality car service and repairs with experienced professionals using the latest technology.
          </p>
          <div className="flex gap-4 mt-4 text-white text-sm">
            <a href="https://www.facebook.com/centurionfastfitcentre/?_rdr" target='_blank' aria-label="Facebook">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/centurionfastfit?igsh=azhwMXk4amVhOXV0" target='_blank' aria-label="Instagram">
              <FaInstagram className="hover:text-pink-600" />
            </a>
            <a href="https://www.tiktok.com/@centfastfit?_t=ZN-8zfM4P4jRzi&_r=1" target='_blank' aria-label="TikTok">
              <FaTiktok className="hover:text-red-600" />
            </a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="font-bold text-white mb-3">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/gallery" className='hover:text-white'>Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4 className="font-bold text-white mb-3">Contact Info</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <FiMapPin className="text-red-500 mt-1" />
              <a
                href="https://www.google.com/maps?q=9A+Colledge+Road,+Holbrooks,+Coventry+CV6+4BH"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                9A Colledge Road, Holbrooks, Coventry CV6 4BH
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="text-red-500 mt-1" />
              <a
                href="https://wa.me/+442476638999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                02476 638999
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FiMail className="text-red-500 mt-1" />
              <a
                href="mailto:centurionfastfit@gmail.com"
                className="hover:text-red-500"
              >
                centurionfastfit@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2025 Derby Garage. Partnered with{" "}
        <a
          href="https://www.ansely.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-red-500 hover:underline"
        >
          Ansely
        </a>
      </div>
    </footer>
  );
};

export default Footer;
