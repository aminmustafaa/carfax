import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
// Make sure to have your Car Fox image in your project
import foxx from '../assets/foxx.jpg';
// Import the image for the new Hero section
// import fruadhero from '../Images/fruadhero.jpg';
import carr from '../assets/carr.jpg';
import { useNavigate } from 'react-router-dom';

const Learn = () => {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/Get-Report');
    };

    return (
        <div className="font-sans text-gray-700 bg-white">

            {/* =========================================
                SECTION 1: HERO (Steer Clear)
               ========================================= */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h1 className="text-3xl md:text-4xl  text-gray-800 mb-6 leading-relaxed">
                            Steer clear of auto fraud, <br />
                            with VIN Fraud Check.
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Unknowingly buying a car with a fraudulent VIN can land you in deep financial trouble. That car could be stolen or uninsurable. And once you buy it, its problems become your problems.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            CARFAX VIN Fraud Check can help <strong className="font-bold text-gray-800">detect fraud before you buy</strong>, saving you from a potentially disastrous purchase.
                        </p>
                        <button onClick={handleClick1} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded transition duration-200 shadow-sm">
                            Buy Now
                        </button>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center md:justify-end">
                        <div className="w-full max-w-lg">
                            <img
                                src={carr}
                                alt="Car with fraud alert icons"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* =========================================
                SECTION 2: DETECTION INFO
               ========================================= */}



            {/* =========================================
                SECTION 3: FAQ
               ========================================= */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-20 border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                    {/* Left: Heading */}
                    <div className="md:col-span-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* Right: Accordion */}
                    <div className="md:col-span-8">
                        <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                            {faqData.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    question={item.question}
                                    // Dummy answer since image didn't show answers
                                    answer="The VIN Fraud Check report provides detailed analysis of the vehicle's history to identify inconsistencies."
                                    isLast={index === faqData.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
                SECTION 4: BOTTOM CTA (Protect Yourself)
               ========================================= */}
            <section className="max-w-4xl mx-auto px-6 py-16 md:px-12 text-center">
                {/* Car Fox Image */}
                <div className="flex justify-center ">
                    <div className="w-48 h-48 md:w-96 md:h-96 relative -mb-4 md:-mb-24">
                        <img
                            src={foxx}
                            alt="Car Fox Mascot"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                    Protect yourself from VIN fraud
                </h2>

                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Don't leave it to chance. Detect fraud before you buy a used vehicle with a VIN Fraud Check report and drive away with confidence.
                </p>

                <button onClick={handleClick1} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-12 rounded transition duration-200 shadow-sm">
                    Buy Now
                </button>
            </section>

        </div>
    );
};

// --- Helper Components & Data ---

const ListItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" strokeWidth={3} />
        <span className="text-gray-600">{text}</span>
    </li>
);

const AccordionItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`p-4 ${!isLast ? 'border-b border-gray-200' : ''} bg-white transition-colors hover:bg-gray-50`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-[#0091ea] font-semibold text-sm md:text-base pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

// Exact questions from the screenshot
const faqData = [
    { question: "What do I receive after purchasing a VIN Fraud Check report?" },
    { question: "How does VIN Fraud Check know if a vehicle is stolen or fraudulent?" },
    { question: "Will I receive ongoing updates after the first fraud check?" },
    { question: "How does VIN Fraud Check differ from Vehicle Monitoring?" },
    { question: "How does VIN Fraud Check differ from a Vehicle History Report?" },
    { question: "Does VIN Fraud Check prevent auto theft or fraud?" },
    { question: "Does CARFAX provide any kind of financial compensation if my vehicle is impacted by theft or fraud?" },
    { question: "Can I run a VIN Fraud Check for any vehicle type?" },
];

export default Learn;