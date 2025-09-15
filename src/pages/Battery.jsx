import React from 'react';

const Battery = () => {
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
                    
                    {/* Common signs section */}
                    <div className="mt-10 grid grid-cols-2 gap-4">
                        <div className="bg-red-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white">Dashboard Warning Lights</h3>
                            <p className="text-white">Ignoring them could lead to serious engine damage.</p>
                        </div>
                        <div className="bg-red-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white">Unusual Noises or Vibrations</h3>
                            <p className="text-white">Could point to engine, brake, or suspension issues.</p>
                        </div>
                        <div className="bg-red-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white">Smoke from the Exhaust</h3>
                            <p className="text-white">Often caused by oil leaks or worn engine parts.</p>
                        </div>
                        <div className="bg-red-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white">Rough Idling or Stalling</h3>
                            <p className="text-white">Could be due to dirty filters, spark plugs, or fuel issues.</p>
                        </div>
                    </div>
                        <div className="bg-red-500 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold text-white">Poor Fuel Economy</h3>
                            <p className="text-white">A sign that your engine might need a tune-up.</p>
                        </div>

                </div>
            </section>
        </div>
    );
};

export default Battery;
