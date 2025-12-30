import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const errors = {};

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const phone = form.user_phone.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) {
      errors.user_name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.user_email = "Please enter a valid email address";
    }

    if (phone && !/^\+?\d{7,15}$/.test(phone)) {
      errors.user_phone = "Enter a valid phone number";
    }

    if (message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("");

    const form = formRef.current;
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT COLUMN – CONTACT INFO */}
        <div className="border border-gray-300 shadow-xl p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-8">
            Feel free to contact us with any questions or to schedule an
            appointment. Our friendly team is ready to assist you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Visit Us</h4>
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
                <a href="tel:+442476638999" className="text-gray-700 hover:text-red-600">
                  +442476 638999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email Us</h4>
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
                <p className="text-gray-700">Monday – Friday: 8:30 AM – 4:00 PM</p>
                <p className="text-gray-700">Saturday: Closed</p>
                <p className="text-gray-700">Sunday: Closed</p>
                <p className="text-gray-700">Bank Holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – CONTACT FORM */}
        <div className="bg-white rounded-lg shadow-xl border p-6">
          <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="border rounded px-4 py-2 w-full"
                />
                {errors.user_name && (
                  <p className="text-red-600 text-xs mt-1">{errors.user_name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className="border rounded px-4 py-2 w-full"
                />
                {errors.user_email && (
                  <p className="text-red-600 text-xs mt-1">{errors.user_email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                className="border rounded px-4 py-2 w-full"
              />
              {errors.user_phone && (
                <p className="text-red-600 text-xs mt-1">{errors.user_phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your vehicle and service needed..."
                className="border rounded px-4 py-2 w-full"
              />
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white w-full py-3 rounded hover:bg-red-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm text-green-600">{status}</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
