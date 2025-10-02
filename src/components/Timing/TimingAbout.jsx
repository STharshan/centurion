import React from 'react';

const TimingBeltAbout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Timing Belt Fitting Service</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/timing1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 text-black p-4 rounded-lg">
                    <div className="mt-15 bg-gray-100 text-black shadow-lg p-8 rounded-lg transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]">
                        <h2 className="text-xl font-semibold">
                            The timing belt (also called a cam belt) is an essential component of a car's engine that synchronizes the rotation of the crankshaft and camshaft(s). This ensures that the engine’s valves open and close at the correct times during the intake and exhaust strokes, relative to the position of the pistons.
                        </h2>
                        <p className="text-xl font-semibold mt-5">Here’s a detailed look at what a timing belt does, why it’s important, signs it may need replacement, and what happens if it fails: </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TimingBeltAbout;
