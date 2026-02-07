import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import cab from '../images/cab.jpg';
import cab1 from '../images/cab1.jpg';
import carfox from '../images/carfox.jpg';
import PricingPage from '../Components/Getreport.jsx';
// import vin from '../images/vin.jpg'; // Unused

const VinDecoderPage = () => {
    const [vehicleTab, setVehicleTab] = useState('A-J');


    const [vin, setVin] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To show loading state
    const navigate = useNavigate(); // Hook to change pages


    const handleClick = () => {
        navigate('/get-report');
    };


    const isValidVin = vin.length === 17;

    // --- THE LOGIC YOU ASKED FOR ---
    const handleSearch = async () => {
        if (!isValidVin) return;

        setIsLoading(true);

        try {
            // 2. Search in API
            // Replace this URL with your actual API endpoint
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`);

            if (!response.ok) {
                throw new Error('VIN not found or invalid');
            }

            const data = await response.json();

            // 3. Route to Get Report Page
            // You can pass the VIN in the URL or pass the full data in state
            // Example 1: Route via URL Param (Best for sharing links)
            navigate(`/Get-Report/${vin}`);

            // Example 2: Route passing data (if you don't want VIN in url)
            // navigate('/report', { state: { vinData: data } });

        } catch (error) {
            console.error("Search failed:", error);
            alert("Could not find this VIN. Please check and try again.");
        } finally {
            setIsLoading(false);
        }
    };



    const tableData = [
        { col1: "A - 1980, 2010", col2: "L - 1990, 2020", col3: "Y - 2000" },
        { col1: "B - 1981, 2011", col2: "M - 1991, 2021", col3: "1 - 2001" },
        { col1: "C - 1982, 2012", col2: "N - 1992, 2022", col3: "2 - 2002" },
        { col1: "D - 1983, 2013", col2: "P - 1993, 2023", col3: "3 - 2003" },
        { col1: "E - 1984, 2014", col2: "R - 1994, 2024", col3: "4 - 2004" },
        { col1: "F - 1985, 2015", col2: "S - 1995, 2025", col3: "5 - 2005" },
        { col1: "G - 1986, 2016", col2: "T - 1996, 2026", col3: "6 - 2006" },
        { col1: "H - 1987, 2017", col2: "V - 1997, 2027", col3: "7 - 2007" },
        { col1: "J - 1988, 2018", col2: "W - 1998, 2028", col3: "8 - 2008" },
        { col1: "K - 1989, 2019", col2: "X - 1999, 2029", col3: "9 - 2009" },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-700 p-4 md:p-8 overflow-x-hidden">
            <div className="max-w-7xl mx-auto space-y-12 md:space-y-28">

                {/* =========================================
             SECTION 1: HERO & INPUT
            ========================================= */}
                <section className="flex flex-col mt-10 md:mt-20 md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl text-gray-700 font-bold">
                            Free VIN Decoder & Lookup
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                            You can decode a VIN (Vehicle Identification Number) to find out more about a vehicle before you buy, sell, or trade.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                            <input
                                type="text"
                                placeholder="Enter your 17-character VIN"
                                maxLength={17}
                                value={vin}
                                onChange={(e) => setVin(e.target.value)}
                                className={`
                                        w-full border rounded px-4 py-3 focus:outline-none focus:ring-2 
                                        ${vin.length > 0 && !isValidVin
                                        ? 'border-red-300 focus:ring-red-500 text-red-600'
                                        : 'border-gray-300 focus:ring-blue-400'
                                    }
                                    `}
                            />

                            <button
                                // 4. Attach the Click Handler
                                onClick={handleSearch}
                                disabled={!isValidVin || isLoading}
                                className={`
                    w-full sm:w-auto text-white font-medium px-8 py-3 rounded transition-colors duration-200 whitespace-nowrap flex justify-center items-center
                    ${isValidVin && !isLoading
                                        ? 'bg-blue-600 hover:bg-blue-700 shadow-lg cursor-pointer'
                                        : 'bg-blue-300 cursor-not-allowed'
                                    }
                `}
                            >
                                {/* Show Spinner if Loading, otherwise show "Decode" */}
                                {isLoading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    "Decode"
                                )}
                            </button>
                        </div>

                        {/* Error Message Logic */}
                        <div className="h-6"> {/* Placeholder to prevent jump */}
                            {vin.length > 0 && !isValidVin && (
                                <span className="text-red-500 text-sm block text-left">
                                    A valid VIN is 17 characters long.
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Removed ml-10, used w-full and responsive margins */}
                    <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
                        <div className="relative w-full max-w-md md:max-w-full">
                            <img
                                src={cab}
                                alt="Car with VIN location highlighted"
                                className="w-full h-auto object-contain"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 border-4 border-blue-400 rounded-full opacity-70"></div>
                        </div>
                    </div>
                </section>


                {/* =========================================
             SECTION 2: INFORMATION TEXT
            ========================================= */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-500 my-12 md:my-20 py-10 md:py-20 mb-10 md:mb-20">
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                            What is a VIN and why do I need a VIN Decode?
                        </h2>
                        <p className="leading-relaxed text-lg md:text-xl">
                            A vehicle's VIN is a unique 17-character identifier that is only ever associated with that vehicle. Each vehicle's accident, service, and recall history is tied to its VIN.
                        </p>
                        <p className="leading-relaxed text-lg md:text-xl">
                            A VIN decode helps you verify that the vehicle you are looking at is what you were expecting. This helps ensure that the history of the VIN in a vehicle history report matches the vehicle you are researching.
                        </p>
                    </div>

                    <div className="md:col-span-1 mt-6 md:mt-16 flex items-start">
                        <div className="border-l-4 border-blue-400 pl-6 py-2">
                            <p className="text-lg leading-relaxed">
                                You'll find a lot more information on a <strong>Vehicle History Report</strong> that can provide important information like accident history, service records, and more.
                            </p>
                        </div>
                    </div>
                </section>


                {/* =========================================
             SECTION 3: LOCATION DIAGRAM
            ========================================= */}
                <section className="space-y-10 border-b border-gray-200 my-10 md:my-20 py-10 md:py-12">
                    <div className="text-center space-y-6 md:space-y-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl text-gray-700 font-bold">
                            Where can I find my VIN?
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600">
                            The location of a VIN depends on the make and model of the vehicle, but it is most commonly found on the vehicle's dashboard.
                        </p>
                        <p className="font-semibold text-lg md:text-xl text-gray-700">
                            You'll be able to find it in one of these locations...
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center my-10 md:my-20 py-10 md:py-20 gap-12">
                        <div className="w-full md:w-1/2 relative">
                            <img
                                src={cab1}
                                alt="Car VIN locations"
                                className="w-full h-auto mx-auto"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm">
                                <ul className="space-y-4 text-base md:text-lg">
                                    <ListItem number="1" text="Under the hood (front of engine)" color="bg-blue-500" />
                                    <ListItem number="2" text="Driver's side interior dash (most common)" color="bg-blue-500" />
                                    <ListItem number="3" text="Front end of frame (older cars)" color="bg-blue-500" />
                                    <ListItem number="4" text="Driver's side door pillar (inside)" color="bg-blue-500" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/* =========================================
             SECTION 4: HOW TO READ VIN
            ========================================= */}
                <section className="space-y-12 border-b border-gray-400 my-10 md:my-20 py-10 md:py-20 pb-16">
                    <div className="text-center space-y-4 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl text-gray-700 font-bold">
                            How to read and decode your car's VIN
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl">
                            Let's take a look at a VIN and see how it's broken down and decoded:
                        </p>
                    </div>

                    <div className="flex flex-col my-10 md:my-20 items-center">
                        {/* Visual breakdown diagram */}
                        {/* Added flex-wrap and gap-y-20 so if it wraps on mobile, lines don't overlap text */}
                        <div className="relative font-mono text-2xl md:text-5xl font-bold tracking-widest flex flex-wrap justify-center gap-x-2 gap-y-20 mb-16 px-2 w-full">
                            {/* 1 */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-green-500">1</span>
                                <div className="absolute -top-12 flex flex-col items-center">
                                    <span className="bg-green-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">1</span>
                                    <div className="h-4 w-0.5 bg-green-500 mt-1"></div>
                                    <div className="w-3 h-0.5 bg-green-500"></div>
                                </div>
                            </div>
                            {/* F */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-blue-700">F</span>
                                <div className="absolute -bottom-12 flex flex-col items-center">
                                    <div className="w-3 h-0.5 bg-blue-700 mb-1"></div>
                                    <div className="h-4 w-0.5 bg-blue-700"></div>
                                    <span className="bg-blue-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">2</span>
                                </div>
                            </div>
                            {/* T */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-teal-500">T</span>
                                <div className="absolute -top-12 flex flex-col items-center">
                                    <span className="bg-teal-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">3</span>
                                    <div className="h-4 w-0.5 bg-teal-500 mt-1"></div>
                                    <div className="w-3 h-0.5 bg-teal-500"></div>
                                </div>
                            </div>
                            {/* FW1R6 - This block needs to stay together or flex gracefully */}
                            <div className="flex relative mx-1">
                                <span className="text-blue-500">FW1R6</span>
                                <div className="absolute -bottom-12 left-0 right-0 flex flex-col items-center">
                                    <div className="w-full h-0.5 bg-blue-500 mb-1"></div>
                                    <div className="h-4 w-0.5 bg-blue-500"></div>
                                    <span className="bg-blue-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">4</span>
                                </div>
                            </div>
                            {/* X */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-red-500">X</span>
                                <div className="absolute -top-12 flex flex-col items-center">
                                    <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">5</span>
                                    <div className="h-4 w-0.5 bg-red-500 mt-1"></div>
                                    <div className="w-3 h-0.5 bg-red-500"></div>
                                </div>
                            </div>
                            {/* B */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-yellow-500">B</span>
                                <div className="absolute -bottom-12 flex flex-col items-center">
                                    <div className="w-3 h-0.5 bg-yellow-500 mb-1"></div>
                                    <div className="h-4 w-0.5 bg-yellow-500"></div>
                                    <span className="bg-yellow-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">6</span>
                                </div>
                            </div>
                            {/* F */}
                            <div className="flex flex-col items-center group relative">
                                <span className="text-green-600">F</span>
                                <div className="absolute -top-12 flex flex-col items-center">
                                    <span className="bg-green-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">7</span>
                                    <div className="h-4 w-0.5 bg-green-600 mt-1"></div>
                                    <div className="w-3 h-0.5 bg-green-600"></div>
                                </div>
                            </div>
                            {/* B08616 */}
                            <div className="flex relative mx-1">
                                <span className="text-purple-700">B08616</span>
                                <div className="absolute -bottom-12 left-0 right-0 flex flex-col items-center">
                                    <div className="w-full h-0.5 bg-purple-700 mb-1"></div>
                                    <div className="h-4 w-0.5 bg-purple-700"></div>
                                    <span className="bg-purple-700 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded">8</span>
                                </div>
                            </div>
                        </div>

                        {/* Legend Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 text-xl md:text-2xl gap-x-12 gap-y-6 max-w-3xl w-full px-4 my-8 md:my-20">
                            <LegendItem number="1" color="bg-green-500" text="Country of manufacturer" />
                            <LegendItem number="5" color="bg-red-500" text="Security check digit" />
                            <LegendItem number="2" color="bg-blue-700" text="Vehicle manufacturer" />
                            <LegendItem number="6" color="bg-yellow-500" text="Model year" />
                            <LegendItem number="3" color="bg-teal-500" text="Vehicle type or division" />
                            <LegendItem number="7" color="bg-green-600" text="Assembly plant" />
                            <LegendItem number="4" color="bg-blue-500" text="Vehicle's brand, body style, engine size & type" />
                            <LegendItem number="8" color="bg-purple-700" text="Vehicle's production # (serial number)" />
                        </div>
                    </div>
                </section>


                {/* =========================================
             SECTION 5: DECODED EXAMPLE TABLE
            ========================================= */}
                <section className="space-y-6">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl text-gray-700 font-bold">
                            Decoded VIN Example
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl">
                            Our FREE VIN Decoder & Lookup will show you the model year, vehicle manufacturer, model type, engine type, and the trim.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-xl text-sm md:text-base">
                        <TableRow label="VIN" value="12458795412587489" isEven={false} />
                        <TableRow label="YEAR" value="2011" isEven={true} />
                        <TableRow label="MANUFACTURER" value="Ford" isEven={false} />
                        <TableRow label="MODEL" value="F-150" isEven={true} />
                        <TableRow label="ENGINE" value="6.2L V8" isEven={false} />
                        <TableRow label="TRIM" value="SuperCrew Pickup 4WD" isEven={true} isLast={true} />
                    </div>
                </section>

                <div className="text-center space-y-4 pt-8">
                    <h3 className="text-2xl md:text-3xl text-gray-700 font-bold">VIN model year character codes</h3>
                    <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                        The tenth character in every VIN identifies the model year. The following chart displays model year character codes.
                    </p>
                </div>

                <div className="w-full max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-xl overflow-hidden bg-gray-200 gap-[1px]">
                        {tableData.map((row, index) => (
                            <React.Fragment key={index}>
                                <div className="bg-white p-4 md:p-5 text-gray-600 flex items-center justify-center md:justify-start">
                                    <span>{row.col1}</span>
                                </div>
                                <div className="bg-white p-4 md:p-5 text-gray-600 flex items-center justify-center md:justify-start">
                                    <span>{row.col2}</span>
                                </div>
                                <div className="bg-white p-4 md:p-5 text-gray-600 flex items-center justify-center md:justify-start">
                                    <span>{row.col3}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>


                {/* =========================================
             SECTION 6: VEHICLE LIST
            ========================================= */}
                <section className="space-y-12 pt-16">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-3xl text-gray-600 font-bold">
                            What vehicles can be decoded with the VIN Decoder?
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-12">
                        {/* Tabs */}
                        <div className="flex justify-center gap-4 mb-8 md:mb-12 border-b border-gray-200">
                            <button
                                onClick={() => setVehicleTab('A-J')}
                                className={`pb-3 px-4 font-medium transition-colors ${vehicleTab === 'A-J' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                A-J
                            </button>
                            <button
                                onClick={() => setVehicleTab('K-Z')}
                                className={`pb-3 px-4 font-medium transition-colors ${vehicleTab === 'K-Z' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                K-Z
                            </button>
                        </div>

                        {/* Grid Content - Changed to 2 columns on mobile, 5 on desktop */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
                            {vehicleTab === 'A-J' ? (
                                <>
                                    <BrandGroup letter="A" brands={['Acura', 'Alfa Romeo', 'Aston Martin', 'Audi']} />
                                    <BrandGroup letter="B" brands={['Bentley', 'BMW', 'Buick']} />
                                    <BrandGroup letter="C" brands={['Cadillac', 'Chevrolet', 'Chrysler']} />
                                    <BrandGroup letter="D" brands={['Daewoo', 'Datsun', 'Dodge']} />
                                    <BrandGroup letter="E" brands={['Eagle', 'Ferrari', 'FIAT', 'Ford']} />
                                    <BrandGroup letter="G" brands={['Geo', 'GMC']} />
                                    <BrandGroup letter="H" brands={['Honda', 'HUMMER', 'Hyundai']} />
                                    <BrandGroup letter="I" brands={['Infiniti', 'Isuzu']} />
                                    <BrandGroup letter="J" brands={['Jaguar', 'Jeep']} />
                                </>
                            ) : (
                                <>
                                    <BrandGroup letter="K" brands={['Kia']} />
                                    <BrandGroup letter="L" brands={['Lamborghini', 'Land Rover', 'Lexus', 'Lincoln']} />
                                    <BrandGroup letter="M" brands={['Maserati', 'Mazda', 'McLaren', 'Mercedes', 'MINI']} />
                                    <BrandGroup letter="N" brands={['Nissan']} />
                                    <BrandGroup letter="O" brands={['Oldsmobile', 'Plymouth', 'Pontiac', 'Porsche']} />
                                    <BrandGroup letter="R" brands={['RAM', 'Rolls-Royce']} />
                                    <BrandGroup letter="S" brands={['Saab', 'Saturn', 'Subaru', 'Suzuki']} />
                                    <BrandGroup letter="T" brands={['Tesla', 'Toyota']} />
                                    <BrandGroup letter="V" brands={['Volkswagen', 'Volvo']} />
                                </>
                            )}
                        </div>
                    </div>
                </section>


                {/* =========================================
             SECTION 7: CTA
            ========================================= */}
                <section className="flex flex-col items-center space-y-6 py-8 text-center">
                    <div className="w-48 h-48 md:w-96 md:h-96 relative -mb-8 md:-mb-12">
                        <img
                            src={carfox}
                            alt="Car Fox Mascot"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="space-y-6 max-w-xl">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-700 leading-tight">
                            Upgrade your decoded VIN with a Vehicle History Report & Free History-Based Value today.
                        </h3>
                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded shadow-md transition-all w-full md:w-auto">
                            Get Report
                        </button>
                    </div>
                </section>


                {/* =========================================
             SECTION 8: FAQ
            ========================================= */}
                <section className="space-y-4 pb-5 md:pb-10 max-w-5xl mx-auto w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 text-center md:text-left">
                        Frequently Asked Questions
                    </h2>

                    <div className="border border-gray-200 rounded-lg bg-white">
                        <AccordionItem
                            question="Do motorcycles have VINs?"
                            answer="Yes, motorcycles have Vehicle Identification Numbers just like cars and trucks."
                        />
                        <AccordionItem
                            question="Can I perform a VIN lookup on an older car?"
                            answer="Yes, standard 17-character VINs were implemented in 1981. Vehicles older than that may have different formats but can often still be looked up."
                        />
                        <AccordionItem
                            question="Why do I need a VIN Decode?"
                            answer="A VIN decode verifies that the car matches its description, helping to prevent fraud and ensuring you know exactly what features the vehicle should have."
                        />
                        <AccordionItem
                            question="What is a World Manufacturer Identifier (WMI)?"
                            answer="The WMI is the first three characters of a VIN that uniquely identifies the manufacturer of the vehicle."
                            isLast={true}
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

// ---------------- Helper Components ----------------

const ListItem = ({ number, text, color }) => (
    <li className="flex items-center gap-4">
        <div className={`flex-shrink-0 w-8 h-8 ${color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
            {number}
        </div>
        <span className="text-gray-600">{text}</span>
    </li>
);

const LegendItem = ({ number, color, text }) => (
    <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-6 h-6 ${color} text-white rounded flex items-center justify-center font-bold text-xs mt-0.5`}>
            {number}
        </div>
        <span className="text-gray-600 text-sm leading-tight text-left">{text}</span>
    </div>
);

const TableRow = ({ label, value, isEven, isLast }) => (
    <div className={`flex border-b ${isLast ? 'border-none' : 'border-gray-200'}`}>
        <div className="w-1/3 p-3 md:p-4 bg-gray-50 font-medium text-gray-700 uppercase text-xs md:text-sm tracking-wide break-words">
            {label}
        </div>
        <div className="w-2/3 p-3 md:p-4 text-gray-800 break-all">
            {value}
        </div>
    </div>
);

// Component for the Brand Grid
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

// Component for FAQ Accordion
const AccordionItem = ({ question, answer, isLast }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Decreased padding to p-3 md:p-4
        <div className={`p-3 md:p-4 ${!isLast ? 'border-b border-gray-200' : ''}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
            >
                <span className="text-blue-500 font-medium group-hover:text-blue-600 pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {answer}
                </div>
            )}
        </div>
    );
};

export default VinDecoderPage;