// import React from 'react';

// const VinFraudLanding = () => {
//     // ================= SVG Icons =================
//     const IconAlert = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <circle cx="12" cy="12" r="10"></circle>
//             <line x1="12" y1="8" x2="12" y2="12"></line>
//             <line x1="12" y1="16" x2="12.01" y2="16"></line>
//         </svg>
//     );

//     const IconFlag = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
//             <line x1="4" y1="22" x2="4" y2="15"></line>
//         </svg>
//     );

//     const IconSiren = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" />
//             <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1H5v-1Z" />
//             <path d="M12 7V3" />
//             <path d="M4 10.5 8 9" />
//             <path d="M20 10.5 16 9" />
//         </svg>
//     );

//     const IconClock = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <circle cx="12" cy="12" r="10"></circle>
//             <polyline points="12 6 12 12 16 14"></polyline>
//         </svg>
//     );

//     const IconCheck = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <polyline points="20 6 9 17 4 12"></polyline>
//         </svg>
//     );

//     const IconChevronDown = ({ className }) => (
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//             <polyline points="6 9 12 15 18 9"></polyline>
//         </svg>
//     );

//     // ================= Data =================
//     const faqList = [
//         "What do I receive after purchasing a VIN Fraud Check report?",
//         "How does VIN Fraud Check know if a vehicle is stolen or fraudulent?",
//         "Will I receive ongoing updates after the first fraud check?",
//         "How does VIN Fraud Check differ from Vehicle Monitoring?",
//         "How does VIN Fraud Check differ from a Vehicle History Report?",
//         "Does VIN Fraud Check prevent auto theft or fraud?",
//         "Does CARFAX Canada provide any kind of financial compensation if my vehicle is impacted by theft or fraud?",
//         "Can I run a VIN Fraud Check for any vehicle type?",
//     ];


//     return (
//         <div className="font-sans text-gray-700 bg-white">

//             {/* ================= HERO SECTION ================= */}
//             <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
//                 {/* Left Content */}
//                 <div className="md:w-1/2 space-y-6">
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//                         Steer clear of auto fraud,<br /> with VIN Fraud Check.
//                     </h1>
//                     <p className="text-gray-600 leading-relaxed text-lg">
//                         Unknowingly buying a car with a fraudulent VIN can land you in deep financial trouble. That car could be stolen or uninsurable. And once you buy it, its problems become your problems.
//                     </p>
//                     <p className="text-gray-600 leading-relaxed text-lg">
//                         CARFAX Canada VIN Fraud Check can help <span className="font-bold text-black">detect fraud before you buy</span>, saving you from a potentially disastrous purchase.
//                     </p>
//                     <button className="bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded shadow-md transition text-lg cursor-pointer">
//                         Buy Now
//                     </button>
//                 </div>

//                 {/* Right Image Placeholder */}
//                 <div className="md:w-1/2 relative flex justify-center">
//                     {/* Mockup of the car and icons from image */}
//                     <div className="relative w-full max-w-md">
//                         {/* Warning Icons Layer */}
//                         <div className="absolute -top-10 right-0 flex gap-4 z-10">
//                             <div className="bg-white border-2 border-red-500 rounded-full p-2 shadow-sm">
//                                 <IconAlert className="text-red-500 w-8 h-8" />
//                             </div>
//                             <div className="bg-white border-2 border-red-500 rounded-full p-2 shadow-sm">
//                                 <IconFlag className="text-red-500 w-8 h-8" />
//                             </div>
//                             <div className="bg-white border-2 border-red-500 rounded-full p-2 shadow-sm">
//                                 <IconSiren className="text-red-500 w-8 h-8" />
//                             </div>
//                         </div>
//                         {/* Car Image Placeholder */}
//                         <img
//                             src="/api/placeholder/500/300"
//                             alt="Silver Convertible Car"
//                             className="w-full object-contain drop-shadow-2xl"
//                         />
//                     </div>
//                 </div>
//             </section>

//             {/* ================= WHY CHECK SECTION ================= */}
//             <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100 grid md:grid-cols-3 gap-10">
//                 <div className="md:col-span-1">
//                     <h2 className="text-2xl font-bold text-gray-600">Why check for VIN Fraud?</h2>
//                 </div>

//                 <div className="md:col-span-2 space-y-8">
//                     <div>
//                         <p className="mb-4 text-gray-600">
//                             <span className="font-bold text-black">It is common practice for criminals</span> to copy or tamper with VINs in order to conceal and re-sell stolen cars. If you unwittingly buy a re-vinned vehicle, you may face:
//                         </p>
//                         <ul className="list-disc pl-5 space-y-1 text-gray-600">
//                             <li>Vehicle seizure by authorities</li>
//                             <li>Insurers refusing to pay for repairs or theft</li>
//                             <li>Significantly reduced resale value</li>
//                             <li>Inability to sell or trade-in</li>
//                         </ul>
//                     </div>

//                     <p className="text-gray-600">
//                         VIN Fraud Check can detect if a <span className="font-bold text-black">VIN shows signs of fraud or theft</span>, helping you to avoid a possible nightmare scenario.
//                     </p>

//                     {/* Stats Row */}
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
//                         <div className="flex flex-col">
//                             <div className="flex items-start">
//                                 <span className="text-4xl font-bold text-gray-800">372</span>
//                                 <span className="text-xl font-bold text-gray-800 mt-1">K</span>
//                                 <IconAlert className="text-red-500 w-5 h-5 ml-1 mt-1" />
//                             </div>
//                             <p className="text-sm text-gray-600 mt-2">Cars with possible cloned VINs <sup>1</sup></p>
//                         </div>

//                         <div className="flex flex-col">
//                             <div className="flex items-start">
//                                 <span className="text-4xl font-bold text-gray-800">8</span>
//                                 <div className="flex flex-col ml-1">
//                                     <IconClock className="text-red-500 w-5 h-5 mb-0.5" />
//                                     <span className="text-xs font-bold uppercase text-red-500">Mins</span>
//                                 </div>
//                             </div>
//                             <p className="text-sm text-gray-600 mt-2">A vehicle is stolen every 8 minutes <sup>2</sup></p>
//                         </div>

//                         <div className="flex flex-col">
//                             <div className="flex items-start">
//                                 <span className="text-4xl font-bold text-gray-800">1</span>
//                                 <span className="text-xl font-bold text-gray-800 mt-4 mx-1">IN</span>
//                                 <span className="text-4xl font-bold text-gray-800">5</span>
//                                 <IconSiren className="text-red-500 w-5 h-5 ml-1 mt-1" />
//                             </div>
//                             <p className="text-sm text-gray-600 mt-2">Canadians affected by auto theft in the past year <sup>3</sup></p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* ================= PRICING SECTION ================= */}
//             <section className="bg-gray-50 py-16 border-t border-gray-100">
//                 <div className="max-w-6xl mx-auto px-6">
//                     <h2 className="text-2xl font-bold text-center text-gray-600 mb-12">Which VIN Fraud Check should I get?</h2>

//                     <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">

//                         {/* Card 1: Recommended */}
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm flex flex-col border border-gray-200">
//                             <div className="bg-[#a3d648] text-center py-2">
//                                 <span className="text-white font-semibold uppercase text-sm tracking-wide">Recommended</span>
//                             </div>
//                             <div className="p-8 flex-1 flex flex-col items-center text-center">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                                     VIN Fraud Check +<br />Vehicle History Report
//                                 </h3>
//                                 <p className="text-sm text-gray-500 mb-6 leading-relaxed">
//                                     Detect potential fraud or theft PLUS get the Vehicle History Report which includes available accident, recall, and service records.
//                                 </p>
//                                 <div className="mt-auto w-full">
//                                     <div className="flex items-start justify-center text-gray-800 font-bold">
//                                         <span className="text-lg mt-1">$</span>
//                                         <span className="text-5xl">73</span>
//                                         <span className="text-lg mt-1">95</span>
//                                     </div>
//                                     <p className="text-xs font-bold text-gray-500 mt-2 mb-6">You save $4.95 <span className="line-through text-gray-400">$78.90</span></p>

//                                     <button className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 rounded mb-4 cursor-pointer">
//                                         Buy Now
//                                     </button>
//                                     <a href="#" className="text-[#007bff] text-sm font-semibold hover:underline block">View Sample Reports</a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Card 2: Essential */}
//                         <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm flex flex-col border border-gray-200">
//                             <div className="bg-white border-b border-gray-100 text-center py-2">
//                                 <span className="text-[#007bff] font-semibold text-sm">Essential</span>
//                             </div>
//                             <div className="p-8 flex-1 flex flex-col items-center text-center">
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2 mt-4">
//                                     VIN Fraud<br />Check
//                                 </h3>
//                                 <p className="text-sm text-gray-500 mb-6 mt-2 leading-relaxed">
//                                     Just interested in detecting potential signs of fraud or theft? We scan billions of data records to flag if a car's VIN has been cloned or compromised.
//                                 </p>
//                                 <div className="mt-auto w-full">
//                                     <div className="flex items-start justify-center text-gray-800 font-bold">
//                                         <span className="text-lg mt-1">$</span>
//                                         <span className="text-5xl">19</span>
//                                         <span className="text-lg mt-1">95</span>
//                                     </div>
//                                     <div className="h-6 mb-6"></div> {/* Spacer to align buttons */}

//                                     <button className="w-full bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 rounded mb-4 cursor-pointer">
//                                         Buy Now
//                                     </button>
//                                     <a href="#" className="text-[#007bff] text-sm font-semibold hover:underline block">View Sample Report</a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>

//             {/* ================= HOW IT WORKS SECTION ================= */}
//             <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100 grid md:grid-cols-3 gap-10">
//                 <div className="md:col-span-1">
//                     <h2 className="text-2xl font-bold text-gray-600">
//                         How does CARFAX Canada detect potential VIN Fraud?
//                     </h2>
//                 </div>

//                 <div className="md:col-span-2 space-y-6">
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                         By collaborating with the automotive industry, law enforcement, and government, we continually expand our database and develop new tools to <span className="font-bold text-black">help Canadians stay one step ahead of VIN fraud and auto theft.</span>
//                     </p>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                         VIN Fraud Check searches through billions of VIN records to identify signs of unusual VIN history. <span className="font-bold text-black">This includes:</span>
//                     </p>

//                     <ul className="space-y-2 mt-4">
//                         {[
//                             "Unusual registration history",
//                             "Missing import/export records",
//                             "Conflicting regional or chronological history",
//                             "If the vehicle is reported stolen"
//                         ].map((item, idx) => (
//                             <li key={idx} className="flex items-start text-gray-600 text-sm">
//                                 <div className="mt-0.5 mr-3">
//                                     <IconCheck className="text-blue-300 w-5 h-5" />
//                                 </div>
//                                 <span>{item}</span>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="pt-4">
//                         <a href="#" className="text-[#007bff] font-semibold text-sm hover:underline flex items-center">
//                             Find out more about the impacts of VIN fraud and auto theft. <span className="ml-1 text-lg leading-none">&nequiv;</span>
//                         </a>
//                     </div>
//                 </div>
//             </section>

//             {/* ================= FAQ SECTION ================= */}
//             <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-300 grid md:grid-cols-3 gap-10">
//                 <div className="md:col-span-1">
//                     <h2 className="text-2xl font-bold text-gray-600">Frequently Asked Questions</h2>
//                 </div>

//                 <div className="md:col-span-2 space-y-4">
//                     {faqList.map((question, index) => (
//                         <div key={index} className="border border-blue-100 rounded-lg p-4 flex justify-between items-center bg-white hover:bg-blue-50 transition cursor-pointer">
//                             <span className="text-[#007bff] font-medium text-sm md:text-base pr-4">{question}</span>
//                             <IconChevronDown className="text-gray-400 w-5 h-5 flex-shrink-0" />
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* ================= FINAL CTA SECTION ================= */}
//             <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center text-center border-t border-gray-50">
//                 {/* Mascot Placeholder */}
//                 <div className="mb-6">
//                     <img
//                         src="/api/placeholder/150/180"
//                         alt="Car Fox Mascot"
//                         className="w-32 md:w-40 object-contain"
//                     />
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
//                     Protect yourself from VIN fraud
//                 </h2>
//                 <p className="text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
//                     Don't leave it to chance. Detect fraud before you buy a used vehicle with a VIN Fraud Check report and drive away with confidence.
//                 </p>
//                 <button className="bg-[#007bff] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded shadow-md transition text-lg cursor-pointer">
//                     Buy Now
//                 </button>
//             </section>

//         </div>
//     );
// };

// export default VinFraudLanding;