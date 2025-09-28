import React from 'react';

const Shock = () => {

    const brakeIssues = [
        {
            title: "Leaks",
            description: "Check for oil leaks around the shock absorbers. If you see oil or fluid on the shock body, it’s a sign they are worn out and need replacement.",
        },
        {
            title: "Physical Damage",
            description: "Look for visible damage like dents, cracks, or rust on the shock absorbers or mounting brackets.",
        },
        {
            title: "Worn Bushings",
            description: "The rubber bushings that connect the shock absorbers to the car can wear out. If they appear cracked, dry, or deteriorated, it may be time for replacement.",
        },
    ];


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
                <h2 className="text-xl font-semibold text-black mb-5 mt-10">
                    Checking your car's shock absorbers is essential for ensuring a smooth ride, improving handling, and maintaining the overall safety of your vehicle. Worn-out or damaged shock absorbers can affect braking, steering, and tire wear. Here’s how to check your shock absorbers
                </h2>

                <div className="mt-6 bg-gray-100 text-white p-4 rounded-lg">
                    <div className="bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-8">
                            Visual Inspection
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
            </section>
        </div>
    );
};

export default Shock;
