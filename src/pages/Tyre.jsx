import React from 'react';

const Tyre = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-30">
                <h1 className="text-3xl font-bold text-red-600">Tyres</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/tyre1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>
                <p className='mt-10 max-w-4xl text-lg mx-auto'>
                    Good tires are essential for your car because they are the only point of contact between your vehicle and the road. Here's why having high-quality, well-maintained tires is important:
                </p>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Why Good Tires Are Important:
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Safety:</strong> 
                                    <ul className="list-inside ml-4">
                                        <li><strong>Traction and Grip:</strong> Good tires provide the necessary traction to grip the road, especially in wet, snowy, or icy conditions. This improves braking, acceleration, and handling, reducing the risk of skidding or losing control.</li>
                                        <li><strong>Shorter Stopping Distances:</strong> Worn or poor-quality tires increase the distance it takes for your car to stop, particularly in emergency braking situations. Good tires help you stop quicker, which can prevent accidents.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Handling & Control:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Stability:</strong> Tires in good condition provide stability and balance to your vehicle, especially during sharp turns, quick maneuvers, or driving on uneven surfaces.</li>
                                        <li><strong>Steering Response:</strong> High-quality tires improve steering responsiveness, making it easier to maintain control over the vehicle at high speeds or in difficult driving conditions.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Fuel Efficiency:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Reduced Rolling Resistance:</strong> Well-maintained tires with proper tread depth and inflation reduce rolling resistance, which means the car uses less energy to move forward. This leads to improved fuel efficiency and lower running costs.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Comfort:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Smooth Ride:</strong> Good tires help absorb shocks from bumps and irregularities in the road, providing a more comfortable and smoother ride for both the driver and passengers.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Longevity of Other Car Parts:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Reduced Wear and Tear:</strong> Tires that are in good condition reduce the stress on other vehicle components such as the suspension, brakes, and steering systems, helping them last longer and perform better.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Legal Requirements:</strong>
                                    <ul className="list-inside ml-4">
                                        <li><strong>Tread Depth Laws:</strong> In many countries, there are legal requirements for minimum tread depth (usually around 1.6 mm in the UK). Driving with worn-out tires can result in fines, points on your license, and even void your insurance.</li>
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

export default Tyre;
