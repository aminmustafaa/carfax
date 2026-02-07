import React from 'react';
import historyReportImage from '../Images/history.jpg';
import icon1 from '../Images/damage-icon.jpg';
import icon2 from '../Images/unfixed-recall-icon.jpg';
import icon3 from '../Images/lien-icon.jpg';
import { useNavigate } from 'react-router-dom';

const VehicalHistoryReport = () => {

    const navigate = useNavigate();

    // Placeholder variables to prevent crash (since they weren't in your snippet)
    const inputValue = "";
    const carDetails = "";

    const handleClick = () => {
        navigate('/Get-Report');
    }

    const handleClick1 = () => {
        navigate('/sample-report');
    }

    const handleClick2 = (planName, price) => {
        navigate('/checkout', {
            state: {
                planName: planName,
                price: price,
                vin: inputValue,
                carName: carDetails // We pass the found car name to the checkout summary
            }
        });
    }

    // --- EXISTING DATA ---
    const features = [
        "5+ million reports sold annually.",
        "30+ billion data records.",
        "FREE History-Based Value Report included."
    ];

    const stats = [
        {
            id: 1,
            text: "1 in 4 vehicles searched have damage or accident history.",
            icon: (
                <img src={icon1} alt="Damage Icon" className="w-16 h-10 md:w-20 md:h-12 text-grey-600" />
            )
        },
        {
            id: 2,
            text: "1 in 6 vehicles searched have an unfixed safety recall.",
            icon: (
                <img src={icon2} alt="Safety Recall Icon" className="w-16 h-10 md:w-20 md:h-12 text-grey-600" />
            )
        },
        {
            id: 3,
            text: "40% of vehicles searched have a current lien on them.",
            icon: (
                <img src={icon3} alt="Lien Icon" className="w-16 h-10 md:w-20 md:h-12 text-grey-700" />
            )
        }
    ];

    // --- NEW DATA: Pricing Plans ---
    const plans = [
        {
            id: 1,
            title: 'Essential',
            headerColor: 'bg-[#8cc63f] text-white',
            subtitle: 'Vehicle History Report + Lien Check',
            description: "Our most comprehensive report searches for any associated history and if there's any money owing (lien) on a vehicle.",
            price: '72.95',
            oldPrice: '77.95',
            isSpecial: true,
            offerLabel: 'SPECIAL OFFER! $5 OFF',
        },
        {
            id: 2,
            title: 'Best Deal',
            headerColor: 'bg-white text-[#0091ea]',
            subtitle: '3 Vehicle History Reports + 1 Lien Check',
            description: "Buying a car can be tough, but this product makes it easy so you can shop around and pick the car that's the right fit for you.",
            price: '146.95',
            originalValue: '195.85',
            discountLabel: '25% Off',
        }
    ];

    // --- NEW DATA: Checklist Items ---
    const checklistItems = [
        "Accident history", "Unfixed safety recalls", "Money owing on the vehicle (lien)*",
        "Frame or structural damage", "Service history", "Vehicle theft",
        "Damage location", "Tire rotation", "Rebuild or salvage title",
        "Weather damage", "Brake replacements", "Odometer reading",
        "Repair estimates & costs", "Oil changes", "and more!"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* =========================================
                SECTION 1: HERO (Existing)
               ========================================= */}
            <section className="py-12 px-4 md:py-20 md:px-12 lg:px-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="flex flex-col items-start order-2 lg:order-1">
                        <h1 className="text-3xl md:text-4xl leading-tight mb-6 font-bold text-gray-800">
                            Get the Vehicle History Report <br className="hidden md:block" />
                            Trusted by Canadians.
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-lg">
                            Join the millions of customers that rely on our insights for their used vehicle decisions.
                        </p>
                        <ul className="space-y-4 mb-10 w-full">
                            {features.map((text, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                                        <svg className="w-5 h-5 text-cyan-400 stroke-[4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 text-lg md:text-xl">{text}</span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleClick}
                            className="bg-[#0091ea] hover:bg-blue-600 transition-all text-white px-8 py-3 rounded-md text-lg font-bold shadow-md w-full md:w-auto">
                            Get Report
                        </button>
                    </div>

                    <div className="w-full flex flex-col items-center order-1 lg:order-2">
                        <img
                            src={historyReportImage}
                            alt="CARFAX Fox Mascot"
                            className="max-w-full h-auto object-contain mb-8 lg:mb-0"
                        />
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 2: WHY BUY (Existing)
               ========================================= */}
            <section className="py-12 md:py-20 px-4 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
                        <div className="md:col-span-4">
                            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">Why buy a Vehicle <br className="hidden md:block" /> History Report?</h2>
                        </div>
                        <div className="md:col-span-8 space-y-6 text-lg md:text-xl text-slate-600 leading-relaxed">
                            <p>
                                It’s more than records about a vehicle. It’s a way to know you’re making the right choice, a way to reinforce that your gut was correct. A sigh of relief that you know the vehicle’s past before you drive away with it. It shows a prospective buyer that it’s what you say it is.
                            </p>
                            <p>
                                The CARFAX Canada Vehicle History Report has the data you need to help you make the
                                right decision for you and your car.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 md:ml-[33.33%]">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-start space-y-4">
                                {stat.icon}
                                <p className="text-slate-700 font-bold text-sm leading-snug max-w-[200px]">
                                    {stat.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 3: PRICING (New - Matched to Image 1)
               ========================================= */}
            <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-10">
                        Which Vehicle History Report should I get?
                    </h2>

                    {/* UPDATED GRID: grid-cols-1 on mobile, 2 on medium, 3 on large */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`flex flex-col h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300`}
                            >

                                {/* Header with Underline added (border-b-4 border-gray-100) */}
                                <div className={`w-full text-center py-3 ${plan.headerColor} font-bold tracking-wide text-sm uppercase border-b-2 border-gray-200`}>
                                    {plan.title}
                                </div>

                                {/* Body */}
                                <div className="p-4 flex flex-col items-center text-center flex-grow">
                                    <h3 className="text-xl text-gray-600 mb-4 min-h-[50px] md:h-20 flex items-center justify-center">
                                        {plan.subtitle}
                                    </h3>

                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                                        {plan.description}
                                    </p>

                                    {/* Special Offer Banner */}
                                    {plan.offerLabel && (
                                        <div className="mb-4 bg-[#54585a] text-white text-xs font-bold py-1 px-8 relative">
                                            <div className="transform -skew-x-12">{plan.offerLabel}</div>
                                        </div>
                                    )}

                                    {/* Price Section */}
                                    <div className="mt-auto mb-6">
                                        {plan.oldPrice && (
                                            <span className="text-gray-400 line-through text-xl md:text-2xl font-bold mr-2">
                                                ${plan.oldPrice}
                                            </span>
                                        )}
                                        <span className="text-gray-700 text-3xl md:text-4xl font-extrabold">
                                            ${plan.price}
                                        </span>

                                        {/* Discount Label */}
                                        {plan.discountLabel && (
                                            <p className="text-gray-500 text-xs mt-1 font-semibold">
                                                {plan.discountLabel} <span className="line-through">${plan.originalValue}</span>
                                            </p>
                                        )}
                                    </div>

                                    <button onClick={() => handleClick2(plan.title, plan.price)} className="w-full md:w-32 bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-200 mb-4">
                                        Buy Now
                                    </button>

                                    <a href="#" onClick={(e) => { e.preventDefault(); handleClick1(); }} className="no-underline text-[#0091ea] text-xs font-semibold hover:underline">
                                        View sample report
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 4: FEATURES CHECKLIST (New - Matched to Image 2)
               ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-10">
                        Every Vehicle History Report + Lien Check searches for...
                    </h2>

                    {/* UPDATED GRID: 1 col mobile, 2 cols sm, 3 cols md */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-left max-w-5xl mx-auto mb-12">
                        {checklistItems.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                {/* Light Blue Checkmark */}
                                <svg className="w-5 h-5 text-[#81d4fa] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className={`text-gray-600 text-base md:text-lg ${item === 'and more!' ? 'font-bold text-gray-800' : ''}`}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button onClick={handleClick} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded transition duration-200 shadow-sm w-full md:w-auto">
                        Get Report
                    </button>
                </div>
            </section>

            {/* =========================================
                SECTION 5: BOTTOM CTA (New - Matched to Image 2 Bottom)
               ========================================= */}
            <section className="py-16 md:py-20 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mb-8 leading-snug">
                        Still not sure which Vehicle History Report is right for you?
                    </h2>
                    <button onClick={handleClick1} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded transition duration-200 w-full md:w-auto">
                        View Sample Report
                    </button>
                </div>
            </section>

        </div>
    );
};

export default VehicalHistoryReport;