import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center">
        <div className="flex-1 text-center lg:text-left lg:pr-16">
          <h2 className="text-4xl font-bold mb-4">We have been in vehicle repair trade since the 90’s.</h2>
          <p className="text-lg mb-6">
            Centurion Fast Fit was established by Kirit and Sasch Raichura with the intention of giving our customers the best possible service. As a family run business we aim to be fair, honest and caring to our valued customers. Due to this we have a large loyal customer base who use us year on year. 
          </p>
          <p className="text-lg mb-6">
           We are members of Approved Garages which have a code of conduct to which we have to adhere to. To see what some of our customers have said about us please click the good garage link or visit their website and for approved garages go to<strong> Approved Garages.</strong> 
          </p>
          <div className="flex justify-center lg:justify-start space-x-8">
            <div className="flex items-center">
              <div className="bg-red-500 text-white p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-check-circle" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <span className="text-lg font-semibold">Certified Experts</span>
            </div>
            <div className="flex items-center">
              <div className="bg-red-500 text-white p-2 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-check-circle" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              <span className="text-lg font-semibold">Quality Parts</span>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <img className="w-full object-cover h-110 rounded-lg hover:shadow-lg hover:transform hover:scale-105 hover:z-10 transition-all duration-300" src="about.png" alt="Car illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
