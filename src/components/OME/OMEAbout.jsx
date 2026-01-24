import React from 'react';

const OEMAbout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">OEM Diagnostic Tools</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/oem1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        loading="lazy"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-gray-100 text-white max-w-6xl mx-auto duration-300 p-4 rounded-lg   hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]">
                    <div className="p-4 rounded-lg bg-red-600 shadow-lg ">
                    <h2 className="text-xl font-semibold">
                        Why should I use OEM Diagnostic Tools?
                    </h2>
                        <p className="mt-2 text-lg text-left ml-10">
                            OEM diagnostic tools are specifically designed for each vehicle manufacturer, ensuring support for all of their existing and future vehicles, advanced features and functions, and providing accurate and reliable diagnosis.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OEMAbout;
