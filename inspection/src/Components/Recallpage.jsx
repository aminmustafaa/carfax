import React, { useState } from 'react';
import VinLocationSection from './VinLocationSection';

// --- Helper Component: Brand Group ---
const BrandGroup = ({ letter, brands }) => (
    <div className="space-y-3">
        <div className="flex flex-col items-start w-min">
            <span className="font-bold text-blue-500 text-lg">{letter}</span>
            <div className="h-0.5 w-full bg-blue-300 mt-1"></div>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
            {brands.map((brand, idx) => (
                <li key={idx} className="cursor-pointer hover:text-blue-500 transition-colors">
                    {brand}
                </li>
            ))}
        </ul>
    </div>
);

// --- Helper Component: FAQ Accordion ---
const AccordionItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`p-5 ${!isLast ? 'border-b border-gray-200' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-blue-500 font-medium group-hover:text-blue-600">{question}</span>
                <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    )}
                </div>
            </button>
            {isOpen && (
                <div className="mt-3 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {answer}
                </div>
            )}
        </div>
    );
};

// --- Main Page Component ---
const RecallCheckPage = () => {
    const [activeTab, setActiveTab] = useState('Q-Z');

    // Sample data for the Q-Z tab based on the screenshot
    const manufacturersQZ = {
        R: ['RAM', 'Rolls-Royce'],
        S: ['Saab', 'Saturn', 'Smart', 'Subaru', 'Suzuki'],
        T: ['Tesla', 'Toyota'],
        V: ['Volkswagen', 'Volvo'],
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-700 p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* =========================================
            SECTION 1: HERO & INPUT
           ========================================= */}
                <section className="flex flex-col md:flex-row items-center justify-between gap-20">
                    <div className="w-full md:w-1/2 my-20 py-20 space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-5xl  text-gray-700 leading-tight">
                                Free Safety Recall Check
                            </h1>
                            <p className="text-lg text-gray-600">
                                Search vehicle recall and safety issues by VIN.
                            </p>
                        </div>

                        <div className="flex gap-4 items-center">
                            <input
                                type="text"
                                placeholder="Enter your 17 character VIN"
                                className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="bg-blue-300 hover:bg-blue-400 text-white font-medium px-6 py-3 rounded transition-colors duration-200">
                                Check for Open Recalls
                            </button>
                        </div>
                    </div>

                    <div className="w-full max-w-xl flex justify-end relative">
                        <div className="relative max-w-md">
                            {/* Placeholder for the Muffler/Exhaust image */}
                            <img
                                src="https://placehold.co/600x400/e2e8f0/94a3b8?text=Muffler+Image"
                                alt="Muffler with recall notification icon"
                                className="w-full h-auto object-contain"
                            />
                            {/* Red Notification Icon Overlay (simulated) */}
                            <div className="absolute top-0 right-10 bg-red-500 rounded-full p-2 border-4 border-white shadow-lg transform -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =========================================
            SECTION 2: FIND OPEN RECALLS (STATS)
           ========================================= */}
                <section className="flex flex-col md:flex-row justify-between gap-12 border-b border-gray-400 pb-20">
                    <div className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-2xl md:text-3xl  text-gray-700">
                            Find open safety recalls, and safety risks for your vehicle.
                        </h2>
                        <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
                            <p>
                                Unfixed recalls are more common than you may think. In fact, 1 in 6 vehicles that have been checked for a recall have reported at least one.
                            </p>
                            <p>
                                Recalls can range from malfunctioning airbags to electrical issues that can cause a fire, which is why checking your current vehicle for any unfixed recalls is important.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-4">
                        <div className="relative text-blue-500 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9" /><path d="M10 10h4" /><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.6 5h-7.2a2 2 0 0 0-1.9 1.3L5 10 3 8" /><path d="M3 8h18v2a2 2 0 0 1-2 2v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4a2 2 0 0 1-2-2Z" /><path d="M12 12v-2" /><path d="M12 14h.01" /></svg>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" /></svg>
                            </div>
                        </div>
                        <p className="gap-20 text-gray-700 text-start text-xl font-medium">
                            1 in 6 vehicles searched have an unfixed safety recall.
                        </p>
                    </div>
                </section>


                {/* =========================================
            SECTION 3: SUPPORTED MANUFACTURERS
           ========================================= */}
                <section className="space-y-8 my-20 py-20">
                    <div className="space-y-8">
                        <h2 className="text-2xl md:text-3xl  text-gray-700">
                            What vehicle makes can the CARFAX Canada Recall Check search?
                        </h2>
                        <p className="text-gray-600 text-xl">
                            We are able to find recalls for the following manufacturers:
                        </p>
                    </div>

                    <div className="flex gap-8 border-b border-gray-200 mb-12">
                        {['A-H', 'I-P', 'Q-Z'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 px-4 font-medium transition-colors ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column: Grid */}
                        <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8">
                            {activeTab === 'Q-Z' ? (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                    <BrandGroup letter="R" brands={manufacturersQZ.R} />
                                    <BrandGroup letter="S" brands={manufacturersQZ.S} />
                                    <BrandGroup letter="T" brands={manufacturersQZ.T} />
                                    <BrandGroup letter="V" brands={manufacturersQZ.V} />
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-12">
                                    Content for {activeTab} would appear here...
                                </div>
                            )}
                        </div>

                        {/* Right Column: Disclaimer */}
                        <div className="w-full xl:w-1/3 space-y-6 text-md text-gray-600 leading-relaxed">
                            <p>
                                We strive to provide Canadians with the most information about their vehicles, and we are continually working to add more manufacturers to our recall check.
                            </p>
                            <p>
                                However, we are currently unable to provide checks for the following manufacturers, and recommend going to the manufacturer website for information:
                            </p>
                            <p className="space-x-1 text-blue-500">
                                <a href="#" className="hover:underline inline-flex items-center">BrightDrop <span className="text-xs ml-0.5">↗</span></a>,
                                <a href="#" className="hover:underline inline-flex items-center">Fisker <span className="text-xs ml-0.5">↗</span></a>,
                                <a href="#" className="hover:underline inline-flex items-center">Spyker <span className="text-xs ml-0.5">↗</span></a>, and
                                <a href="#" className="hover:underline inline-flex items-center">VinFast <span className="text-xs ml-0.5">↗</span></a>.
                            </p>
                        </div>
                    </div>
                </section>


                <VinLocationSection />

                {/* =========================================
            SECTION 4: MASCOT CTA
           ========================================= */}
                <section className="flex flex-col items-center space-y-6 py-12 text-center border-t border-gray-100">
                    <div className="w-32 h-32 md:w-40 md:h-40 relative">
                        <img
                            src="https://placehold.co/300x300/white/orange?text=Mascot+Holding+Paper"
                            alt="Car Fox Mascot holding report"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="space-y-6 max-w-xl">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-700">
                            Know the history and the recalls.
                        </h3>
                        <p className="text-gray-600">
                            With a CARFAX Canada Vehicle History Report you can see a broader picture of a vehicle and find out more about its past.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded shadow-sm transition-all">
                            Get Report
                        </button>
                    </div>
                </section>


                {/* =========================================
            SECTION 5: FAQ (Updated)
           ========================================= */}
                <section className="space-y-8 pb-20 border-t border-gray-100 pt-16">
                    <h2 className="text-2xl font-bold text-gray-700">
                        Frequently Asked Questions
                    </h2>

                    <div className="border border-gray-200 rounded-lg bg-white">
                        <AccordionItem
                            question="How can I check if my vehicle has a recall for free?"
                            answer="You can check for recalls for free by entering your 17-character VIN in the search box above. We will search our database for any open safety recalls reported by the manufacturer."
                        />
                        <AccordionItem
                            question="What information does the recall check provide?"
                            answer="The check provides information on open safety recalls, including the recall date, campaign number, and a description of the safety risk and remedy."
                        />
                        <AccordionItem
                            question="How often is recall data updated?"
                            answer="Recall data is updated regularly as we receive information from vehicle manufacturers."
                            isLast={true}
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default RecallCheckPage;