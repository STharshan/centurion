import React from 'react';

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

                <div className="mt-6 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Brake discs (rotors) and pads are critical components of your car's braking system, responsible for slowing down and stopping the vehicle. Regularly inspecting and maintaining them is essential for your safety. Here's how to check your brake discs and pads and why they are important:
                    </h2>
                    <p className="text-xl font-semibold mt-5">Brake pads press against the brake discs to create friction, which slows down your vehicle. </p>
                    <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            Why Brake Discs Are Important:
                        </h2>
                        <div className="p-4 rounded-lg shadow-lg">
                            <p className="mt-2 text-lg text-left ml-10">
                                <ul className="list-disc text-gray-200">
                                    <li>
                                        <strong className='text-black'>Smooth Braking:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>Brake discs provide a smooth surface for the pads to press against, ensuring efficient braking. Worn or warped discs can cause braking issues and reduce stopping power.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className='text-black'>Heat Dissipation:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>Brake discs dissipate heat generated during braking. Worn or damaged discs can overheat, leading to brake fade (loss of braking power).</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            Signs You Need to Replace Brake Discs or Pads:
                        </h2>
                        <div className="p-4 rounded-lg shadow-lg">
                            <p className="mt-2 text-lg text-left ml-10">
                                <ul className="list-disc text-gray-200">
                                    <li>
                                        <strong className='text-black'>Brake Warning Light:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>Many modern cars have sensors that detect when the brake pads are too worn, triggering a dashboard warning light.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className='text-black'>Squeaking or Grinding Noises:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>These noises indicate that the pads are worn or the discs may be damaged.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className='text-black'>Longer Stopping Distances:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>If you notice that it’s taking longer to stop your car, it could be a sign of worn-out brake pads or damaged discs.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className='text-black'>Vibrations:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>If the brake pedal or steering wheel vibrates when you brake, it’s often a sign of warped discs.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong className='text-black'>Soft or Spongy Pedal Feel:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>This could indicate worn pads, a problem with the brake fluid, or air in the brake lines.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                        <h2 className="text-xl font-semibold">
                            Professional Inspection and Maintenance:
                        </h2>
                        <div className="p-4 rounded-lg shadow-lg">
                            <p className="mt-2 text-lg text-left ml-10">
                                <ul className="list-disc text-gray-200">
                                    <li>
                                        <strong className='text-black'>Professional Inspection:</strong>
                                        <ul className="list-inside ml-4">
                                            <li>If you're unsure about the condition of your brake discs and pads, it’s a good idea to have them professionally inspected. A mechanic can check for wear, measure the thickness of the discs and pads, and determine if they need replacement.</li>
                                        </ul>
                                        <ul className="list-inside ml-4 mt-5">
                                            <li>In summary, regularly checking and maintaining your brake pads and discs is essential for your safety, ensuring effective stopping power, and prolonging the life of your braking system.</li>
                                        </ul>
                                    </li>
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
