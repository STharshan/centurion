import React from 'react';

const VehicleSafetyAbout = () => {

        const brakeIssues = [

        {
            "title": "Brake System Inspection",
            "description": "check pads, discs, and fluid levels"
        },
        {
            "title": "Tyre Condition & Tread Depth Check",
            "description": "ensure grip and road safety"
        },
        {
            "title": "Suspension & Steering Assessment",
            "description": "stability and handling you can trust"
        },
        {
            "title": "Lighting & Electrical Systems",
            "description": "confirm all lights and signals work properly"
        },
        {
            "title": "Exhaust & Emissions Check ",
            "description": "safer for you and the environment"
        },
         {
            "title": "Seatbelt & Airbag Inspection",
            "description": "vital protection for all passengers"
        },
         {
            "title": "Fluid Levels & Leak Check",
            "description": "prevent breakdowns and costly repairs"
        }
    ]


    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center">
                <h1 className="text-3xl font-bold text-red-600">Timing Belt Fitting Service</h1>
                <div className="mt-6 flex justify-center">
                    <img
                        src="/vehicle1.jpg" // Replace with your image path
                        alt="Car Diagnostics"
                        className="w-150 h-80 rounded-md"
                    />
                </div>

                <div className="mt-6 bg-red-500 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-semibold">
                        Our thorough vehicle safety assessments provide a complete evaluation of your vehicle's safety, ensuring it meets or exceeds all industry standards. We conduct detailed inspections and tests that cover every critical aspect of vehicle safety.
                    </h2>
                    <h2 className="text-xl font-semibold mt-5">
                        By offering a rigorous assessment process, we guarantee your vehicle is fully equipped to handle real-world driving conditions with maximum safety and reliability.
                    </h2>
                </div>

                  <div className="bg-gray-100 text-white p-4 rounded-lg mt-10">
                        <div className="bg-gray-100 text-white p-6 rounded-lg">
                            <h2 className="text-xl font-semibold text-black mb-8">
                               What’s Included in Our Safety Assessments
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

export default VehicleSafetyAbout;
