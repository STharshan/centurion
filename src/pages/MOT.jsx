import React from 'react';

const MOT = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-30">
                <h1 className="text-3xl font-bold text-red-600">MOT & Servicing</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/mot1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>
                <p className='mt-10 max-w-4xl text-lg  mx-auto'>An MOT test is an annual inspection that makes sure your vehicle meets environmental and road safety standards. The first test is on the third anniversary of its registration and is required by law. </p>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        A regular car service is a comprehensive check-up and maintenance process for your vehicle. It is crucial for:
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Preventing Breakdowns:</strong> Regular servicing helps identify potential issues before they lead to costly breakdowns or safety hazards.
                                </li>
                                <li>
                                    <strong className='text-black'>Maintaining Performance:</strong> A service ensures that critical components like the engine, brakes, suspension, and electrical systems are functioning optimally.
                                </li>
                                <li>
                                    <strong className='text-black'>Improving Fuel Efficiency:</strong> Routine checks and adjustments can make your car more fuel-efficient, saving you money in the long run.
                                </li>
                                <li>
                                    <strong className='text-black'>Prolonging Lifespan:</strong> Proper maintenance extends the life of your vehicle, allowing you to avoid frequent and expensive repairs.
                                </li>
                                <li>
                                    <strong className='text-black'>Resale Value:</strong> A well-maintained car with a full service history retains a higher resale value than one that has been neglected.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MOT;
