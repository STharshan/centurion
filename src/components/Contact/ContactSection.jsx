import React from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Feel free to contact us with any questions or to schedule an appointment.
            Our friendly team is ready to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                {/* Make Address Clickable - Link to Google Maps */}
                <a
                  href="https://www.google.com/maps?q=9A+Colledge+Road,+Holbrooks,+Coventry+CV6+4BH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600"
                >
                  9A Colledge Road, Holbrooks, Coventry CV6 4BH
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Call Us</h4>
                {/* Make Phone Number Clickable - Call */}
                <a href="tel:02476638999" className="text-gray-700 hover:text-red-600">
                  02476 638999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
                {/* Make Email Address Clickable - Email */}
                <a
                  href="mailto:centurionfastfit@gmail.com"
                  className="text-gray-700 hover:text-red-600"
                >
                  centurionfastfit@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Opening Times</h4>
                <p className="text-gray-700">Monday - Friday: 8:30 AM - 4:00 PM</p>
                <p className="text-gray-700">Saturday: Closed</p>
                <p className="text-gray-700">Sunday: Closed</p>
                <p className="text-gray-700">Bank Holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white rounded-lg shadow border p-6">
          <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <FiUser /> Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <FiMail /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-1 mb-1">
                <FiPhone /> Phone Number
              </label>
              <input
                type="tel"
                placeholder="07123 456789"
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium flex items-center gap-1 mb-1">
                <FiMessageSquare /> Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your vehicle and the service you need..."
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white w-full py-3 rounded hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
