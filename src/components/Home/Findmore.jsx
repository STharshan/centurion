import React from "react";

const Findmore = () => {

    return (
        <section className="w-full bg-white py-16 px-6 scroll-m-30" id="findmore">
            <div className="flex flex-col max-w-6xl mx-auto lg:flex-row items-center gap-10">
                <div className="flex-1 mt-8 lg:mt-0" data-aos="fade-right">
                    {/* Add data-aos for the image animation */}
                    <img
                        className="w-full object-cover h-110 rounded-lg hover:shadow-lg hover:transform hover:scale-105 hover:z-10 transition-all duration-300"
                        src="home.png"
                        loading="lazy"
                        alt="Car illustration"
                    />

                </div>
                <div className="flex-1 text-center lg:text-left lg:pr-16" data-aos="fade-left">
                    {/* Add data-aos for the text animation */}
                    <h2 className="text-4xl font-bold mb-4">Keeping You On The Road</h2>
                    <p className="text-lg mb-6">
                        At Centurion Fast Fit LLP, we believe that your vehicle deserves nothing less than the best.
                        As a specialist independent auto care and fast fit centre located in the heart of Coventry,
                        we take pride in offering a wide array of services tailored to meet the needs of car and
                        light commercial vehicle owners in the Greater Coventry Area. Our vastly trained specialist technicians
                        are dedicated to ensuring your vehicle performs optimally, keeping you and your loved ones safe on the road.
                        Fast & Efficient Turnaround, State-of-The-Art Equipment, Honest & Transparent Service, Competitive Pricing.
                    </p>

                    {/* Add AOS for the icons/benefits section */}
                    <div className="flex justify-center lg:justify-start space-x-8">
                        <div className="flex items-center" data-aos="fade-up" data-aos-delay="100">
                            <div className="bg-red-500 text-white p-2 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-check-circle" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            </div>
                            <span className="text-lg font-semibold">Certified Experts</span>
                        </div>
                        <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="bg-red-500 text-white p-2 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-check-circle" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            </div>
                            <span className="text-lg font-semibold">Quality Parts</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Findmore;
