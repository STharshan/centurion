import React from 'react';

const Tyre = () => {

    const serviceData = [
        {
            title: "Safety: Traction and Grip",
            description: " Good tires provide the necessary traction to grip the road, especially in wet, snowy, or icy conditions. This improves braking, acceleration, and handling, reducing the risk of skidding or losing control. Shorter Stopping Distances Worn or poor-quality tires increase the distance it takes for your car to stop, particularly in emergency braking situations. Good tires help you stop quicker, which can prevent accidents."
        },
        {
            title: "Handling & Control: Stability:",
            description: "Tires in good condition provide stability and balance to your vehicle, especially during sharp turns, quick maneuvers, or driving on uneven surfaces. Steering Response High-quality tires improve steering responsiveness, making it easier to maintain control over the vehicle at high speeds or in difficult driving conditions."
        },
        {
            title: "Comfort: Smooth Ride:",
            description: "Good tires help absorb shocks from bumps and irregularities in the road, providing a more comfortable and smoother ride for both the driver and passengers."
        },
        {
            title: "Longevity of Other Car Parts: Reduced Wear and Tear:",
            description: " Tires that are in good condition reduce the stress on other vehicle components such as the suspension, brakes, and steering systems, helping them last longer and perform better."
        },
        {
            title: "Legal Requirements: Tread Depth Laws:",
            description: "In many countries, there are legal requirements for minimum tread depth (usually around 1.6 mm in the UK). Driving with worn-out tires can result in fines, points on your license, and even void your insurance."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
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

                <div className="mt-6 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Why Good Tires Are Important:
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
            </section>
        </div>
    );
};

export default Tyre;
