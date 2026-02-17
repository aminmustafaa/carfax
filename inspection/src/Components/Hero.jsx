import React from 'react';
import heroimage from '../assets/hero.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PricingPage from './Getreport';

const CarfaxHero = () => {


    const [vin, setVin] = useState('');
    const navigate = useNavigate();

    // Logic: Valid if empty (to allow skip) OR exactly 17 chars
    const isValidLength = vin.length === 0 || vin.length === 17;

    const handleSearch = () => {
        // 1. If user typed partial VIN (e.g. 5 chars), stop and show error
        if (vin.length > 0 && vin.length !== 17) return;

        // 2. Navigation Logic
        if (vin.length === 17) {
            // User provided VIN -> Route to dynamic page
            navigate(`/Get-Report/${vin}`);
        } else {
            // User provided NO VIN -> Route to generic page
            navigate('/Get-Report');
        }
    };


    return (
        <section className="bg-white py-12 md:py-24 font-sans overflow-x-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* --- Left Column: Text and Form --- */}
                    <div className="w-full lg:w-6/12 space-y-4 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-4xl text-start md:text-[2.5rem] font-bold text-gray-700 leading-tight">
                                <span className="font-normal text-start block mb-2">World’s most comprehensive</span>
                                vehicle history report.
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 text-start leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Buyers, avoid costly hidden problems.
                                <br className="hidden sm:block" />
                                Sellers, build trust and sell quickly.
                            </p>
                        </div>

                        {/* Input Form Area */}
                        {/* Fixed: Removed duplicate nested div and improved flex layout */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">

                            {/* VIN Input Group */}
                            <div className="flex w-full sm:w-auto flex-1 shadow-sm rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                                <input
                                    type="text"
                                    placeholder="Enter your 17 character VIN"
                                    maxLength={17}
                                    value={vin}
                                    onChange={(e) => setVin(e.target.value)}
                                    className="flex-1 py-3 pl-4 outline-none text-gray-700 placeholder-gray-500 min-w-0 w-full"
                                />
                                <button
                                    onClick={handleSearch}
                                    // disabled={!isValidVin || isLoading}
                                    disabled={!isValidLength}
                                    className="bg-[#0084ff] hover:bg-blue-600 text-white px-6 py-3 font-semibold transition-colors duration-200 whitespace-nowrap">
                                    Go
                                </button>
                            </div>

                            <span className="text-gray-500 font-medium hidden sm:block">or</span>
                            <span className="text-gray-500 font-medium sm:hidden my-2">or</span>

                            {/* Get Report Button */}
                            <button
                                onClick={handleSearch}
                                disabled={!isValidLength}
                                className="w-full sm:w-auto bg-[#0084ff] hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200 text-center whitespace-nowrap shadow-sm">
                                Get Report
                            </button>


                        </div>

                    </div>

                    {/* --- Right Column: Image and Stats --- */}
                    <div className="w-full lg:w-5/12 flex flex-col items-center">
                        <img
                            src={heroimage}
                            alt="CARFAX Fox Mascot and Reports"
                            className="max-w-full h-auto object-contain mb-10 w-3/4 lg:w-full"
                        />

                        {/* Stats Section */}
                        <div className="flex items-center justify-center gap-6 sm:gap-10 w-full">
                            {/* Stat 1 */}
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#8cc63f]">
                                    5+ Million
                                </div>
                                <div className="text-gray-600 text-sm sm:text-base">
                                    reports sold/year
                                </div>
                            </div>

                            {/* Vertical Divider */}
                            <div className="h-12 w-px bg-gray-300"></div>

                            {/* Stat 2 */}
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-[#8cc63f]">
                                    30+ Billion
                                </div>
                                <div className="text-gray-600 text-sm sm:text-base">
                                    data records
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CarfaxHero;