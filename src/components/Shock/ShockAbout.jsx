import React from 'react';

const ShockAbout = () => {
  const brakeIssues = [
    {
      title: "Visual Inspection",
      description: "We check for visible damage such as dents, cracks, or rust on shock absorbers and mounting brackets.",
    },
    {
      title: "Oil Leaks",
      description: "Oil or fluid on the shock body is a sign of worn-out shock absorbers and indicates that replacement may be necessary.",
    },
    {
      title: "Bushing Condition",
      description: "The rubber bushings connecting shocks to the vehicle can crack, dry out, or deteriorate over time. We inspect these carefully to ensure proper suspension performance.",
    },
    {
      title: "Ride & Handling Tests",
      description: "Our technicians perform road and compression tests to check damping efficiency and overall suspension performance.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-red-600">
          Shock Absorbers & Suspension
        </h1>

        {/* Image */}
        <div className="mt-6 flex justify-center">
          <img
            src="/shock1.jpg" // Replace with your image path
            alt="Shock Absorber"
            loading="lazy"
            className="w-full max-w-md h-64 object-cover rounded-md"
          />
        </div>

        {/* Intro Text */}
        <h2 className="text-lg sm:text-xl font-semibold text-black mb-5 mt-10 leading-relaxed">
          Checking your car's shock absorbers is essential for ensuring a smooth ride, 
          improving handling, and maintaining the overall safety of your vehicle. 
          Worn-out or damaged shock absorbers can affect braking, steering, and tire wear. 
          Here’s how to check your shock absorbers:
        </h2>

        {/* Card Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-black mb-8">
              How We Inspect Your Shocks & Suspension
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {brakeIssues.map((issue, index) => (
                <div
                  key={index}
                  className="border bg-red-600 shadow-sm rounded-2xl text-white 
                  transition-all duration-300 ease-in-out 
                  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
                  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]"
                >
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-sm sm:text-base">{issue.description}</p>
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

export default ShockAbout;
