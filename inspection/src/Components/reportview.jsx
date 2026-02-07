import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const ReportView = () => {
    const location = useLocation();
    
    // Retrieve the data passed from the previous page
    const reportData = location.state?.report;

    // Security: If someone tries to go to /report-view directly without data, kick them out
    if (!reportData) {
        return <Navigate to="/" />;
    }

    // --- TEMPLATE STARTS HERE ---
    return (
        <div className="min-h-screen bg-gray-100 py-10 print:bg-white print:py-0">
            <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none">
                
                {/* HEADER */}
                <div className="bg-blue-900 text-white p-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold uppercase tracking-wider">
                            {/* DYNAMIC DATA: Make/Model */}
                            {reportData.year} {reportData.make} {reportData.model}
                        </h1>
                        <p className="opacity-80 mt-1">VIN: {reportData.vin}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-sm opacity-75">Report Generated</div>
                        <div className="font-bold">{new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                {/* SUMMARY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-b">
                    {/* Item 1: Accidents */}
                    <div className="p-6 border-r flex flex-col items-center text-center">
                        <div className="text-gray-500 text-sm font-bold uppercase mb-2">Accidents</div>
                        {/* LOGIC: Check accident count from your specific API structure */}
                        {reportData.accident_count > 0 ? (
                            <span className="text-3xl font-bold text-red-600">
                                {reportData.accident_count} FOUND
                            </span>
                        ) : (
                            <span className="text-3xl font-bold text-green-600">
                                NONE
                            </span>
                        )}
                    </div>

                    {/* Item 2: Odometer */}
                    <div className="p-6 border-r flex flex-col items-center text-center">
                        <div className="text-gray-500 text-sm font-bold uppercase mb-2">Odometer Status</div>
                        <span className="text-xl font-bold text-blue-900">
                            {reportData.odometer_check || "Pass"}
                        </span>
                    </div>

                    {/* Item 3: Title */}
                    <div className="p-6 flex flex-col items-center text-center">
                        <div className="text-gray-500 text-sm font-bold uppercase mb-2">Title Brand</div>
                        <span className="text-xl font-bold text-gray-800">
                            {reportData.title_brand || "Clean Title"}
                        </span>
                    </div>
                </div>

                {/* DETAILED HISTORY LIST */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Vehicle History</h2>
                    
                    {/* Map through history array if your API provides one */}
                    {reportData.history && reportData.history.length > 0 ? (
                        <div className="space-y-6">
                            {reportData.history.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-32 flex-shrink-0 text-gray-500 font-mono text-sm pt-1">
                                        {item.date}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{item.description}</h4>
                                        <p className="text-sm text-gray-600">{item.location || "Location not reported"}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No detailed history events found.</p>
                    )}
                </div>

                {/* PRINT BUTTON (Hidden when printing) */}
                <div className="p-8 bg-gray-50 text-center print:hidden">
                    <button 
                        onClick={() => window.print()} 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded shadow"
                    >
                        Download / Print Report PDF
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReportView;