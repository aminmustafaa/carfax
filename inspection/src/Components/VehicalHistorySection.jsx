import React, { useState } from 'react';


// --- Component 1: Vehicle History Section (Tabs) ---
const VehicleHistorySection = () => {
    const [activeTab, setActiveTab] = useState('vehicleData');

    return (
        <section className="bg-white py-16 px-4 flex flex-col items-center">

            {/* Main Heading */}
            <h1 className="text-xl md:text-3xl font-semibold text-gray-600 mb-14 text-center">
                Canada’s leader in vehicle history.
            </h1>

            {/* Tabs Navigation */}
            <div className="flex space-x-8 border-b border-gray-200 mb-8 w-full max-w-md justify-center">
                <button
                    onClick={() => setActiveTab('vehicleData')}
                    className={`pb-4 px-2 text-lg font-medium transition-colors duration-200 ${activeTab === 'vehicleData'
                        ? 'text-blue-500 border-b-2 border-blue-500'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Vehicle Data
                </button>
                <button
                    onClick={() => setActiveTab('historyValue')}
                    className={`pb-4 px-2 text-lg font-medium transition-colors duration-200 ${activeTab === 'historyValue'
                        ? 'text-blue-500 border-b-2 border-blue-500'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    History-Based Value
                </button>
            </div>

            {/* Content Card */}
            <div className="bg-white shadow-xl rounded-xl p-8 md:p-12 max-w-xl text-center border border-gray-50">
                {activeTab === 'vehicleData' ? (
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        We access billions of data records from thousands of trusted sources to provide our customers with the most comprehensive{' '}
                        <a href="#" className="text-blue-500 font-semibold hover:underline">
                            vehicle history report
                        </a>{' '}
                        available.
                    </p>
                ) : (
                    /* Placeholder content for the second tab since it wasn't shown in the image */
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                        We know history. And only CARFAX Canada’s <a href="#" className="text-blue-500 font-semibold hover:underline">
                            History-Based Value
                        </a>{' '}
                        leverages the country's largest vehicle data network to provide you with an in-depth valuation of your car based on its unique history.
                    </p>
                )}
            </div>
        </section>
    );
};
export default VehicleHistorySection;