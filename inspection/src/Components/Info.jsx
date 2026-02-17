import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturesSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sample-report');
    }

    const cards = [
        {
            title: "Vehicle Damage",
            borderColor: "border-[#1ABC9C]", // Teal color
            items: [
                "Accident history",
                "Frame or structural damage",
                "Damage location",
                "Weather damage",
                "Repair estimates and costs"
            ]
        },
        {
            title: "Safety & Service",
            borderColor: "border-[#0084FF]", // Bright Blue color
            items: [
                "Unfixed safety recalls",
                "Service history",
                "Tire rotation",
                "Brake replacements",
                "Oil changes"
            ]
        },
        {
            title: "Other Essential Details",
            borderColor: "border-[#87CEEB]", // Light Sky Blue color
            items: [
                "Money owing on the vehicle (lien)",
                "Vehicle theft",
                "Rebuild or salvage title",
                "Odometer reading",
                { text: "and more!", isLink: true } // Special handling for the link
            ]
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-8xl mx-auto">

                {/* --- Header Text --- */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-xl font-bold text-gray-600 mb-4">
                        Get the vehicle history report People Worldwide trust.
                    </h2>
                    <p className="text-xl text-gray-600">
                        Every CARFAX Vehicle History Report + Lien Check searches for:
                    </p>
                </div>

                {/* --- Cards Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ${card.borderColor} border-t-[6px] h-full flex flex-col`}
                        >
                            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                                {card.title}
                            </h3>
                            <ul className="space-y-1">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="mr-3 text-gray-400 mt-1.5 h-1.5 w-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                                        {typeof item === 'string' ? (
                                            <span className="text-gray-700">{item}</span>
                                        ) : (
                                            <a href="#" className="text-[#0084FF] font-medium hover:underline">
                                                {item.text}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- Bottom Button --- */}
                <div className="text-center">
                    <button onClick={handleClick} className="bg-[#0084FF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm">
                        View Sample Report
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;