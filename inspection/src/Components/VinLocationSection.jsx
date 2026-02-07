import React from 'react';

const VinLocationSection = () => {
    return (
        <section className="space-y-10 py-12 border-t border-gray-100">
            {/* 1. Section Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Where can I find my VIN?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    The location of a VIN depends on the make and model of the vehicle,
                    but it is most commonly found on the vehicle's dashboard.
                </p>
                <p className="font-bold text-gray-700">
                    You'll be able to find it in one of these locations...
                </p>
            </div>

            {/* 2. Visual Content Area */}
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">

                {/* LEFT: Car Image with Hotspots */}
                <div className="w-full md:w-1/2 relative">
                    {/* IMPORTANT: Replace the src below with your actual transparent car image.
             The aspect ratio is set to handle standard landscape car images.
          */}
                    <img
                        src="https://placehold.co/600x400/e2e8f0/94a3b8?text=Convertible+Car+Side+View"
                        alt="Car VIN locations diagram"
                        className="w-full h-auto object-contain"
                    />

                    {/* Hotspot 1: Front/Hood */}
                    <div className="absolute top-[45%] left-[2%] group cursor-pointer">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-lg hover:scale-110 transition-transform">
                            1
                        </div>
                        {/* Optional connecting line simulation */}
                        <div className="absolute top-1/2 left-full w-4 h-0.5 bg-blue-500 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Hotspot 2: Dash */}
                    <div className="absolute top-[35%] left-[28%] cursor-pointer hover:scale-110 transition-transform">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-lg">
                            2
                        </div>
                    </div>

                    {/* Hotspot 3: Frame/Door */}
                    <div className="absolute top-[35%] left-[55%] cursor-pointer hover:scale-110 transition-transform">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-lg">
                            3
                        </div>
                    </div>

                    {/* Hotspot 4: Rear Pillar */}
                    <div className="absolute top-[38%] right-[5%] cursor-pointer hover:scale-110 transition-transform">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-lg">
                            4
                        </div>
                    </div>
                </div>

                {/* RIGHT: Legend List */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
                        <ul className="space-y-6">
                            <LocationItem number="1" text="Under the hood (front of engine)" />
                            <LocationItem number="2" text="Driver's side interior dash (most common)" />
                            <LocationItem number="3" text="Front end of frame (older cars)" />
                            <LocationItem number="4" text="Driver's side door pillar (inside)" />
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

// --- Helper Component for the list items ---
const LocationItem = ({ number, text }) => (
    <li className="flex items-center gap-4 group cursor-default">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-blue-600 transition-colors">
            {number}
        </div>
        <span className="text-gray-600 font-medium">{text}</span>
    </li>
);

export default VinLocationSection;