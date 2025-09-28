import React from 'react';

const Exhausts = () => {


    const brakeIssues = [
        {
            title: "Diagnostic Tools",
            description: " A professional mechanic can use diagnostic tools to check for issues with the exhaust system, such as a faulty catalytic converter, damaged sensors, or hidden leaks.",
        },
        {
            title: "Emissions Test",
            description: "If you're due for an emissions test, an exhaust system inspection can help identify any issues before the test. A faulty exhaust system can cause your vehicle to fail the test, leading to costly repairs or fines",
        },
    ];

        const brake = [
        {
            title: "Corrosion",
            description: "Especially in regions with high humidity or where salt is used on roads, rust is a common issue that weakens exhaust components.",
        },
        {
            title: "Exhaust Leaks",
            description: "Can lead to dangerous fumes entering the vehicle or reduce engine performance.",
        },
          {
            title: "Clogged Catalytic Converter",
            description: "Causes reduced fuel efficiency and can lead to engine damage over time.",
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mt-12">
                <h1 className="text-3xl font-bold text-red-600">Exhausts</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/exhaust.jpg" // Replace with your image path
                        alt="Exhaust System"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-8 p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Checking your car's exhaust system is important for maintaining fuel efficiency, reducing emissions, and ensuring safety by preventing harmful gases from entering the cabin. Here’s how we check your car’s exhaust system:
                    </h2>

                    <div className="bg-gray-100 text-white p-4 rounded-lg mt-10">
                        <div className="bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                                Professional Inspection
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

                     <div className=" bg-gray-100 text-white p-4 rounded-lg mt-15">
                        <div className="bg-gray-100 shadow-lg text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                                Common Problems with Exhaust Systems
                            </h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {brake.map((iss, index) => (
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

                    <p className='mt-15 text-lg mx-auto max-w-6xl rounded-lg hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)] p-4 shadow-lg'>
                        Regularly checking your exhaust system helps maintain your vehicle's performance, safety, and environmental compliance. If any issues arise, it's important to address them promptly to avoid more significant repairs and potential safety risks.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Exhausts;
