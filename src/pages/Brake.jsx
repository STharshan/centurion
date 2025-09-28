import React from 'react';

const brakeIssues = [
    {
        title: "Brake Warning Light",
        description: "Many modern cars have sensors that detect when the brake pads are too worn, triggering a dashboard warning light.",
    },
    {
        title: "Squeaking or Grinding Noises",
        description: "These noises indicate that the pads are worn or the discs may be damaged.",
    },
    {
        title: "Longer Stopping Distances",
        description: "If you notice that it’s taking longer to stop your car, it could be a sign of worn-out brake pads or damaged discs.",
    },
    {
        title: "Vibrations",
        description: "If the brake pedal or steering wheel vibrates when you brake, it’s often a sign of warped discs.",
    },
    {
        title: "Soft or Spongy Pedal Feel",
        description: "his could indicate worn pads, a problem with the brake fluid, or air in the brake lines.",
    },
];

const brake = [
    {
        tittle: "Smooth Braking",
        description: "Brake discs provide a smooth surface for the pads to press against, ensuring efficient braking. Worn or warped discs can cause braking issues and reduce stopping power."
    },
    {
        tittle: "Heat Dissipation",
        description: "Brake discs dissipate heat generated during braking. Worn or damaged discs can overheat, leading to brake fade (loss of braking power)."
    }
]

const Brake = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Brake Discs & Brake Pads</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/brake1.jpg" // Replace with your image path
                        alt="Ghost Immobiliser"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 text-black p-4 rounded-lg">
                    {/* <h2 className="text-xl font-semibold">
                        Brake discs (rotors) and pads are critical components of your car's braking system, responsible for slowing down and stopping the vehicle. Regularly inspecting and maintaining them is essential for your safety. Here's how to check your brake discs and pads and why they are important:
                    </h2>
                    <p className="text-xl font-semibold mt-5">Brake pads press against the brake discs to create friction, which slows down your vehicle. </p> */}
                    <div className="mt-6 bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-8">
                            Why Brake Discs Are Important
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            {brake.map((iss, index) => (
                                <div
                                    key={index}
                                    className="border bg-red-600 shadow-sm rounded-2xl text-white transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
                     w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
                                >
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">{iss.tittle}</h3>
                                        <p className="text-white text-sm">{iss.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-15 bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-black mb-8">
                            Signs You Need to Replace Brake Discs or Pads
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-12">
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
                    <div className="mt-15 bg-gray-100 text-black shadow-lg p-4 rounded-lg transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]">
                        <h2 className="text-xl font-semibold">
                            Professional Inspection and Maintenance
                        </h2>
                        <div className="p-4 rounded-lg">
                            <p className="mt-2 text-lg text-left ml-10">
                                <ul className="list-disc text-gray-800">

                                        <ul className="list-inside ml-4">
                                            <li>If you're unsure about the condition of your brake discs and pads, it’s a good idea to have them professionally inspected. A mechanic can check for wear, measure the thickness of the discs and pads, and determine if they need replacement.</li>
                                        </ul>
                                        <ul className="list-inside ml-4 mt-2">
                                            <li>In summary, regularly checking and maintaining your brake pads and discs is essential for your safety, ensuring effective stopping power, and prolonging the life of your braking system.</li>
                                        </ul>

                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brake;
