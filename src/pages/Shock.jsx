import React from 'react';

const Shock = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Shock Absorbers & Suspension</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/shock1.jpg" // Replace with your image path
                        alt="Ghost Immobiliser"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                       Checking your car's shock absorbers is essential for ensuring a smooth ride, improving handling, and maintaining the overall safety of your vehicle. Worn-out or damaged shock absorbers can affect braking, steering, and tire wear. Here’s how to check your shock absorbers: 
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Visual Inspection:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Leaks: </strong> Check for oil leaks around the shock absorbers. If you see oil or fluid on the shock body, it’s a sign they are worn out and need replacement. </li>
                                        <li><strong>Physical Damage: </strong>Look for visible damage like dents, cracks, or rust on the shock absorbers or mounting brackets. </li>
                                        <li><strong>Worn Bushings: </strong>The rubber bushings that connect the shock absorbers to the car can wear out. If they appear cracked, dry, or deteriorated, it may be time for replacement. </li>
                                    </ul>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Shock;
