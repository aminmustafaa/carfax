import React from 'react';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">

            {/* 404 Container */}
            <div className="max-w-md w-full text-center space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">

                {/* Icon & Error Code */}
                <div className="relative">
                    <h1 className="text-9xl font-black text-gray-100 select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-red-100 p-4 rounded-full">
                            <AlertTriangle className="w-12 h-12 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

                    {/* Go Back Button (uses browser history in real app) */}
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>

                    {/* Go Home Button */}
                    <a
                        href="/"
                        className="flex no-underline items-center justify-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white font-medium hover:bg-blue-600 shadow-md hover:shadow-lg transition-all underline-none"
                    >
                        <Home size={20} />
                        Home Page
                    </a>

                </div>

            </div>

            {/* Optional Footer Link */}
            <div className="mt-12 text-sm text-gray-400">
                Need help? <a href="/contact" className="text-blue-500 hover:underline">Contact Support</a>
            </div>

        </div>
    );
};

export default NotFoundPage;