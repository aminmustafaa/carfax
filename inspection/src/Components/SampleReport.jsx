// import React from 'react'
// import sample from '../images/sample.jpg';

// const SampleReport = () => {

//     return (
//         <div className="min-h-screen bg-white font-sans text-slate-800">

//             {/* =========================================
//                       SECTION 1: HERO (Existing)
//                      ========================================= */}
//             <section className="py-12 px-6 md:py-28 md:px-12 lg:px-24 border-b border-gray-100">
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                     <div className="flex flex-col items-start">
//                         <h1 className="text-3xl md:text-4xl leading-tight mb-6 text-gray-600">

//                             CARFAX Canada Sample <br />
//                             Vehicle History Reports
//                         </h1>
//                         <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
//                             With the <b> most comprehensive</b> Vehicle History Report in Canada, you can see if a vehicle had prior accidents, open recalls, service history and so much more.                     </p>

//                         <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl" >With a lien check, you can see if there’s money owing on a vehicle so you don’t become responsible for outstanding debt.</p>


//                     </div>

//                     <div className="w-full flex flex-col w-12/12 items-center">
//                         <img
//                             src={sample}
//                             sizes='sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 666px"'
//                             alt="CARFAX Fox Mascot"
//                             className="max-w-full h-auto object-contain mb-8"
//                         />
//                         <button className="text-left  bg-[#0091ea] hover:bg-blue-600 transition-all text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md">
//                             View Report + Lien Check
//                         </button>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     )
// }

// export default SampleReport



import React from 'react'
import sample from '../images/sample.jpg'; // Ensure this path is correct based on your folder structure
import car from '../images/car.jpg'; // Placeholder for car with lien image
import car1 from '../images/car1.jpg'; // Placeholder for car only image
import fox from '../images/fox.jpg'; // Placeholder for fox mascot image
import { useNavigate } from 'react-router-dom';


const SampleReport = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/view-report');
    };

    const handleClick1 = () => {
        navigate('/view-report1');
    }

    const handleCheckout = () => {
        navigate('/get-report');
    }

    // Data for the checklist in the bottom section
    const featuresList = [
        "Accident history", "Registration", "Actively declared stolen",
        "Damage records", "Service records", "Odometer readings",
        "Repair estimates", "Import records", "Vehicle theft",
        "Hail or flood damage", "Detailed U.S. history", "Salvage title",
        "Airbag deployment", "Open recalls", "And more!"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">

            {/* =========================================
                      SECTION 1: HERO (Existing)
               ========================================= */}
            <section className="py-12 px-6 md:py-28 md:px-12 lg:px-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl md:text-4xl leading-tight mb-6 text-gray-700">
                            CARFAX Canada Sample <br />
                            Vehicle History Reports
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                            With the <b> most comprehensive</b> Vehicle History Report in Canada, you can see if a vehicle had prior accidents, open recalls, service history and so much more.
                        </p>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl" >With a lien check, you can see if there’s money owing on a vehicle so you don’t become responsible for outstanding debt.</p>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <img
                            src={sample}
                            /* Fixed syntax: removed the extra 'sizes=' inside the string */
                            sizes="(max-width:300px) 300px, (max-width: 1200px) 600px, 666px"
                            alt="CARFAX Fox Mascot"
                            /* Added 'w-full' to make it responsive on small mobile screens */
                            className="w-full max-w-[500px] h-auto object-contain mb-8"
                        />

                        <button onClick={handleClick} className="bg-[#0091ea]   hover:bg-blue-600 transition-all text-white px-8 py-3 rounded-lg text-lg font-bold shadow-md">
                            View Report + Lien Check
                        </button>
                    </div>

                </div>
            </section>



            {/* =========================================
                SECTION 2: REPORT COMPARISON (From Screenshot)
               ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-16 ">
                        Which CARFAX Canada report should I get?
                        <hr className="my-8 border-1.5 border-gray-500" />
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-center">
                        {/* LEFT COLUMN: Report + Lien Check */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-semibold text-gray-600 mb-6">Vehicle History Report + Lien Check</h3>

                            {/* Placeholder for Car with Chain/Lien Image */}
                            <div className="mb-6 h-60 w-full flex items-center justify-center">
                                {/* Replace with actual 'lien-car.png' */}
                                <img src={car} alt="Car with Lien Check" className="h-full object-contain" />
                            </div>

                            <p className="font-bold text-gray-600 mb-4 text-xl">
                                The report trusted by <br /> millions of Canadians.
                            </p>

                            <p className="text-gray-700 text-xl leading-relaxed max-w-sm mb-8">
                                This report searches billions of data records so you can avoid costly problems, and it includes a nationwide lien search* so you don't get stuck with someone's debt.
                            </p>

                            <button onClick={handleClick} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-200 shadow-sm">
                                View Report + Lien Check
                            </button>
                        </div>

                        {/* RIGHT COLUMN: Report Only */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-semibold text-gray-600 mb-6">Vehicle History Report</h3>

                            {/* Placeholder for Car Image */}
                            <div className="mb-6 h-60 w-full flex items-center justify-center">
                                {/* Replace with actual 'clean-car.png' */}
                                <img src={car1} alt="Car Only" className="h-full object-contain" />
                            </div>

                            <p className="font-bold text-gray-600 mb-4 text-xl">
                                Just looking for the <br /> vehicle history?
                            </p>

                            <p className="text-gray-700 text-xl leading-relaxed max-w-sm mb-8">
                                The Vehicle History Report includes the same thorough information of your vehicle without the nationwide lien search.
                            </p>

                            <button onClick={handleClick1} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-200 shadow-sm">
                                View Report
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 3: FEATURES LIST (From Screenshot)
               ========================================= */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto flex flex-col items-center">

                    {/* Fox Mascot Image Placeholder */}
                    {/* <div className="mb-8 w-full lg:w-80"> */}
                    {/* Replace 'sample' with your fox mascot image */}
                    {/* <img src={fox} alt="Carfax Fox" className="w-full h-auto object-contain" />
                        <hr className="my-8 border-1.5 border-gray-500" />
                    </div> */}

                    <div className="mb-8 w-full md:w-full max-w-md mx-auto">
                        {/* Replace 'sample' with your fox mascot image */}
                        <img src={fox} alt="Carfax Fox" className="w-full h-auto object-contain" />
                        <hr className="my-2 border-1.5 border-gray-500" />
                    </div>


                    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-600 mb-12">
                        All Vehicle History Reports search for...
                    </h2>

                    {/* 3 Column Grid Checklist */}


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-12 w-full mb-12 px-4 md:px-0">
                        {featuresList.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                {/* Light Blue Checkmark */}
                                <svg className="w-5 h-5 text-[#81d4fa] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className={`text-gray-600 text-lg ${feature === 'And more!' ? 'font-bold text-gray-700' : ''}`}>
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button onClick={handleCheckout} className="bg-[#0091ea] hover:bg-blue-600 text-white font-bold py-3 px-10 rounded transition duration-200 shadow-sm">
                        Get Report
                    </button>
                </div>
            </section>
        </div>
    )
}

export default SampleReport