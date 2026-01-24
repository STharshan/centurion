import React from 'react';

const ClutchAbout = () => {

    const brakeIssues = [
        {
            title: "Slipping Clutch",
            description: "engine revs rise but the car doesn’t accelerate as expected"
        },
        {
            title: "Difficulty Shifting Gears",
            description: "tiff gear stick or grinding when changing gears"
        },
        {
            title: "Spongy or Stiff Clutch Pedal",
            description: "hydraulic or linkage issues causing inconsistent pedal feel"
        },
        {
            title: "Grinding Noise",
            description: "clutch not disengaging fully, leading to gear damage"
        },
        {
            title: "Burning Smell",
            description: "overheating clutch friction material during heavy use"
        },
        {
            title: "Vibration or Shuddering",
            description: "also called “clutch judder,” caused by worn discs or pressure plate"
        }
    ];

    const clutchIssues = [
        {
            title: "Slipping Clutch",
            description: "If you notice that the engine revs up but the car doesn’t accelerate as expected (especially when going uphill or accelerating hard), this could indicate that the clutch is slipping. This happens when the friction material on the clutch disc is worn out."
        },
        {
            title: "Difficulty Shifting Gears",
            description: "If you have trouble shifting gears smoothly or if the gear stick feels stiff, it could indicate a clutch problem. This could be caused by a worn clutch disc, misalignment, or hydraulic issues in the clutch system."
        },
        {
            title: "Spongy or Stiff Clutch Pedal",
            description: "A clutch pedal that feels too soft, spongy, or too stiff can indicate issues with the hydraulic system or the clutch linkage."
        },
        {
            title: "Grinding Noise",
            description: "Grinding sounds when changing gears might suggest that the clutch isn’t disengaging fully, causing the gears to grind. This could be due to a worn clutch disc or a misadjusted linkage."
        },
        {
            title: "Burning Smell",
            description: "A burning smell, especially after heavy use of the clutch (e.g., in traffic or on hills), could indicate that the clutch is overheating and the friction material is wearing out."
        },
        {
            title: "Vibration or Shuddering",
            description: "If the car shakes or shudders when releasing the clutch, it may indicate a problem with the clutch disc or pressure plate. This is often referred to as 'clutch judder.'"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Clutch Fitting</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/clutch1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        loading="lazy"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6  text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        A clutch allows the driver to engage and disengage the engine from the transmission. When you press the clutch pedal, the engine is disconnected from the transmission, which allows you to change gears or stop without stalling the engine. Releasing the clutch reconnects the engine to the transmission, allowing the car to move again
                    </h2>

                    <div className="bg-gray-100 text-white p-4 rounded-lg mt-10">
                        <div className="bg-gray-100 text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                                Signs of a Worn or Failing Clutch
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


                    <div className="bg-gray-100 text-white p-4 rounded-lg mt-10">
                        <div className="bg-gray-100 text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                                How to Maintain a Clutch
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {clutchIssues.map((iss, index) => (
                                    <div
                                        key={index}
                                        className="border bg-red-600 shadow-sm rounded-2xl text-white 
                     w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-white mb-2">{iss.title}</h3>
                                            <p className="text-white text-sm">{iss.description}</p>
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

export default ClutchAbout;
