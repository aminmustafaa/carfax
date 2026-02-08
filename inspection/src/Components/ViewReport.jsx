import React, { useState, useEffect } from 'react';
import {
    AlertCircle,
    Info,
    CheckCircle,
    X,
    ArrowUp,
    ChevronDown,
    ChevronUp,
    FileText
} from 'lucide-react';

// Make sure these paths are correct in your project
import view from '../assets/view.jpg';
import view1 from '../assets/view1.jpg';
import view2 from '../assets/view2.jpg';
import view3 from '../assets/view3.jpg';
import view4 from '../assets/view4.jpg';
import view5 from '../assets/view5.jpg';
import view6 from '../assets/view6.jpg';
import search from '../assets/search.jpg';
import lienguarantee from '../assets/lienguarantee.jpg';

const CarfaxReport = () => {

    // --- LIEN DETAILS STATE ---
    const [isLienDetailsOpen, setIsLienDetailsOpen] = useState(true);
    const toggleLienDetails = () => setIsLienDetailsOpen(!isLienDetailsOpen);

    // --- ACCIDENT STATE ---
    const [openAccidentYear, setOpenAccidentYear] = useState('2017');

    const toggleAccidentYear = (year) => {
        setOpenAccidentYear(openAccidentYear === year ? null : year);
    };

    const [showOwnerPopup, setShowOwnerPopup] = useState(false);
    const [reportDate, setReportDate] = useState('');

    // --- SERVICE STATE ---
    const [openYear, setOpenYear] = useState('2016');

    // --- RECALL STATE (New) ---
    const [isRecallOpen, setIsRecallOpen] = useState(true);

    useEffect(() => {
        const now = new Date();
        const datePart = now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
        const timePart = now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        setReportDate(`${datePart} | ${timePart}`);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleYear = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    const toggleRecall = () => {
        setIsRecallOpen(!isRecallOpen);
    };

    // --- ACCIDENT DATA ---
    const accidentRecords = [
        {
            year: "2017",
            date: "2017 Apr 24",
            location: "Ontario, Canada",
            details: [
                { label: "Police Reported Accident:", value: "Accident reported: minor damage" },
                { value: "Involving right front impact" },
                { value: "with another motor vehicle" }
            ],
            amounts: []
        },
        {
            year: "2017",
            date: "2017 Apr 25",
            location: "Pickering, Ontario, Canada",
            details: [
                { label: "Estimate:", value: "Right Front Corner | Estimate Date: 2017 May 3" },
                { label: "Claim:", value: "Collision" }
            ],
            amounts: ["$1,599.43", "$2,079.00"]
        },
        {
            year: "2017",
            date: "2017 Dec 1",
            location: "Pickering, Ontario, Canada",
            details: [
                { label: "Police Reported Accident:", value: "Accident reported: minor damage" },
                { value: "Vehicle involved in a sideswipe collision" },
                { value: "Involving left front impact" },
                { label: "Estimate:", value: "Left Front Side | Estimate Date: 2017 Dec 4" },
                { label: "Claim:", value: "Collision" }
            ],
            amounts: ["$4,592.84", "$5,324.00"]
        }
    ];

    const groupedAccidents = accidentRecords.reduce((acc, record) => {
        if (!acc[record.year]) acc[record.year] = [];
        acc[record.year].push(record);
        return acc;
    }, {});

    // --- SERVICE DATA ---
    const serviceRecords = [
        {
            year: "2016",
            date: "2016 Aug 18",
            odometer: "",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Pre-delivery inspection completed", "Recommended maintenance performed"]
        },
        {
            year: "2016",
            date: "2016 Aug 30",
            odometer: "",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Vehicle washed/detailed"]
        },
        {
            year: "2017",
            date: "2017 Sep 27",
            odometer: "16,995 KM",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Transmission checked", "Computer(s) checked"]
        },
        {
            year: "2017",
            date: "2017 Oct 12",
            odometer: "18,252 KM",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Wipers/washers checked"]
        },
        {
            year: "2019",
            date: "2019 Jul 29",
            odometer: "50,329 KM",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Two wheel alignment performed"]
        },
        {
            year: "2019",
            date: "2019 Oct 12",
            odometer: "54,129 KM",
            source: "Service Facility",
            location: "Pickering, Ontario, Canada",
            title: "Vehicle serviced",
            details: ["Electrical system checked"]
        }
    ];

    // Group data by year for the Mobile View
    const groupedRecords = serviceRecords.reduce((acc, record) => {
        if (!acc[record.year]) acc[record.year] = [];
        acc[record.year].push(record);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-white md:bg-white font-sans text-gray-800 pb-20 relative">

            {/* --- HEADER SECTION --- */}
            <div className="bg-white">
                <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">

                    {/* Logo */}
                    <a href="/" className="flex items-center gap-0.5 group no-underline">
                        <span className="logo-box">C</span>
                        <span className="logo-box">A</span>
                        <span className="logo-box">R</span>
                        <span className="logo-box">F</span>
                        <span className="logo-box">A</span>
                        <span className="logo-box">X</span>
                        <span className="text-red-600 text-3xl ml-1 leading-none">🍁</span>
                    </a>

                    <style>{`
                        .logo-box {
                            background-color: black;
                            color: white;
                            font-weight: 900;
                            width: 30px;
                            height: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.1rem;
                        }
                        .no-underline { text-decoration: none !important; }
                    `}</style>

                    {/* Report Info */}
                    <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 text-gray-500 text-md md:text-md leading-none gap-1 md:gap-0">
                        <div className="flex items-center">
                            <span className="font-bold mr-1">Vehicle History Report + Lien Check#:</span>
                            <span>XXXXXXXX</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold mr-1">Report Date:</span>
                            <span>{reportDate}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold mr-1">Report Status:</span>
                            <span>Complete</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- HERO SECTION (Vehicle Details) --- */}
            <div className="bg-white border-b border-gray-200 md:border-0 mb-6">
                <div className="max-w-6xl mx-auto px-4 py-8">

                    <div className="flex flex-col bg-gray-50 px-6 py-8 md:px-12 md:flex-row justify-between items-center md:items-start rounded-lg">

                        {/* Left Column: Vehicle Specs */}
                        <div className="flex-1 w-full flex flex-col items-center md:items-start text-left">
                            <div className="flex flex-col gap-2 leading-none mb-4 text-center md:text-left">
                                <h1 className="text-3xl md:text-5xl font-normal text-gray-600 leading-tight m-0">
                                    2017 FORD EXPLORER XLT
                                </h1>

                                <div className="text-xl text-gray-600 leading-tight text-start flex flex-col gap-2 mt-1">
                                    <p className="m-0">Sport utility vehicle | 6 Cylinders | Gas</p>
                                    <p className="font-mono text-gray-500 m-0">1FM5K8D87XXXXXXXX</p>
                                    <p className="m-0">Country of Assembly: United States</p>
                                    <p className="flex items-center justify-center md:justify-start gap-1 m-0">
                                        Last Reported Odometer: 54,129 KM
                                        <Info className="w-4 h-4 text-gray-400" />
                                    </p>
                                </div>
                            </div>

                            {/* One Owner Badge */}
                            <div className="mb-4 mt-2">
                                <button
                                    onClick={() => setShowOwnerPopup(true)}
                                    className="group flex items-center bg-green-700 text-white px-2 py-1 rounded shadow-sm hover:bg-green-800 transition-all cursor-pointer outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    <div className="flex flex-col items-start leading-tight mr-2">
                                        <span className="font-bold text-xs opacity-90">One</span>
                                        <span className="font-bold text-lg">Owner ™</span>
                                    </div>
                                    <CheckCircle size={15} className="group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Lien Check Box */}
                        <div className="w-full md:w-72 mt-6 md:mt-24 lg:mt-32">
                            {/* Desktop Card */}
                            <div className="hidden md:block w-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] overflow-hidden font-sans rounded">
                                <div className="bg-[#0092ff] text-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-left">
                                    Lien Check
                                </div>
                                <div className="flex flex-col items-center justify-center py-4 px-12">
                                    <div className="w-12 h-12 bg-[#dc1e35] rounded-full flex items-center justify-center mb-4">
                                        <span className="text-white text-2xl font-bold">!</span>
                                    </div>
                                    <div className="text-gray-600 text-[16px] text-center">
                                        Lien Record(s) Found
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Bar Look */}
                            <div className="md:hidden w-full bg-white border-t-4 border-blue-500 shadow-sm p-2 flex items-center justify-center gap-2 rounded">
                                <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                                    <span className="font-bold text-xs">!</span>
                                </div>
                                <p className="text-gray-700 font-bold text-sm">
                                    <span className="text-gray-900">Lien Check:</span> Lien Record(s) Found
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ICONS GRID --- */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4 justify-items-center items-center">

                    {/* 1. Accident/Damage */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view1} alt="Accident Check" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-red-600 font-bold text-lg leading-tight">
                            Accident/Damage <br /> Records Found
                        </p>
                    </div>

                    {/* 2. Registration */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view} alt="Registration" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-gray-500 text-lg leading-tight">
                            Last Registered In: <br />
                            <span className="font-bold text-gray-700">Ontario (Normal)</span>
                        </p>
                    </div>

                    {/* 3. Service Records */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view2} alt="Service Records" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-gray-500 text-lg leading-tight font-medium">
                            <span className="font-bold text-gray-700">6</span> Service Records Found
                        </p>
                    </div>

                    {/* 4. US History */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view3} alt="US History" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-gray-500 text-lg leading-tight font-medium">
                            No U.S. History Found
                        </p>
                    </div>

                    {/* 5. Recall */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view4} alt="Recall" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-red-600 font-bold text-lg leading-tight">
                            1 Open Recall Found
                        </p>
                    </div>

                    {/* 6. Stolen */}
                    <div className="flex flex-col items-center text-center max-w-[200px]">
                        <img src={view5} alt="Stolen Check" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-gray-500 text-lg leading-tight font-medium">
                            Not Actively Declared <br /> Stolen
                        </p>
                    </div>

                    {/* 7. Import/Export (Left side of bottom row) */}
                    <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center mt-4 md:mt-0">
                        <img src={view6} alt="Import Check" className="h-32 w-32 object-contain mb-2" />
                        <p className="text-gray-500 text-lg leading-tight font-medium">
                            No Import/Export <br /> Records Found
                        </p>
                    </div>

                    {/* 8. Questions Box (Wide - Right side of bottom row) */}
                    <div className="col-span-2 hidden md:block md:col-span-2 w-full h-40 flex items-center p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                        <div className="text-left">
                            <h3 className="text-xl md:text-2xl text-gray-700 mb-1">
                                <span className="font-bold text-gray-800">Questions?</span> <span className="font-light text-gray-600">We're here to help.</span>
                            </h3>
                            <div className="text-blue-600 text-base md:text-lg font-bold cursor-pointer">
                                <span className="hover:underline">Customer Support</span> <span className="text-gray-400 mx-1 font-normal">|</span> <span className="hover:underline">FAQ & Glossary</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- DISCLAIMER --- */}
            <div className="max-w-5xl mx-auto px-4 mb-10">
                <div className="border border-gray-300 p-4 rounded flex items-start text-md text-gray-500 bg-white">
                    <Info className="w-10 h-10 text-gray-300 mr-3 flex-shrink-0" />
                    <p className="font-bold text-gray-500 leading-snug text-sm md:text-base">
                        This vehicle history report is based on information that was reported and available to CARFAX Canada as of January 16, 2026
                        <span className="font-normal text-gray-600"> (or once all the data was collected from our data sources and the report was complete). CARFAX Canada draws on billions of data records from thousands of sources across North America, and we receive new historical data records every day.</span>
                        <br className="mb-2" />
                        There may be other information about this vehicle that has not been reported to CARFAX Canada.
                        <span className="font-normal text-gray-600"> When buying a used vehicle, we always recommend using a CARFAX Canada Vehicle History Report, along with a vehicle inspection and test drive, to make an informed decision.</span>
                    </p>
                </div>
            </div>

            {/* --- SECTION HEADER --- */}
            <div className="max-w-5xl hidden md:block mx-auto bg-gray-100 py-6 mb-8 rounded-lg">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl md:text-5xl font-bold text-gray-600 leading-none text-start md:text-left">
                        Vehicle History Report + Lien Check
                    </h2>
                </div>
            </div>

            {/* --- LIEN DETAILS --- */}
            <div className="max-w-5xl mx-auto px-4 mb-20">
                <div className="flex items-center mb-4">
                    <img src={search} alt="Search" className="w-16 h-16 md:w-20 md:h-20 mr-4" />
                    <h3 className="font-semibold text-gray-800 tracking-wider leading-none text-xl md:text-2xl">
                        Lien Check <Info className="inline w-4 h-4 text-gray-400 ml-1" />
                    </h3>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
                    {/* Alert Section */}
                    <div className="border-2 border-red-400 bg-red-50 p-3 rounded-md mb-6 flex items-start md:items-center">
                        <AlertCircle className="text-red-600 w-5 h-5 mr-2 flex-shrink-0 mt-1 md:mt-0" />
                        <span className="text-lg text-gray-700 font-medium leading-tight">
                            Lien Record(s) found in <span className="font-bold">Ontario</span>. <a href="#" className="no-underline font-bold text-gray-800 hover:underline">View Lien Details</a>
                        </span>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Left Column */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-4">How We Check for Liens</h3>
                            <div className="text-gray-600 text-md space-y-4 leading-relaxed">
                                <p>CARFAX Canada uses the VIN to search government records in each Canadian province and territory (excluding Northwest Territories) where the vehicle is currently registered and where it has historically been registered. We do not check for liens or title in any U.S. state.</p>
                                <p>If a VIN has no registration records in Canada, we cannot check for liens. We cannot guarantee lien checks on trailers, recreational vehicles or heavy-duty equipment.</p>
                                <p>Purchasers should always get written confirmation from vendors that there is no lien on the vehicle.</p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-xl mb-4">CARFAX Canada Canadian Lien Guarantee</h3>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                <img src={lienguarantee} alt="Guarantee Badge" className="w-24 h-24 object-contain flex-shrink-0" />
                                <p className="text-gray-600 text-md leading-relaxed text-start md:text-left">
                                    If for some reason our lien check fails to accurately reflect the Canadian enforceable lien status of a vehicle at the time of the search, CARFAX Canada will reimburse the party that purchased the report and relied on it to their detriment to a maximum amount of (1) the value of the car (2) the value of the lien (3) Five Thousand Dollars Canadian ($5,000.00), whichever is lower.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ACCIDENT / DAMAGE SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 mb-8">
                <div className="flex items-center mb-6 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0">
                        <img src={view1} alt="" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Accident/Damage
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                {/* --- MOBILE VIEW (ACCORDION STYLE) --- */}
                <div className="md:hidden space-y-2">
                    {Object.keys(groupedAccidents).map((year) => {
                        const isOpen = openAccidentYear === year;
                        return (
                            <div key={year} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${isOpen ? 'border-l-[6px] border-l-blue-500' : 'border-l border-l-gray-200'}`}>

                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccidentYear(year)}
                                    className="w-full flex justify-between items-center p-4 bg-white focus:outline-none"
                                >
                                    <span className="text-xl font-normal text-gray-800">{year}</span>
                                    {isOpen ? <ChevronUp className="text-[#0092ff] w-5 h-5" /> : <ChevronDown className="text-[#0092ff] w-5 h-5" />}
                                </button>

                                {/* Accordion Content */}
                                {isOpen && (
                                    <div className="pb-2">
                                        {groupedAccidents[year].map((record, idx) => (
                                            <div key={idx} className={`px-4 pb-4 ${idx !== 0 ? 'pt-4 border-t border-gray-100' : ''}`}>

                                                {/* Date */}
                                                <div className="flex items-center gap-2 mb-4">
                                                    <div className="bg-[#dc1e35] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-white font-bold text-xs">!</span>
                                                    </div>
                                                    <span className="text-lg text-gray-800">{record.date}</span>
                                                </div>

                                                {/* Location */}
                                                <div className="mb-4">
                                                    <p className="text-black font-bold text-sm">{record.location}</p>
                                                </div>

                                                {/* Details Section */}
                                                <div className="mb-4 space-y-1">
                                                    {record.details.map((detail, i) => (
                                                        <div key={i} className="text-sm">
                                                            {detail.label && <span className="font-bold text-black mr-1">{detail.label}</span>}
                                                            <span className="text-gray-600">{detail.value}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Amount Section */}
                                                {record.amounts.length > 0 && (
                                                    <div>
                                                        <p className="text-gray-400 font-bold text-xs uppercase mb-1">Amount</p>
                                                        {record.amounts.map((amt, i) => (
                                                            <p key={i} className="font-medium text-gray-600 text-sm">{amt}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* --- DESKTOP VIEW (TABLE STYLE) --- */}
                <div className="hidden md:block bg-white rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">

                    {/* Table Header */}
                    <div className="grid grid-cols-12 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-gray-50">
                        <div className="col-span-2 py-4 pl-6">Incident Date</div>
                        <div className="col-span-8 py-4">Details</div>
                        <div className="col-span-2 py-4 pr-6 text-right">Amount</div>
                    </div>

                    {/* Rows */}
                    {accidentRecords.map((row, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-200 transition-colors bg-white hover:bg-gray-50">
                            {/* Date */}
                            <div className="col-span-1 md:col-span-2 py-4 px-4 md:pl-6 flex items-start gap-3">
                                <div className="bg-[#dc1e35] rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white font-bold text-xs">!</span>
                                </div>
                                <span className="text-gray-700 font-bold text-[15px]">{row.date}</span>
                            </div>

                            {/* Details */}
                            <div className="col-span-1 md:col-span-8 py-4 px-4 md:pr-4 space-y-2">
                                <p className="font-bold text-black text-[15px]">{row.location}</p>
                                <div className="text-[15px] text-gray-600 leading-tight space-y-1">
                                    {row.details.map((detail, i) => (
                                        <div key={i} className={i > 0 && !detail.label ? "md:pl-[0px]" : ""}>
                                            {/* Note: In your original code you had indentation logic. 
                                                I simplified it here, but you can re-add `md:pl-[185px]` if specific visual indentation is needed for non-labeled lines. 
                                            */}
                                            {detail.label && <span className="font-bold text-black mr-1">{detail.label}</span>}
                                            <span>{detail.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Amount */}
                            <div className="col-span-1 md:col-span-2 py-4 pr-6 text-right space-y-1">
                                {row.amounts.map((amt, i) => (
                                    <p key={i} className="font-medium text-gray-600 text-[15px]">{amt}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- REGISTRATION SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 pb-20">
                <div className="flex items-center mb-6 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0">
                        <img src={view} alt="Registration Icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Registration
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                <div className="border-2 border-green-400 bg-green-50 p-4 rounded-md mb-3 flex items-start md:items-center">
                    <AlertCircle className="text-green-600 w-6 h-6 mr-3 flex-shrink-0 mt-1 md:mt-0" />
                    <div>
                        <span className="text-lg text-gray-700 leading-tight block">
                            This vehicle has been registered in the province of Ontario in Canada with Normal branding.
                        </span>
                        {/* New Line Added as requested */}
                        <span className="text-gray-600 italic block text-sm mt-1">
                            <span className="font-bold text-grey-700" >We checked for:</span> Inspection Required, Normal, Non-repairable, Rebuilt, Salvage and Stolen.
                        </span>
                    </div>
                </div>
            </div>

            {/* --- SERVICE RECORDS SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 py-6 mb-10">
                <div className="flex items-center mb-4 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0">
                        <img src={view2} alt="Service Icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Service History
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                {/* --- MOBILE VIEW (ACCORDION STYLE) --- */}
                <div className="md:hidden space-y-2">
                    {Object.keys(groupedRecords).map((year) => {
                        const isOpen = openYear === year;
                        return (
                            <div key={year} className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden ${isOpen ? 'border-l-[6px] border-l-blue-500' : 'border-l border-l-gray-200'}`}>

                                {/* Accordion Header - Reduced padding to p-4 */}
                                <button
                                    onClick={() => toggleYear(year)}
                                    className="w-full flex justify-between items-center p-4 bg-white focus:outline-none"
                                >
                                    <span className="text-xl font-normal text-gray-800">{year}</span>
                                    {isOpen ? <ChevronUp className="text-[#0092ff] w-5 h-5" /> : <ChevronDown className="text-[#0092ff] w-5 h-5" />}
                                </button>

                                {/* Accordion Content - Reduced padding */}
                                {isOpen && (
                                    <div className="pb-2">
                                        {groupedRecords[year].map((record, idx) => (
                                            <div key={idx} className={`px-4 pb-4 ${idx !== 0 ? 'pt-4 border-t border-gray-100' : ''}`}>

                                                {/* Date */}
                                                <div className="text-lg text-gray-800 mb-4">{record.date}</div>

                                                {/* Odometer Section */}
                                                <div className="mb-4">
                                                    <p className="text-gray-500 font-bold text-xs mb-1">Odometer:</p>
                                                    <p className="text-gray-700 font-normal text-sm">{record.odometer || ""}</p>
                                                </div>

                                                {/* Source Section */}
                                                <div className="mb-4">
                                                    <p className="text-gray-500 font-bold text-xs mb-1">Source:</p>
                                                    <div className="text-gray-600 text-sm">
                                                        <p>{record.source}</p>
                                                        <p>{record.location}</p>
                                                    </div>
                                                </div>

                                                {/* Details Section */}
                                                <div>
                                                    <p className="text-gray-500 font-bold text-xs mb-1">Details:</p>
                                                    <p className="text-gray-700 font-medium text-sm mb-1">{record.title}</p>
                                                    <ul className="list-disc pl-4 text-gray-600 text-sm space-y-0.5">
                                                        {record.details.map((d, i) => (
                                                            <li key={i}>{d}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* --- DESKTOP VIEW (TABLE STYLE) --- */}
                <div className="hidden md:block bg-white rounded-lg shadow-[0_2px_15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">

                    {/* Table Header - Reduced py-5 to py-4 */}
                    <div className="hidden md:grid grid-cols-12 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 bg-white">
                        <div className="col-span-2 py-4 pl-8 cursor-pointer hover:text-gray-700 flex items-center gap-1">
                            DATE <span className="text-[10px] ml-1">▼</span>
                        </div>
                        <div className="col-span-2 py-4 pl-2">ODOMETER</div>
                        <div className="col-span-3 py-4 pl-2">SOURCE</div>
                        <div className="col-span-5 py-4 pl-2">DETAILS</div>
                    </div>

                    {/* --- SERVICE ROWS --- */}
                    {serviceRecords.map((row, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-12 border-b border-gray-100 ${index % 2 !== 0 ? 'bg-[#f5fafe]' : 'bg-white'}`}
                        >
                            {/* Date - Reduced py-6 to py-4 */}
                            <div className="col-span-1 md:col-span-2 py-4 px-4 md:pl-8">
                                <span className="text-gray-500 font-medium text-[14px]">{row.date}</span>
                            </div>

                            {/* Odometer */}
                            <div className="col-span-1 md:col-span-2 py-4 px-4 md:pl-2">
                                <span className="text-gray-500 font-medium text-[14px]">{row.odometer}</span>
                            </div>

                            {/* Source */}
                            <div className="col-span-1 md:col-span-3 py-4 px-4 md:pl-2">
                                <div className="text-gray-600 text-[14px]">{row.source}</div>
                                <div className="text-gray-400 text-[14px]">{row.location}</div>
                            </div>

                            {/* Details */}
                            <div className="col-span-1 md:col-span-5 py-4 px-4 md:pl-2">
                                <div className="text-gray-700 font-bold text-[14px] mb-1">{row.title}</div>
                                <ul className="list-disc pl-5 text-gray-500 text-[14px] leading-relaxed marker:text-gray-300">
                                    {row.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- OPEN RECALLS SECTION (New Added Section) --- */}
            <div className="max-w-5xl mx-auto px-4 mb-10">
                <div className="flex items-center mb-4 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0 relative">
                        <img src={view4} alt="Recall Icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Open Recalls
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden border-l-[6px] border-l-red-600">
                    {/* Header */}
                    <button
                        onClick={toggleRecall}
                        className="w-full flex justify-between items-start p-4 text-left focus:outline-none"
                    >
                        <div>
                            <h4 className="text-lg md:text-xl  text-gray-800 uppercase leading-tight mb-1">
                                Recall #: 19S29 | SEAT FRAME BURRED EDGE
                            </h4>
                            <p className="text-gray-500 text-sm">Recall Date: 2019 Sep 12</p>
                        </div>
                        {isRecallOpen ? <ChevronUp className="text-[#0092ff] w-6 h-6 flex-shrink-0 mt-1" /> : <ChevronDown className="text-[#0092ff] w-6 h-6 flex-shrink-0 mt-1" />}
                    </button>

                    {/* Content */}
                    {isRecallOpen && (
                        <div className="px-4 pb-4 pt-0">
                            <div className="mb-2">
                                <h5 className="font-bold text-gray-600 text-sm mb-1">Recall Description</h5>
                                <p className="text-gray-500 text-md leading-tight uppercase">
                                    ON YOUR VEHICLE, THE INBOARD POWER SEAT TRACK MAY HAVE A SHARP BURR DUE TO AN IMPROPERLY FINISHED EDGE.
                                </p>
                            </div>

                            <div className="mb-6">
                                <h5 className="font-bold text-gray-600 text-sm mb-1">Remedy</h5>
                                <p className="text-gray-500 text-md leading-tight uppercase">
                                    FORD MOTOR COMPANY HAS AUTHORIZED YOUR DEALER TO INSTALL FLOCKED TAPE OVER SEAT TRACK EDGE FREE OF CHARGE (PARTS AND LABOR).
                                </p>
                            </div>

                            <div className="text-md text-gray-500 leading-tight">
                                This recall was open as of the date/time that this report was generated. For more information, or to find out if the recall has been closed, please contact FORD or visit <a href="https://www.ford.ca/support/recalls/" className="font-bold text-gray-700 underline decoration-gray-400 underline-offset-2">Ford's website.</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>



            <div className="max-w-5xl mx-auto px-4 pb-20">
                <div className="flex items-center mb-6 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0">
                        <img src={view5} alt="Registration Icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Stolen Vehical Check
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                <div className="border-2 border-green-400 bg-green-50 p-4 rounded-md mb-3 flex items-start md:items-center">
                    <AlertCircle className="text-green-600 w-6 h-6 mr-3 flex-shrink-0 mt-1 md:mt-0" />
                    <div>
                        <span className="text-lg text-gray-700 leading-tight block">
                            This vehicle is not actively declared stolen.
                        </span>

                    </div>
                </div>
            </div>



            {/* --- DETAILED LIEN TABLE SECTION --- */}
            <div className="max-w-5xl mx-auto px-4 mb-10">
                <div className="flex items-center mb-4 gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 p-2 rounded-full flex-shrink-0">
                        <img src={search} alt="Registration Icon" className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700 flex items-center gap-2">
                        Lien Details
                        <Info className="text-gray-300 w-5 h-5" />
                    </h3>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden border-l-[6px] border-l-red-600">
                    {/* Header */}
                    <button
                        onClick={toggleLienDetails}
                        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                    >
                        <span className="text-lg md:text-xl text-gray-800 font-bold leading-tight">
                            Lien Record(s) found in Ontario
                        </span>
                        {isLienDetailsOpen ? <ChevronUp className="text-[#0092ff] w-6 h-6 flex-shrink-0" /> : <ChevronDown className="text-[#0092ff] w-6 h-6 flex-shrink-0" />}
                    </button>

                    {/* Content */}
                    {isLienDetailsOpen && (
                        <div className="px-6 pb-8 pt-2 overflow-x-auto">
                            {/* Top Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[11px] mb-6">
                                <div>
                                    <p className="text-blue-800 mb-1">Type of Search</p>
                                    <p className="text-blue-800 mb-1">Search Conducted On</p>
                                    <p className="text-blue-800">File Currency</p>
                                </div>
                                <div className="col-span-1 md:col-span-1 lg:col-span-3">
                                    <p className="text-black mb-1">&nbsp;</p>
                                    <p className="text-gray-600 mb-1">1FM5K8D87XXXXXXXX</p>
                                    <p className="text-gray-600">15SEP 2020</p>
                                </div>
                            </div>

                            {/* File Numbers Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-[11px] mb-4">
                                <div>
                                    <p className="text-blue-800">File Number</p>
                                    <p className="text-gray-600">216877477</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Family</p>
                                    <p className="text-gray-600">1</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">of Families Page</p>
                                    <p className="text-gray-600">1</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">of Pages</p>
                                    <p className="text-gray-600">1</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Expiry Date</p>
                                    <p className="text-gray-600">15MAR 2022</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Status</p>
                                </div>
                            </div>

                            {/* Form Header */}
                            <h4 className="text-blue-800 text-[11px]  uppercase mb-2">FORM 1C FINANCING STATEMENT / CLAIM FOR LIEN</h4>

                            {/* Form Details Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-8 gap-4 text-[11px] mb-8">
                                <div className="col-span-2 md:col-span-1">
                                    <p className="text-blue-800">File Number</p>
                                    <p className="text-gray-600">216877477</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Caution Filing</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Page of</p>
                                    <p className="text-gray-600">01</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Total Pages</p>
                                    <p className="text-gray-600">001</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Motor Vehicle Schedule</p>
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <p className="text-blue-800">Registration Number</p>
                                    <p className="text-gray-600">20170201 2220 1873 2117</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Registered Under</p>
                                    <p className="text-gray-600">P PPSA</p>
                                </div>
                                <div>
                                    <p className="text-blue-800">Registration Period</p>
                                    <p className="text-gray-600">7</p>
                                </div>
                            </div>

                            {/* Debtor Info */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-2 text-[11px] mb-8">
                                {/* Row 1 Labels */}
                                <div className="col-span-1 md:col-span-2 text-blue-800">Individual Debtor</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800">Date of Birth</div>
                                <div className="col-span-1 md:col-span-3 text-blue-800">First Given Name</div>
                                <div className="col-span-1 md:col-span-1 text-blue-800">Initial</div>
                                <div className="col-span-1 md:col-span-4 text-blue-800">Surname</div>
                                {/* Row 1 Values */}
                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">17FEB1956</div>
                                <div className="col-span-1 md:col-span-3 text-gray-600">WESLEY</div>
                                <div className="col-span-1 md:col-span-1"></div>
                                <div className="col-span-1 md:col-span-4 text-gray-600">WILSON</div>

                                {/* Row 2 (Business Debtor/Address) Labels */}
                                <div className="col-span-1 md:col-span-2 text-blue-800">Business Debtor Name</div>
                                <div className="col-span-1 md:col-span-6"></div>
                                <div className="col-span-1 md:col-span-4 text-blue-800">Ontario Corporation Number</div>

                                {/* Row 2 Address Label */}
                                <div className="col-span-1 md:col-span-2 text-blue-800 mt-2">Business Debtor</div>
                                <div className="col-span-1 md:col-span-5 text-blue-800 mt-2">Address</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800 mt-2">City</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800 mt-2">Province</div>
                                <div className="col-span-1 md:col-span-1 text-blue-800 mt-2">Postal Code</div>
                                {/* Row 2 Address Value */}
                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-5 text-gray-600">19 FOREST CITY LN</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">LONDON</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">ON</div>
                                <div className="col-span-1 md:col-span-1 text-gray-600">N6K 2N3</div>
                            </div>

                            {/* Secured Party */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 gap-x-2 text-[11px] mb-8">
                                <div className="col-span-1 md:col-span-2 text-blue-800">Secured Party</div>
                                <div className="col-span-1 md:col-span-10 text-blue-800">Secured Party / Lien Claimant</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-10 text-gray-600">VEHICLE MANUFACTURER FINANCIAL SERVICES INC.</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-5 text-blue-800">Address</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800">City</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800">Province</div>
                                <div className="col-span-1 md:col-span-1 text-blue-800">Postal Code</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-5 text-gray-600">1217 MAPLE ST</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">TORONTO</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">ON</div>
                                <div className="col-span-1 md:col-span-1 text-gray-600">M4E 1S5</div>
                            </div>

                            {/* Collateral Classification */}
                            <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-[11px] mb-8">
                                <div className="col-span-2 md:col-span-1 text-blue-800">Collateral Classification</div>
                                <div><span className="text-blue-800 block">Consumer Goods</span><span className="text-gray-600">X</span></div>
                                <div><span className="text-blue-800 block">Inventory</span><span className="text-gray-600">X</span></div>
                                <div><span className="text-blue-800 block">Equipment</span><span className="text-gray-600">X</span></div>
                                <div><span className="text-blue-800 block">Accounts</span></div>
                                <div><span className="text-blue-800 block">Other</span></div>
                                <div><span className="text-blue-800 block">Motor Vehicle Included</span><span className="text-gray-600">X</span></div>
                            </div>

                            {/* Vehicle Description */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-[11px] mb-8">
                                <div className="col-span-1 md:col-span-2 text-blue-800">Motor Vehicle Description</div>
                                <div className="col-span-1 md:col-span-1"><span className="text-blue-800 block">Year</span><span className="text-gray-600">2017</span></div>
                                <div className="col-span-1 md:col-span-2"><span className="text-blue-800 block">Make</span><span className="text-gray-600">FORD</span></div>
                                <div className="col-span-1 md:col-span-2"><span className="text-blue-800 block">Model</span><span className="text-gray-600">EXPLR</span></div>
                                <div className="col-span-1 md:col-span-5"><span className="text-blue-800 block">V.I.N.</span><span className="text-gray-600">1FM5K8D87XXXXXXXX</span></div>
                            </div>

                            {/* Registering Agent */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 gap-x-2 text-[11px]">
                                <div className="col-span-1 md:col-span-2 text-blue-800">Registering Agent</div>
                                <div className="col-span-1 md:col-span-10 text-blue-800">Registering Agent</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-10 text-gray-600">R + R LIMITED</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-5 text-blue-800">Address</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800">City</div>
                                <div className="col-span-1 md:col-span-2 text-blue-800">Province</div>
                                <div className="col-span-1 md:col-span-1 text-blue-800">Postal Code</div>

                                <div className="col-span-1 md:col-span-2"></div>
                                <div className="col-span-1 md:col-span-5 text-gray-600">22 JUNIPER AVENUE</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">TORONTO</div>
                                <div className="col-span-1 md:col-span-2 text-gray-600">ON</div>
                                <div className="col-span-1 md:col-span-1 text-gray-600">M5J 2T3</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* --- BACK TO TOP BUTTON --- */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-4 md:right-8 bg-[#007bff] hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition-all z-50 flex items-center gap-2 font-bold text-xs uppercase tracking-wider"
            >
                <ArrowUp className="w-4 h-4" strokeWidth={3} />
                Back to Top
            </button>

            {/* --- POPUP MODAL --- */}
            {showOwnerPopup && (
                <div
                    onClick={() => setShowOwnerPopup(false)}
                    className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 cursor-pointer"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden scale-100 md:scale-105 cursor-default"
                    >
                        <div className="flex justify-between items-center bg-gray-50 border-b border-gray-100 px-6 py-4">
                            <h3 className="text-gray-800 text-xl flex items-center gap-2 leading-none">
                                CARFAX Canada One Owner™ Badge
                            </h3>
                            <button
                                onClick={() => setShowOwnerPopup(false)}
                                className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 p-2 rounded-full transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-gray-600 leading-snug text-sm md:text-base mb-6">
                                {/* <strong className="text-gray-800 block mb-2 text-lg leading-none">Good News!</strong> */}
                                The CARFAX Canada One Owner™ badge that is based on the registration information reported to CARFAX Canada. The badge is available for personal and commercial vehicles that have only been registered in the provinces of British Columbia, Alberta, Saskatchewan, Manitoba, Ontario, Quebec, Nova Scotia, New Brunswick, or PEI.
                            </p>

                            <button
                                onClick={() => setShowOwnerPopup(false)}
                                className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition active:scale-95 shadow-md"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CarfaxReport; 