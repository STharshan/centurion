import React from 'react';

const MOT = () => {

    const serviceData = [
        {
            title: "Preventing Breakdowns",
            description: "Regular servicing helps identify potential issues before they lead to costly breakdowns or safety hazards."
        },
        {
            title: ">Maintaining Performance",
            description: " A service ensures that critical components like the engine, brakes, suspension, and electrical systems are functioning optimally."
        },
        {
            title: "Improving Fuel Efficiency",
            description: "Routine checks and adjustments can make your car more fuel-efficient, saving you money in the long run."
        },
        {
            title: "Prolonging Lifespan",
            description: "Proper maintenance extends the life of your vehicle, allowing you to avoid frequent and expensive repairs."
        },
        {
            title: "Resale Value",
            description: "A well-maintained car with a full service history retains a higher resale value than one that has been neglected."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">MOT & Servicing</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/mot1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>
                <p className='mt-10 max-w-4xl text-lg  mx-auto'>An MOT test is an annual inspection that makes sure your vehicle meets environmental and road safety standards. The first test is on the third anniversary of its registration and is required by law. </p>

                <div className="mt-6 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        A regular car service is a comprehensive check-up and maintenance process for your vehicle. It is crucial for:
                    </h2>
                    <div className="py-8 px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Common Signs Your Car Needs a Service
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {serviceData.map((service, index) => (
                                <div key={index} className="bg-red-600 text-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-sm">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MOT;

