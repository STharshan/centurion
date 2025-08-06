import React from 'react';

const Clutch = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Clutch Fitting</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/clutch1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        A clutch allows the driver to engage and disengage the engine from the transmission. When you press the clutch pedal, the engine is disconnected from the transmission, which allows you to change gears or stop without stalling the engine. Releasing the clutch reconnects the engine to the transmission, allowing the car to move again
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className='text-xl text-left mt-10 text-black font-semibold'>Signs of a Worn or Failing Clutch</p>
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Slipping Clutch:</strong> If you notice that the engine revs up but the car doesn’t accelerate as expected (especially when going uphill or accelerating hard), this could indicate that the clutch is slipping. This happens when the friction material on the clutch disc is worn out.
                                </li>
                                <li>
                                    <strong className='text-black'>Difficulty Shifting Gears:</strong> If you have trouble shifting gears smoothly or if the gear stick feels stiff, it could indicate a clutch problem. This could be caused by a worn clutch disc, misalignment, or hydraulic issues in the clutch system.
                                </li>
                                <li>
                                    <strong className='text-black'>Spongy or Stiff Clutch Pedal:</strong> A clutch pedal that feels too soft, spongy, or too stiff can indicate issues with the hydraulic system or the clutch linkage.
                                </li>
                                <li>
                                    <strong className='text-black'>Grinding Noise:</strong> Grinding sounds when changing gears might suggest that the clutch isn’t disengaging fully, causing the gears to grind. This could be due to a worn clutch disc or a misadjusted linkage.
                                </li>
                                <li>
                                    <strong className='text-black'>Burning Smell:</strong> A burning smell, especially after heavy use of the clutch (e.g., in traffic or on hills), could indicate that the clutch is overheating and the friction material is wearing out.
                                </li>
                                <li>
                                    <strong className='text-black'>Vibration or Shuddering:</strong> If the car shakes or shudders when releasing the clutch, it may indicate a problem with the clutch disc or pressure plate. This is often referred to as "clutch judder."
                                </li>
                            </ul>
                        </p>

                        <p className='text-xl text-left mt-10 text-black font-semibold'>How to Maintain a Clutch</p>
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Avoid Riding the Clutch:</strong> “Riding the clutch” refers to resting your foot on the clutch pedal while driving, even when it’s not necessary. This puts constant pressure on the clutch and can lead to premature wear.
                                </li>
                                <li>
                                    <strong className='text-black'>Engage Neutral When Stopping:</strong> When stopping for a longer period (e.g., at a traffic light), it’s better to put the car in neutral and release the clutch pedal. Holding the clutch down can cause unnecessary wear on the release bearing and clutch components.
                                </li>
                                <li>
                                    <strong className='text-black'>Smooth Engagement:</strong> When starting from a stop, avoid letting the clutch slip excessively. Gradually and smoothly engage the clutch to minimize wear.
                                </li>
                                <li>
                                    <strong className='text-black'>Downshift Correctly:</strong> When downshifting, match the engine speed to the new gear (rev-matching) to reduce the strain on the clutch and transmission.
                                </li>
                                <li>
                                    <strong className='text-black'>Avoid Overloading:</strong> Carrying heavy loads or towing can put extra strain on the clutch, leading to quicker wear and tear.
                                </li>
                            </ul>
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Clutch;
