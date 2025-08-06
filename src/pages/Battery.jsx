import React from 'react';

const Battery = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Car Batteries</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/battery.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Car batteries are essential for starting your vehicle and powering its electrical systems. A healthy battery ensures reliable engine starts, especially in extreme weather conditions, and powers components like lights, radio, and electronic systems when the engine is off. Here's a guide to understanding and maintaining your car battery:
                    </h2>
                    <p className="text-xl font-semibold mt-8">
                        A car battery provides the electrical energy needed to start the engine and powers various electronics when the engine isn’t running. Once the engine starts, the alternator takes over to recharge the battery and provide power to the electrical systems.
                    </p>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className='text-xl text-left mt-10 text-black font-semibold'>Signs of a Weak or Failing Battery  </p>
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Slow Engine Crank:</strong> If the engine turns over slowly when you try to start your car, it could be a sign that the battery is losing charge.
                                </li>
                                <li>
                                    <strong className='text-black'>Dim Lights:</strong> Dim headlights, interior lights, or dashboard lights when the engine is off or just starting can indicate a weak battery.
                                </li>
                                <li>
                                    <strong className='text-black'>Electrical Issues:</strong> If accessories like the radio, power windows, or other electronics don’t function properly, the battery may not be providing enough power.
                                </li>
                                <li>
                                    <strong className='text-black'>Clicking Sound When Starting:</strong> If you hear a clicking sound when you try to start the engine, it could mean the battery doesn't have enough charge to engage the starter.
                                </li>
                                <li>
                                    <strong className='text-black'>Swollen Battery Case:</strong> A bulging or swollen battery case may indicate that the battery is overheating or damaged due to extreme temperatures, reducing its effectiveness.
                                </li>
                                <li>
                                    <strong className='text-black'>Battery Warning Light:</strong> If the battery or charging system warning light illuminates on the dashboard, there may be an issue with the battery, alternator, or other components of the electrical system.
                                </li>
                                <li>
                                    <strong className='text-black'>Frequent Jump-Starts:</strong> Needing frequent jump-starts indicates that your battery is no longer holding a charge well, and it might be time for a replacement.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Battery;
