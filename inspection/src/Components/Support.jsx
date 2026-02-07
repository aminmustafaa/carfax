import React from 'react';
import { Search } from 'lucide-react';

const SupportCenter = () => {
    const articles = [
        {
            title: "Holiday Support Hours",
            content: "Please note - the CARFAX Canada team is currently operating on a holiday sch...",
            link: "#",
        },
        {
            title: "Will my subscription auto-renew?",
            content: "No, the Vehicle Monitoring subscription will not auto-renew after the first ...",
            link: "#",
        },
        {
            title: "Can I order a report for a “classi...",
            content: "Unfortunately, not. If you wish to verify the past history, current cond...",
            link: "#",
        },
        {
            title: "Is VIN Fraud Check a replaceme...",
            content: "No, VIN Fraud Check is not a substitute for insurance or legal protection. I...",
            link: "#",
        },
        {
            title: "How can CARFAX Canada help if ...",
            content: "If a VIN is flagged, CARFAX Canada has a dedicated team ready to assist you....",
            link: "#",
        },
        {
            title: "What should I do if my VIN Frau...",
            content: "If your VIN Fraud Check suggests that a VIN has been associated with suspici...",
            link: "#",
        },
        {
            title: "It's been 1 business day, and I h...",
            content: "Provided you've purchased VIN Fraud Check and redeemed it by submitting a VI...",
            link: "#",
        },
        {
            title: "How can I purchase VIN Fraud C...",
            content: "You can easily purchase VIN Fraud Check on our website! You can start at our...",
            link: "#",
        },
        {
            title: "Why does it take 1 business day ...",
            content: "When you submit a VIN for a VIN Fraud Check, our system scans billions of re...",
            link: "#",
        },
        {
            title: "How long does it take to receive ...",
            content: "VIN Fraud Check results will be delivered via email within 1 business day.",
            link: "#",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[500px] bg-gray-800 text-white overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-center bg-cover opacity-60" style={{ backgroundImage: 'url(https://placehold.co/1920x600/2c3e50/ffffff?text=Office+Background)' }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>

                <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-8">How can we help you today?</h1>
                        <div className="flex w-full max-w-xl relative">
                            <input
                                type="text"
                                placeholder="Enter your search term here..."
                                className="w-full py-4 px-6 rounded-l-md text-gray-800 focus:outline-none"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-r-md flex items-center">
                                Search
                            </button>
                        </div>
                    </div>
                    {/* Fox Image Placeholder */}
                    <div className="hidden lg:block absolute bottom-0 right-0">
                        <img src="https://placehold.co/400x600/e74c3c/ffffff?text=CARFAX+Fox" alt="CARFAX Fox" className="h-[500px]" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 relative z-10 -mt-24">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-blue-500 text-white p-8 rounded-lg text-center shadow-lg flex flex-col justify-between h-64">
                        <h2 className="text-3xl font-semibold mb-6">Resources</h2>
                        <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-2 px-6 rounded transition-colors">
                            FAQ & Glossary
                        </button>
                    </div>
                    <div className="bg-blue-500 text-white p-8 rounded-lg text-center shadow-lg flex flex-col justify-between h-64">
                        <h2 className="text-3xl font-semibold mb-6">Need us to investigate a report?</h2>
                        <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-2 px-6 rounded transition-colors">
                            Request A Review
                        </button>
                    </div>
                    <div className="bg-blue-500 text-white p-8 rounded-lg text-center shadow-lg flex flex-col justify-between h-64">
                        <h2 className="text-3xl font-semibold mb-6">Have a question?</h2>
                        <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-bold py-2 px-6 rounded transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Recent Articles */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <a href={article.link} className="text-xl font-semibold text-blue-600 hover:underline mb-2 block">
                                    {article.title}
                                </a>
                                <p className="text-gray-600 text-sm">{article.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportCenter;