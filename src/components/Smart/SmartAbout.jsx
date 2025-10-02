import React from 'react';

const SmartAbout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Smart Repairs</h1>
                <div className="mt-6 flex justify-center gap-5">
                    <img
                        src="/smart1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                    <img
                        src="/smart2.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold">
                       SMART repairs, also known as Small to Medium Area Repair Technology, have revolutionised the automotive industry. Unlike traditional bodyshop repairs that involve costly full panel replacements or extensive paintwork repairs, SMART repairs target specific areas affected by minor damages and repair them in a matter of hours. From bumper scuffs and minor dents to paintwork scratches, paint damage and car body imperfections, our skilled technicians employ precise techniques using specific tools and specialised materials and paint to repair your car without compromising on quality. 
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default SmartAbout;
