import React from 'react';

const ExhaustsAbout = () => {
    const brakeIssues = [
        {
            title: "Professional Inspection",
            description: "A trained mechanic carefully inspects the entire exhaust system for visible damage, corrosion, or leaks.",
        },
        {
            title: "Advanced Diagnostic Tools",
            description: "We use modern diagnostic equipment to detect issues such as a failing catalytic converter, damaged oxygen sensors, or hidden leaks that may affect performance.",
        },
        {
            title: "Emissions Test",
            description: "If your vehicle is due for an emissions test, an inspection beforehand can identify potential problems. A faulty exhaust system could lead to a failed test, unexpected repair costs, or even fines."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                {/* Title */}
                <h1 className="text-3xl font-bold text-red-600">Exhausts</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/exhaust.jpg" // Replace with your image path
                        alt="Exhaust System"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                {/* Intro Text */}
                <h2 className="text-lg sm:text-xl font-semibold text-black mb-5 mt-10 leading-relaxed">
                    Checking your car's shock absorbers is essential for ensuring a smooth ride,
                    improving handling, and maintaining the overall safety of your vehicle.
                    Worn-out or damaged shock absorbers can affect braking, steering, and tire wear.
                    Here’s how to check your shock absorbers:
                </h2>

                {/* Card Section */}
                <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-8">
                            How We Inspect Your Shocks & Suspension
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {brakeIssues.map((issue, index) => (
                                <div
                                    key={index}
                                    className="border bg-red-600 shadow-sm rounded-2xl text-white 
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
                  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]"
                                >
                                    <div className="p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                            {issue.title}
                                        </h3>
                                        <p className="text-sm sm:text-base">{issue.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExhaustsAbout;
