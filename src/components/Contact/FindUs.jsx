import React from "react";

const FindUs = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Us</h2>
        <p className="text-gray-600 mb-8">
          We're conveniently located in Coventry. Visit us at our garage.
        </p>

        <div className="rounded-lg overflow-hidden shadow-lg w-full h-[400px] hover:shadow-red-500 active:shadow-red-500">
          <iframe
            title="Google Map - 9A Colledge Road"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5421122308474!2d-1.5235899!3d52.4294968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774be90e611ac3%3A0xa530e0456ad49de6!2s9A%20Colledge%20Rd%2C%20Coventry%20CV6%204BH%2C%20UK!5e0!3m2!1sen!2suk!4v1691518585147!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
