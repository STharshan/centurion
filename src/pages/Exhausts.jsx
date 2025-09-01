import React from 'react';

const Exhausts = () => {
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
                    
                    <div className="mt-6 space-y-6">
                        {/* Professional Inspection Box */}
                        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-black">Professional Inspection</h3>
                            <ul className="list-inside ml-4 space-y-2">
                                <li><strong>Diagnostic Tools:</strong> A professional mechanic can use diagnostic tools to check for issues with the exhaust system, such as a faulty catalytic converter, damaged sensors, or hidden leaks.</li>
                                <li><strong>Emissions Test:</strong> If you're due for an emissions test, an exhaust system inspection can help identify any issues before the test. A faulty exhaust system can cause your vehicle to fail the test, leading to costly repairs or fines.</li>
                            </ul>
                        </div>

                        {/* Common Problems Box */}
                        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-black">Common Problems with Exhaust Systems:</h3>
                            <ul className="list-inside ml-4 space-y-2">
                                <li><strong>Corrosion:</strong> Especially in regions with high humidity or where salt is used on roads, rust is a common issue that weakens exhaust components.</li>
                                <li><strong>Exhaust Leaks:</strong> Can lead to dangerous fumes entering the vehicle or reduce engine performance.</li>
                                <li><strong>Clogged Catalytic Converter:</strong> Causes reduced fuel efficiency and can lead to engine damage over time.</li>
                            </ul>
                        </div>
                    </div>

                    <p className='mt-10 text-lg mx-auto max-w-4xl'>
                        Regularly checking your exhaust system helps maintain your vehicle's performance, safety, and environmental compliance. If any issues arise, it's important to address them promptly to avoid more significant repairs and potential safety risks.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Exhausts;
