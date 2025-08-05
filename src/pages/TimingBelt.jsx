import React from 'react';

const TimingBelt = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-30">
                <h1 className="text-3xl font-bold text-red-600">Timing Belt Fitting Service</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/timing1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        The timing belt (also called a cam belt) is an essential component of a car's engine that synchronizes the rotation of the crankshaft and camshaft(s). This ensures that the engine’s valves open and close at the correct times during the intake and exhaust strokes, relative to the position of the pistons.
                    </h2>
                    <p className="text-xl font-semibold mt-5">Here’s a detailed look at what a timing belt does, why it’s important, signs it may need replacement, and what happens if it fails: </p>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className='text-xl text-left mt-10 text-black font-semibold'>What the Timing Belt Does</p>
                        <p className="mt-2 text-lg text-left ml-10">
                            The timing belt connects the crankshaft to the camshaft, coordinating the movement of the engine's pistons and valves. The crankshaft drives the pistons, while the camshaft controls the opening and closing of the valves. The timing belt ensures these components move in perfect synchronization, preventing the pistons and valves from colliding.
                        </p>
                        <p className="mt-2 text-lg text-left ml-10">
                            In some engines, the timing belt also drives other components like the water pump or oil pump, which are crucial for engine cooling and lubrication.
                        </p>

                        <p className='text-xl text-left mt-10 text-black font-semibold'>Why the Timing Belt Is Important</p>
                        <p className="mt-2 text-lg text-left ml-10">
                            If the timing belt fails or becomes misaligned, the engine’s valves can open at the wrong time, potentially causing the pistons and valves to collide. This can lead to serious engine damage, including bent valves, cylinder head damage, or even piston damage, which may require a costly engine rebuild or replacement.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default TimingBelt;
