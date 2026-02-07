// import React from 'react';
// import picture1 from '../Images/valuerange-icon.jpg'
// import picture2 from '../Images/vindecoder-icon.jpg'
// import picture3 from '../Images/safety-recall-icon.jpg'

// const ToolsSection = () => {
//     const tools = [
//         {
//             id: 1,
//             title: "Value Range",
//             description: "Used car values based on what similar models sold for nearby.",
//             buttonText: "Get Value Range",
//             icon: <img src={picture1} alt="Value Range Icon" className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2" />,
//             // icon: (
//             //     <svg
//             //         xmlns="	https://www.carfax.ca/content/dam/carfax/icons/valuerange-icon.svg"
//             //         viewBox="0 0 64 64"
//             // className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2"
//             //     >
//             //         {/* Price Tag Shape */}
//             //         <path d="M32 8 L52 8 L52 36 L32 56 L12 36 L12 8 Z" strokeLinecap="round" strokeLinejoin="round" />
//             //         <circle cx="32" cy="18" r="3" />
//             //         {/* Dollar Sign */}
//             //         <path d="M32 28 V44 M28 32 H34 A3 3 0 0 1 34 38 H30 A3 3 0 0 0 30 44 H36" strokeLinecap="round" strokeLinejoin="round" />
//             //         {/* Dashed line effect at bottom left */}
//             //         <path d="M8 56 H20" strokeDasharray="4 4" strokeWidth="2" />
//             //     </svg>
//             // ),
//         },
//         {
//             id: 2,
//             title: "VIN Decoder",
//             description: "Get details like year, make, model, and where it was made.",
//             buttonText: "Decode a VIN",
//             icon: (<img src={picture2} alt="VIN Decoder Icon" className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2" />
//                 //     <svg
//                 //         xmlns="http://www.w3.org/2000/svg"
//                 //         viewBox="0 0 64 64"
//                 //         className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2"
//                 //     >
//                 //         {/* Car Body */}
//                 //         <path d="M10 36 L14 20 L50 20 L54 36 V50 H50 V54 H42 V50 H22 V54 H14 V50 H10 Z" strokeLinecap="round" strokeLinejoin="round" />
//                 //         {/* Windshield */}
//                 //         <path d="M16 36 H48" />
//                 //         {/* Headlights */}
//                 //         <circle cx="16" cy="42" r="2" />
//                 //         <circle cx="48" cy="42" r="2" />
//                 //         {/* Arrow pointing to car */}
//                 //         <path d="M22 10 L32 24 M32 24 L24 24 M32 24 L32 16" strokeLinecap="round" strokeLinejoin="round" />
//                 //         {/* Dashed line effect */}
//                 //         <path d="M8 58 H24" strokeDasharray="4 4" strokeWidth="2" />
//                 //     </svg>
//             ),
//         },
//         {
//             id: 3,
//             title: "Safety Recall Check",
//             description: "A quick look into whether a vehicle has an open recall.",
//             buttonText: "Check Recall Status",

//             icon: (<img src={picture3} alt="Safety Recall Icon" className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2" />
//                 // <svg
//                 //     xmlns="http://www.w3.org/2000/svg"
//                 //     viewBox="0 0 64 64"
//                 //     className="w-16 h-16 text-blue-500 fill-none stroke-current stroke-2"
//                 // >
//                 //     {/* Circular Arrow */}

//                 //     <path d="M32 10 A 22 22 0 1 1 15 45" strokeLinecap="round" strokeDasharray="60 100" />
//                 //     <path d="M32 10 L26 16 M32 10 L38 16" strokeLinecap="round" strokeLinejoin="round" />

//                 //     {/* Exclamation Mark */}
//                 //     <path d="M32 24 V38" strokeWidth="3" strokeLinecap="round" />
//                 //     <circle cx="32" cy="46" r="2" fill="currentColor" stroke="none" />

//                 //     {/* Dashed accent */}
//                 //     <path d="M50 50 A 24 24 0 0 0 54 32" strokeDasharray="4 4" />
//                 // </svg>
//             ),
//         },
//     ];

//     return (
//         <section className="bg-white py-40 px-4">
//             <div className="max-w-6xl mx-auto">
//                 {/* Header */}
//                 <h2 className="text-3xl font-normal text-center text-gray-700 mb-16">
//                     Get started with our free tools:
//                 </h2>

//                 {/* Grid Container */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//                     {tools.map((tool) => (
//                         <div
//                             key={tool.id}
//                             className="flex flex-col items-center text-center group"
//                         >
//                             {/* Icon */}
//                             <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
//                                 {tool.icon}
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-xl font-bold text-gray-700 mb-4">
//                                 {tool.title}
//                             </h3>

//                             {/* Description */}
//                             <p className="text-gray-600 mb-8 max-w-xs leading-relaxed">
//                                 {tool.description}
//                             </p>

//                             {/* Button */}
//                             <button className="mt-auto px-8 py-3 border border-blue-600 text-blue-500 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                                 {tool.buttonText}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ToolsSection;