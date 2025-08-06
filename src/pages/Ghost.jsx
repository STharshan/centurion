import React from 'react';

const Ghost = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-45">
                <h1 className="text-3xl font-bold text-red-600">Ghost Immobiliser Installation</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/ghost.jpg" // Replace with your image path
                        alt="Ghost Immobiliser"
                        className="w-150 h-80 rounded-md"
                    />
                </div>
                <p className='mt-10 max-w-4xl text-lg mx-auto'>
                    The Ghost Immobiliser is designed to enhance the security of your vehicle. It provides multiple layers of protection to ensure that even sophisticated thieves cannot steal your car. Here's how it works:
                </p>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Key Features of the Ghost Immobiliser:
                    </h2>
                    <div className="p-4 rounded-lg shadow-lg">
                        <p className="mt-2 text-lg text-left ml-10">
                            <ul className="list-disc text-gray-200">
                                <li>
                                    <strong className='text-black'>Security and Convenience:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>When you get your Ghost Immobiliser, you will create a unique PIN up to 20 digits long using the buttons on your dashboard and steering wheel, which must be entered before the engine will start, just like a PIN on your bank card.</li>
                                        <li>Alternatively, you can download the Autowatch app on your smartphone, which will allow the engine to start when your phone is present using Bluetooth. You are able to pair two phones with the immobiliser.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Engine Blocking:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>Without either using your PIN or the presence of your smartphone, thieves will not be able to start your engine. This means that even if thieves steal your keys or use relay theft techniques, without towing, your car’s going nowhere!</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Undetectable:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>The Ghost 2 Immobiliser cannot be detected by sophisticated scanning tools, which some thieves use. It also does not use radio frequency, so it can't be detected either.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>CAN Data Network:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>The immobiliser uses your vehicle’s CAN Data Network to feed and receive information from your car. This means that there’s no wire cutting upon installation, and the system is silent.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>Service and Valet Mode:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>This mode allows your car to start temporarily whilst it’s in the garage for some work without a PIN, so you don’t have to give other people your PIN.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-black'>PIN Change:</strong>
                                    <ul className="list-inside ml-4">
                                        <li>If you forget your PIN, don’t worry! There’s a reset code for each immobiliser, so you don’t need to panic about not being able to drive your car.</li>
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

export default Ghost;
