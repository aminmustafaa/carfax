import React, { useState } from 'react';

const Footer = () => {
    // State to track which section is open on mobile
    // null = all closed, string = title of open section
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (title) => {
        if (openSection === title) {
            setOpenSection(null); // Close if clicking the same one
        } else {
            setOpenSection(title); // Open the new one
        }
    };

    // Data structure for the footer links
    const footerSections = [
        {
            title: "Products",
            links: [
                "CARFAX Vehicle History Reports",
                "CARFAX VIN Fraud Check",
                "CARFAX Vehicle Monitoring",
                "CARFAX History-Based Value",
                "CARFAX VIN Decoder",
                "CARFAX Recall Check",
                "CARFAX Car Care"
            ]
        },
        {
            title: "Resources",
            links: [
                "Learn",
                "Support",

            ]
        },
        {
            title: "Company",
            links: [
                "About",
                "Contact",
                "Vehicle Fraud",
                "CARPROOF is CARFAX "
            ]
        },
        {
            title: "Business Solutions",
            links: [
                "Dealer Login",
                "Become a Dealer Member",
            ]
        }
    ];

    return (
        <footer className="bg-[#1F2125] text-white pt-8 md:pt-16 pb-8 text-sm font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* =========================================
                    MOBILE VIEW: Accordion / Dropdowns
                    (Hidden on medium screens and up)
                   ========================================= */}
                <div className="lg:hidden mb-12">
                    {footerSections.map((section) => (
                        <div key={section.title} className="border-b border-gray-700 last:border-none">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="w-full flex justify-between items-center py-4 text-left font-bold text-base focus:outline-none"
                            >
                                {section.title}
                                {/* Arrow Icon */}
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${openSection === section.title ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.title ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <ul className="space-y-3 pl-2">
                                    {section.links.map((link, index) => (
                                        <li key={index}>
                                            <a href="#" className="text-gray-300 no-underline hover:text-white block py-1">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* =========================================
                    DESKTOP VIEW: Grid Layout
                    (Hidden on small screens)
                   ========================================= */}
                <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-lg font-bold mb-6 text-white">{section.title}</h3>
                            <ul className="space-y-4">
                                {section.links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-300 hover:text-white no-underline transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* =========================================
                    Bottom Section: Copyright & Socials
                    (Same for both, just flex adjustments)
                   ========================================= */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-8 border-t border-gray-700 md:border-none">

                    {/* Left Side: Copyright & Links */}
                    <div className="flex flex-col space-y-4 md:space-y-6 mb-8 md:mb-0 w-full md:w-auto">
                        <p className="text-gray-400 text-xs">
                            © 2025 CARFAX ULC. All Rights Reserved.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 text-sm font-medium">
                            <a href="#" className="text-gray-300 no-underline hover:text-white">Privacy/Legal</a>
                            <a href="#" className="text-gray-300 no-underline hover:text-white">Accessibility</a>
                            <a href="#" className="text-gray-300 no-underline hover:text-white">Conditions Of Use</a>
                        </div>
                    </div>

                    {/* Right Side: Social Icons */}
                    <div className="flex space-x-4">
                        {/* Facebook */}
                        <a href="#" className="bg-white text-gray-900 p-2 rounded hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="bg-white text-gray-900 p-2 rounded hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.465C6.104 2.218 6.83 2.049 7.894 2.001 8.918 1.954 9.272 1.94 11.685 1.94H12.315zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.838a3.162 3.162 0 110 6.324 3.162 3.162 0 010-6.324zM18.845 5.655a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" clipRule="evenodd" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="bg-white text-gray-900 p-2 rounded hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="bg-white text-gray-900 p-2 rounded hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;