import React from 'react';
import { ShieldCheck, Wrench, Users } from 'lucide-react'; // Lucide icons

export default function TyreWhyChooseUs() {
  const features = [
    {
      title: 'Trusted & Reliable',
      description: 'Years of proven expertise and hundreds of satisfied drivers.',
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    },
    {
      title: 'Expert Technicians',
      description: 'Certified mechanics delivering accurate, high-quality work every time.',
      icon: <Wrench className="w-10 h-10 text-red-600" />,
    },
    {
      title: 'Customer-Centric',
      description: 'We go the extra mile to ensure your complete satisfaction.',
      icon: <Users className="w-10 h-10 text-red-600" />,
    },
  ];

  return (
    <div className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-12">Why Choose Centurion?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 ease-in-out 
  hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(220,38,38,0.7)]
  active:scale-95 active:shadow-[0_0_30px_6px_rgba(220,38,38,0.9)]
  flex flex-col items-center text-center"
          >

            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
