import React from 'react';
import fruadhero from '../assets/fruadhero.jpg'; // Replace with your actual car image
import svg from '../assets/svg.jpg'; // Replace with your actual SVG image
import svg1 from '../assets/svg1.jpg'; // Replace with your actual SVG image
import svg2 from '../assets/svg2.jpg'; // Replace with your actual SVG image
import mob from '../assets/mob.jpg'; // Replace with your actual mobile image
import mob1 from '../assets/mob1.jpg'; // Replace with your actual mobile image

const VinFraudPage = () => {
    return (
        <div className="font-sans text-gray-700 bg-white overflow-x-hidden">

            {/* =========================================
           SECTION 1: WHAT IS VIN FRAUD?
          ========================================= */}
            <section className="max-w-7xl mx-auto px-4 py-10 md:px-12 lg:px-20 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-8 md:my-20">
                    {/* Text Content - No Order Class needed (Default First) */}
                    <div>
                        <h1 className="text-3xl md:text-5xl text-gray-700 mb-6 font-bold leading-tight">
                            What is VIN Fraud?
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-600">
                            A car's <a href="#" className="text-blue-500 no-underline font-bold hover:underline">Vehicle Identification Number (VIN) </a> is like its own unique fingerprint. VIN fraud, or re-vinning, happens when a vehicle's VIN is illegally copied or "cloned" onto another vehicle. This is typically done in attempts to conceal or re-sell a stolen car.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-600">
                            CARFAX  offers tools that can help <strong>protect you against the impacts of VIN fraud</strong> and avoid costly mistakes.
                        </p>
                        <button className="w-full md:w-auto bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200 shadow-md">
                            Learn More
                        </button>
                    </div>

                    {/* Image Placeholder - No Order Class needed (Default Second/Right) */}
                    <div className="flex justify-center md:justify-end relative">
                        <div className="relative w-full max-w-lg">
                            <img src={fruadhero} alt="Car with VIN alert" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
           SECTION 2: RISKS OF VIN FRAUD (STATS)
          ========================================= */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 lg:px-20 border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-[150px] xl:gap-x-[190px] items-start">
                    {/* Left Text */}
                    <div className="mb-8 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl text-gray-700 mb-6 font-semibold">The risks of VIN fraud</h2>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                            In Canada, VIN fraud has become increasingly common in recent years and it's nearly <strong>impossible to detect without the help of experts.</strong> Cars with compromised VINs could be stolen or linked to other criminal activity, and owning one can be an enormous headache.
                        </p>
                    </div>

                    {/* Right Stats */}
                    <div className="space-y-8 md:space-y-6">
                        {/* Stat 1 */}
                        <div className="flex items-start">
                            <div className="mr-5 md:mr-10 lg:mr-16 mt-1 flex-shrink-0">
                                <img className="w-16 h-auto md:w-20" src={svg} alt="Stat Icon 1" />
                            </div>
                            <div>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-snug">Cars with possible <br /> cloned VINs ¹</p>
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex items-start">
                            <div className="mr-5 md:mr-10 lg:mr-16 mt-1 flex-shrink-0">
                                <img className="w-16 h-auto md:w-20" src={svg1} alt="Stat Icon 2" />
                            </div>
                            <div>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-snug">A car is stolen <br /> every 8 minutes ²</p>
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex items-start">
                            <div className="mr-5 md:mr-10 lg:mr-16 mt-1 flex-shrink-0">
                                <img className="w-16 h-auto md:w-20" src={svg2} alt="Stat Icon 3" />
                            </div>
                            <div>
                                <p className="text-lg md:text-xl text-gray-700 font-medium leading-snug">Canadians affected by <br /> auto theft in the past year ³</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
           SECTION 3: RISKS TO CAR BUYERS
          ========================================= */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl text-gray-700 mb-4 font-semibold">Risks to car buyers</h2>
                <p className="text-gray-600 text-lg md:text-xl mb-8">If you buy a car with a compromised VIN, you could face:</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Grey Box Content - Text Left/First */}
                    <div className="lg:col-span-2 text-base md:text-lg lg:text-xl bg-gray-50 p-6 md:p-8 rounded-lg">
                        <ul className="space-y-6 text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Car seizure by authorities:</strong> Police could confiscate the car permanently once they're made aware of its fraudulent VIN. That means you could lose your newly bought car, and all the money you just spent on it.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Insurance problems:</strong> Insurers may refuse to pay for repair or theft claims, and you could have issues getting the vehicle covered in the first place.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Reduced resale value:</strong> The car's resale value may be significantly less than what you paid for it, even if it's in great condition.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Inability to sell or trade in:</strong> Selling a car with a compromised VIN can be complicated, and you may have difficulties selling it at all.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Promo Card - Image Right/Second */}
                    <div className="flex flex-col items-center justify-start text-center md:text-left">
                        {/* Device Mockup Image Placeholder */}
                        <div className="w-48 md:w-64 lg:w-full mb-6">
                            <img className="w-full h-auto" src={mob} alt="Mobile Mockup" />
                        </div>

                        <p className="mb-6 text-gray-700 text-lg">Find out how CARFAX Canada's <strong>VIN Fraud Check</strong> can help you avoid buying a stolen car.</p>
                        <button className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-2 px-8 rounded transition duration-200 mb-4 w-full md:w-auto shadow-sm">
                            Learn More
                        </button>
                        <a href="#" className="text-[#0091ea] no-underline text-md font-semibold hover:underline block w-full text-center md:w-auto">View Sample Report</a>
                    </div>
                </div>
            </section>


            {/* =========================================
           SECTION 4: RISKS TO CAR OWNERS
          ========================================= */}
            <section className="max-w-7xl mx-auto px-4 py-12 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl text-gray-800 mb-4 font-semibold">Risks to car owners</h2>
                <p className="text-gray-600 text-lg md:text-xl mb-8">If your car's VIN gets cloned and used on another vehicle, you could face:</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                    {/* Grey Box Content - Text Left/First */}
                    <div className="lg:col-span-2 text-base md:text-lg lg:text-xl bg-gray-50 p-6 md:p-8 rounded-lg">
                        <ul className="space-y-6 text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Registration problems:</strong> You may have trouble renewing your registration if another car is already registered under the same VIN, even if yours is the legitimate one. This might result in being unable to legally drive your car until the issue is resolved.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Insurance problems:</strong> If a claim is filed for a different car with the same VIN, your insurance provider may refuse to cover your claims, even though yours is the legitimate car.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Reduced resale value:</strong> Your car's resale value could take a hit if its VIN is being used on a potentially stolen vehicle.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-gray-800 rounded-full w-1.5 h-1.5 mt-2.5 mr-3 flex-shrink-0"></span>
                                <span><strong>Legal trouble:</strong> Car thieves copy VINs to mask stolen cars. You could be falsely linked to criminal activity related to the other car with the cloned VIN and end up in a messy legal procedure.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Promo Card - Image Right/Second */}
                    <div className="flex flex-col items-center justify-start text-center">
                        {/* Device Mockup Image Placeholder */}
                        <div className="w-48 md:w-64 lg:w-full mb-6">
                            <img src={mob1} alt="Mobile Mockup 2" className="w-full h-auto" />
                        </div>

                        <p className="mb-6 text-gray-700 text-lg">Find out how CARFAX Canada's <strong>Vehicle Monitoring</strong> can help you track critical details about your car.</p>
                        <button className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-2 px-8 rounded transition duration-200 mb-4 w-full md:w-auto shadow-sm">
                            Learn More
                        </button>
                        <a href="#" className="text-[#0091ea] no-underline text-md font-semibold hover:underline block w-full text-center md:w-auto">View Sample Report</a>
                    </div>
                </div>
            </section>


            {/* =========================================
           SECTION 5: BOTTOM CTA
          ========================================= */}
            <section className="max-w-7xl mx-auto px-4 py-16 md:px-12 lg:px-20 border-t border-gray-100 mt-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-2 leading-tight">Avoid becoming a victim of VIN fraud</h2>
                <p className="text-gray-600 text-xl md:text-2xl mb-12 mt-4">Protect yourself from the impacts of VIN fraud with helpful tools from CARFAX Canada, the vehicle data experts.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left CTA */}
                    <div>
                        <h4 className="font-semibold text-gray-600 mb-1 text-lg">Considering buying a used car?</h4>
                        <h4 className="text-gray-600 mb-4 text-xl">Discover <strong>VIN Fraud Check.</strong></h4>
                        <p className="text-gray-700 mb-6 text-lg max-w-md">
                            Avoid a potentially disastrous purchase with a report that scans billions of data records to check if a car's VIN has been <strong>compromised or reported stolen.</strong>
                        </p>
                        <button className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-2 px-8 rounded transition duration-200 mb-3 w-full md:w-auto">
                            Learn More
                        </button>
                        <div className="mt-2 text-center md:text-left">
                            <a href="#" className="text-[#0091ea] no-underline hover:underline text-md font-semibold">View Sample Report</a>
                        </div>
                    </div>

                    {/* Right CTA */}
                    <div>
                        <h4 className="font-semibold text-gray-600 mb-1 text-lg">Looking to monitor a car you own?</h4>
                        <h4 className="text-gray-600 mb-4 text-xl">Discover <strong>Vehicle Monitoring.</strong></h4>
                        <p className="text-gray-700 mb-6 text-lg max-w-md">
                            Receive <strong>timely alerts and monthly status updates</strong> that can help you detect signs of fraud early and stay up to date on your car's data.
                        </p>
                        <button className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-2 px-8 rounded transition duration-200 mb-3 w-full md:w-auto">
                            Learn More
                        </button>
                        <div className="mt-2 text-center md:text-left">
                            <a href="#" className="text-[#0091ea] no-underline text-md font-semibold hover:underline">View Sample Report</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default VinFraudPage;