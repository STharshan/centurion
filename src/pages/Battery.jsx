import React from 'react';

const Battery = () => {


    const brakeIssues = [

        {
            "title": "Dashboard Warning Lights",
            "description": "Ignoring them could lead to serious engine damage."
        },
        {
            "title": "Unusual Noises or Vibrations",
            "description": "Could point to engine, brake, or suspension issues."
        },
        {
            "title": "Smoke from the Exhaust",
            "description": "Often caused by oil leaks or worn engine parts."
        },
        {
            "title": "Rough Idling or Stalling",
            "description": "Could be due to dirty filters, spark plugs, or fuel issues."
        },
        {
            "title": "Poor Fuel Economy",
            "description": "A sign that your engine might need a tune-up."
        }
    ]



    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-10">
                <h1 className="text-3xl font-bold text-red-600">Car Batteries</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/battery.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-full max-w-sm h-auto rounded-md"
                    />
                </div>

                <div className="mt-6 text-black p-4 rounded-lg bg-white shadow-lg">
                    <h2 className="text-xl font-semibold">
                        Car batteries are essential for starting your vehicle and powering its electrical systems. A healthy battery ensures reliable engine starts, especially in extreme weather conditions, and powers components like lights, radio, and electronic systems when the engine is off. Here's a guide to understanding and maintaining your car battery:
                    </h2>
                    <p className="text-xl font-semibold mt-8">
                        A car battery provides the electrical energy needed to start the engine and powers various electronics when the engine isn’t running. Once the engine starts, the alternator takes over to recharge the battery and provide power to the electrical systems.
                    </p>

                    <div className="bg-gray-100 text-white p-4 rounded-lg mt-10">
                        <div className="bg-gray-100 text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                                Professional Inspection
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {brakeIssues.map((issue, index) => (
                                    <div
                                        key={index}
                                        className="border bg-red-600 shadow-sm rounded-2xl text-white 
                     w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-white mb-2">{issue.title}</h3>
                                            <p className="text-white text-sm">{issue.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Battery;
