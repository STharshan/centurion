import React from 'react';

const Ghost = () => {

    const brakeIssues = [
        {
            title: "Security and Convenience",
            description: "When you get your Ghost Immobiliser, you will create a unique PIN up to 20 digits long using the buttons on your dashboard and steering wheel, which must be entered before the engine will start, just like a PIN on your bank card.",
            desc: "Alternatively, you can download the Autowatch app on your smartphone, which will allow the engine to start when your phone is present using Bluetooth. You are able to pair two phones with the immobiliser."
        },  
        {
            title: "Engine Blocking",
            description: "Without either using your PIN or the presence of your smartphone, thieves will not be able to start your engine. This means that even if thieves steal your keys or use relay theft techniques, without towing, your car’s going nowhere!",
        },
        {
            title: "Undetectable",
            description: "The Ghost 2 Immobiliser cannot be detected by sophisticated scanning tools, which some thieves use. It also does not use radio frequency, so it can't be detected either.",
        },
        {
            title: "CAN Data Network",
            description: "he immobiliser uses your vehicle’s CAN Data Network to feed and receive information from your car. This means that there’s no wire cutting upon installation, and the system is silent.",
        },
        {
            title: "Service and Valet Mode",
            description: "his mode allows your car to start temporarily whilst it’s in the garage for some work without a PIN, so you don’t have to give other people your PIN",
        },
        {
            title: "PIN Change",
            description: "If you forget your PIN, don’t worry! There’s a reset code for each immobiliser, so you don’t need to panic about not being able to drive your car."

        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-12">
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

                <div className="mt-15 bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-black mb-8">
                        Key Features of the Ghost Immobiliser
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
            </section>
        </div>
    );
};

export default Ghost;
