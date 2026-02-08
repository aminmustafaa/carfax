import React from 'react';
import VinImage from '../Images/vinfraud.jpg'
import { useNavigate } from 'react-router-dom';

const VinFraudSection = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Learn');
    }

    return (
        <section className="bg-white py-20 px-8 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/* --- Left Column: Text Content --- */}
                    <div className="w-full lg:w-1/2 space-y-6 text-left">

                        <h2 className="text-3xl md:text-4xl font-200 text-gray-700 leading-tight">
                            VIN Fraud, the hidden threat.
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            It’s easy to miss, but costly to ignore. Buying a car with
                            a compromised VIN can end with you losing your car -
                            and your money.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Use <span className="font-bold text-gray-800">VIN Fraud Check</span> to help detect stolen or
                            fraudulent vehicles before you buy.
                        </p>

                        <div className="pt-2">
                            <button onClick={handleClick} className="bg-[#0084FF] hover:bg-blue-600 text-white text-lg font-semibold py-3 px-8 rounded-md transition-colors duration-200 shadow-sm">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* --- Right Column: Image --- */}
                    <div className="w-full lg:w-1/2 flex bg-gray-100 justify-center lg:justify-end">
                        {/* IMPORTANT: Replace the src below with the actual path to your car image.
               You will need to crop the car from your 'Capture2.jpg' or use a similar transparent PNG.
            */}
                        <img
                            src={VinImage}
                            alt="Car showing VIN location with warning icons"
                            className="max-w-full bg-gray-100 h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VinFraudSection;