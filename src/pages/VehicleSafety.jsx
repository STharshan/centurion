import React from 'react';

const VehicleSafety = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Timing Belt Fitting Service</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/vehicle1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Our thorough vehicle safety assessments provide a complete evaluation of your vehicle's safety, ensuring it meets or exceeds all industry standards. We conduct detailed inspections and tests that cover every critical aspect of vehicle safety.
                    </h2>
                    <h2 className="text-xl font-semibold mt-5">
                        By offering a rigorous assessment process, we guarantee your vehicle is fully equipped to handle real-world driving conditions with maximum safety and reliability.
                    </h2>
                </div>
            </section>
        </div>
    );
};

export default VehicleSafety;
