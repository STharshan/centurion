import React from 'react';

const OEM = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-30">
                <h1 className="text-3xl font-bold text-red-600">OEM Diagnostic Tools</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/oem1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Why should I use OEM Diagnostic Tools?  
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className="mt-2 text-lg text-left ml-10">
                           OEM diagnostic tools are specifically designed for each vehicle manufacturer, ensuring support for all of their existing and future vehicles, advanced features and functions, and providing accurate and reliable diagnosis. 
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OEM;
