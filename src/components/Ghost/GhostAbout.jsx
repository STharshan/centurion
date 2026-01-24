import React from 'react';

const GhostAbout = () => {

    const brakeIssues = [
        {
            title: "Security and Convenience",
            description: "Set a unique PIN up to 20 digits using your dashboard and steering wheel. Your car will only start once the correct PIN is entered, just like a bank card PIN."
        },  
        {
            title: "Engine Blocking",
            description: "Without your PIN or authorized smartphone, thieves cannot start your engine—even if they steal your keys or attempt relay theft. Your car stays exactly where it is.",
        },
        {
            title: "Undetectable Protection",
            description: "The Ghost Immobiliser cannot be detected by advanced scanning tools or radio frequency scanners, keeping your security invisible to thieves.",
        },
        {
            title: "CAN Data Network Integration",
            description: "Installation is seamless with your vehicle’s CAN Data Network—no wires are cut, and the system operates silently.",
        },
        {
            title: "Service and Valet Mode",
            description: "Allow temporary engine start during servicing or valet use without sharing your PIN. Safe and convenient for trusted third parties.",
        },
        {
            title: "PIN Change",
            description: "Forgot your PIN? Each immobiliser has a secure reset code, ensuring you can always regain access without panic."

        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Ghost Immobiliser Installation</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/ghost.jpg" // Replace with your image path
                        alt="Ghost Immobiliser"
                        loading="lazy"
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

export default GhostAbout;
