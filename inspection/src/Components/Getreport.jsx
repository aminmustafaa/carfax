import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import foxx from '../assets/foxx.jpg';

const PricingPage = () => {

    const navigate = useNavigate();
    const { vin } = useParams(); // Get VIN from URL
    const [inputValue, setInputValue] = useState(vin || '');
    const [carDetails, setCarDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // --- 1. SEARCH LOGIC (Direct Free API Call) ---
    // Defined BEFORE useEffect to prevent errors
    const fetchCarDetails = async (searchVin) => {
        setLoading(true);
        setError('');
        setCarDetails(null);

        try {
            // DIRECT CALL TO FREE PUBLIC NHTSA API
            // No backend server required for this step
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${searchVin}?format=json`);
            const data = await response.json();

            // The API always returns 200 OK, so we must check the data inside
            if (data.Results && data.Results[0]) {
                const car = data.Results[0];

                // Verify that the API actually found a Make/Model (Valid VIN)
                // Sometimes it returns success with empty fields for invalid VINs
                if (car.Make && car.Model) {
                    const fullName = `${car.ModelYear || ''} ${car.Make} ${car.Model} ${car.Trim || ''}`;
                    setCarDetails(fullName);
                } else {
                    setError('Vehicle not found. Please check the VIN.');
                }
            } else {
                setError('Invalid VIN format.');
            }
        } catch (err) {
            console.error(err);
            setError('Connection failed. Please check your internet.');
        } finally {
            setLoading(false);
        }
    };

    // --- 2. INITIAL LOAD ---
    useEffect(() => {
        if (vin && vin.length === 17) {
            fetchCarDetails(vin);
        }
    }, [vin]);

    // --- 3. HANDLERS ---
    const handleSubmit = () => {
        if (inputValue.length === 17) {
            fetchCarDetails(inputValue);
        } else {
            setError('Please enter a valid 17-character VIN.');
        }
    };

    const handleBuyClick = (planName, price) => {
        // Pass the details to Checkout. 
        // The "Full Report Generation" & "Emailing" will happen AFTER payment on the next page.
        navigate('/checkout', {
            state: {
                planName: planName,
                price: price,
                vin: inputValue,
                carName: carDetails // We pass the found car name to the checkout summary
            }
        });
    };

    const isInputValid = inputValue.length === 17;

    // --- 4. JSX / RENDER ---
    return (
        <div className="min-h-screen bg-white font-sans text-gray-700">

            {/* TOP BAR / SEARCH SECTION */}
            <div className="bg-white py-6 mb-12">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* RESULT SECTION (Left on Desktop) */}
                    <div className="flex-1 flex justify-start w-full md:w-auto order-2 md:order-1">
                        {loading ? (
                            <div className="flex items-center text-gray-500 gap-2 text-base">
                                <span className="animate-spin h-5 w-5 border-2 border-gray-300 border-t-blue-600 rounded-full"></span>
                                <span>Searching database...</span>
                            </div>
                        ) : error ? (
                            <div className="text-red-500 text-base font-medium">{error}</div>
                        ) : carDetails ? (
                            <div className="flex items-center gap-3 text-lg">
                                <div className="bg-green-100 p-1 rounded-full text-green-600 flex-shrink-0">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <span className="text-gray-600">
                                    We found additional information about this <span className="font-bold text-gray-800">{carDetails}</span>
                                </span>
                            </div>
                        ) : (
                            /* Empty placeholder to keep layout stable */
                            <div className="hidden md:block"></div>
                        )}
                    </div>

                    {/* INPUT SECTION (Right on Desktop) */}
                    <div className="flex items-center w-full md:w-auto order-1 md:order-2">
                        <div className="relative flex-grow md:flex-grow-0 w-full md:w-auto">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value.toUpperCase())}
                                maxLength={17}
                                placeholder="Enter VIN"
                                className="border border-gray-300 rounded-l-lg px-4 py-2 text-base w-full md:w-70 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 uppercase tracking-wider"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-.846.466-1.625 1.15-2.009a2.25 2.25 0 00.53-.364c.89-.777.89-2.036 0-2.814zM12 18.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={!isInputValid}
                            className={`text-white font-bold px-8 py-2 rounded-r-lg text-base transition-colors ${isInputValid
                                ? "bg-[#009bf1] hover:bg-[#008bd9] cursor-pointer"
                                : "bg-blue-200 cursor-not-allowed"
                                }`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-6 pb-20">

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-medium text-gray-700 mb-4 tracking-tight">
                        Order Your Vehicle History Report + Lien Check Today
                    </h1>
                    <p className="text-gray-600 text-base">
                        World's most comprehensive vehicle report now includes a FREE History-Based Value!<sup>1</sup>
                        <a href="/learn" className="text-[#009bf1] hover:underline ml-1 no-underline font-medium">Learn More ↗</a>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-6xl mx-auto">
                    {/* CARD 1: ESSENTIAL */}
                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-[#8cc63f] text-white text-center py-3 font-bold text-base uppercase tracking-wide">
                            Essential
                        </div>

                        <div className="p-10 text-center flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gray-700 mb-8 leading-tight">
                                Vehicle History Report <br /> + Lien Check
                            </h2>

                            <div className="mt-auto">
                                <div className="flex justify-center items-start text-gray-800 font-bold mb-8">
                                    <span className="text-3xl mt-2">$</span>
                                    <span className="text-7xl leading-none">45</span>
                                    <sup className="text-3xl mt-2">75</sup>
                                </div>
                                <button
                                    onClick={() => handleBuyClick("Vehicle History Report + Lien Check", 45.95)}
                                    className="w-1/2 bg-[#009bf1] hover:bg-[#008bd9] text-white font-bold py-3 rounded text-lg mb-5 transition-colors"
                                >
                                    Buy Now
                                </button>
                                <p className="text-sm text-gray-500 mb-1">Check the history and see if there's money owing.</p>
                                <Link
                                    to="/sample-report"
                                    className="text-sm text-[#009bf1] font-medium no-underline hover:underline"
                                >
                                    View sample report
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: BEST DEAL */}
                    <div className="bg-white rounded-lg border border-gray-300 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-white text-[#009bf1] text-center py-3 font-bold text-base uppercase tracking-wide pt-6">
                            Best Deal
                        </div>

                        <div className="px-10 pb-10 pt-4 text-center flex-1 flex flex-col">
                            <h2 className="text-xl font-bold text-gray-700 mb-8 leading-tight">
                                3 Vehicle History Reports <br /> + 1 Lien Check
                            </h2>

                            <div className="mt-auto">
                                <div className="flex justify-center items-start text-gray-800 font-bold mb-2">
                                    <span className="text-3xl mt-2">$</span>
                                    <span className="text-7xl leading-none">146</span>
                                    <sup className="text-3xl mt-2">95</sup>
                                </div>
                                <div className="text-sm text-gray-500 font-bold mb-8">
                                    25% Off <span className="line-through font-normal">$195.85</span>
                                </div>

                                <button
                                    onClick={() => handleBuyClick("3 Vehicle History Reports + 1 Lien Check", 146.95)}
                                    className="w-1/2 bg-[#009bf1] hover:bg-[#008bd9] text-white font-bold py-3 rounded text-lg mb-5 transition-colors"
                                >
                                    Buy Now
                                </button>

                                <p className="text-sm text-gray-500 mb-1">Check the history of 3 vehicles for one low price!</p>
                                <Link
                                    to="/sample-report"
                                    className="text-sm text-[#009bf1] font-medium no-underline hover:underline"
                                >
                                    View sample report
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM HORIZONTAL CARD */}
                <div className="max-w-6xl mx-auto bg-white rounded-lg border border-gray-300 p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm mb-20">
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-gray-700 mb-3">Vehicle History Report</h3>
                        <p className="text-sm text-gray-500 mb-3 leading-relaxed max-w-2xl">
                            This report excludes a lien check. Before selecting this option, be sure to check there's no lien on the car to avoid getting stuck with someone else's debt.
                        </p>
                        <Link
                            to="/sample-report"
                            className="text-sm text-[#009bf1] font-medium no-underline hover:underline"
                        >
                            View sample report
                        </Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end min-w-[160px]">
                        <div className="flex items-start text-gray-800 font-bold mb-4">
                            <span className="text-2xl mt-1">$</span>
                            <span className="text-5xl leading-none">58</span>
                            <sup className="text-2xl mt-1">95</sup>
                        </div>
                        <button
                            onClick={() => handleBuyClick("Vehicle History Report", 58.95)}
                            className="bg-[#009bf1] hover:bg-[#008bd9] text-white font-bold py-3 px-10 rounded text-base transition-colors whitespace-nowrap"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* MASCOT & FEATURES SECTION */}
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex justify-center ">
                        <div className="w-48 h-48 md:w-96 md:h-96 relative -mb-4 md:-mb-24">
                            <img
                                src={foxx}
                                alt="Car Fox Mascot"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-700 mb-10 relative z-0">
                        Every Vehicle History Report + Lien Check searches for...
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-4 text-left text-sm text-gray-600 max-w-5xl mx-auto px-4">
                        <div className="space-y-4">
                            <FeatureItem text="Accident history" />
                            <FeatureItem text="Frame or structural damage" />
                            <FeatureItem text="Damage location" />
                            <FeatureItem text="Weather damage" />
                            <FeatureItem text="Repair estimates & costs" />
                        </div>

                        <div className="space-y-4">
                            <FeatureItem text="Unfixed safety recalls" />
                            <FeatureItem text="Service records" />
                            <FeatureItem text="Tire rotation" />
                            <FeatureItem text="Brake replacements" />
                            <FeatureItem text="Oil changes" />
                        </div>

                        <div className="space-y-4">
                            <FeatureItem text={<span>Money owing on the vehicle (lien)<sup>2</sup></span>} />
                            <FeatureItem text="Vehicle theft" />
                            <FeatureItem text="Rebuild or salvage title" />
                            <FeatureItem text="Odometer reading" />
                            <FeatureItem text="And more!" bold />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const FeatureItem = ({ text, bold }) => (
    <div className="flex items-start gap-3">
        <div className="min-w-[16px] mt-0.5 text-cyan-300">
            <Check size={20} strokeWidth={4} color="#8ae1fc" />
        </div>
        <span className={bold ? "font-bold text-gray-800" : ""}>{text}</span>
    </div>
);

export default PricingPage;