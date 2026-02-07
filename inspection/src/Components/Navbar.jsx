// import React, { useState } from 'react';
// import { NavDropdown } from 'react-bootstrap';


// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="font-sans text-gray-800">
//             {/* --- Top Utility Bar --- */}
//             <div className="border-b border-gray-200 bg-white">
//                 <div className="container mx-auto px-6 h-10 flex justify-end items-center text-sm font-medium text-gray-500">
//                     <a href="#" className="hover:text-blue-600 transition mr-6 no-underline">Dealer Login</a>
//                     <a href="#" className="hover:text-blue-600 transition mr-6 no-underline">FR</a>
//                     <button className="hover:text-blue-600 transition" aria-label="Accessibility">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                             <circle cx="12" cy="7" r="4" />
//                             <path d="M12 11c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* --- Main Navigation --- */}
//             <div className="bg-white shadow-sm relative z-50">
//                 <div className="container mx-auto px-6 h-20 flex justify-between items-center">

//                     {/* Logo */}
//                     <a href="/" className="flex items-center gap-0.5 group no-underline">
//                         <span className="logo-box">C</span>
//                         <span className="logo-box">A</span>
//                         <span className="logo-box">R</span>
//                         <span className="logo-box">F</span>
//                         <span className="logo-box">A</span>
//                         <span className="logo-box">X</span>
//                         <span className="text-red-600 text-3xl ml-1 leading-none">🍁</span>
//                     </a>

//                     {/* Desktop Menu */}
//                     <ul className="hidden lg:flex items-center gap-4 mb-0 list-none">

//                         {/* Hoverable Dropdown 1 */}
//                         <NavDropdown
//                             title="Vehicle History"
//                             id="history-drop"
//                             className="font-medium text-gray-700 hover-dropdown"
//                         >
//                             <NavDropdown.Item href="/vehical-history">Vehical History Reports</NavDropdown.Item>
//                             <NavDropdown.Item href="/sample-report">View a Sample Report</NavDropdown.Item>

//                         </NavDropdown>

//                         {/* Hoverable Dropdown 2 */}
//                         <NavDropdown
//                             title="Vehicle Fraud"
//                             id="value-drop"
//                             className="font-medium text-gray-700 hover-dropdown"
//                         >
//                             <NavDropdown.Item href="/Vin-fraud">What is VIN Fruad?</NavDropdown.Item>
//                             {/* <NavDropdown.Item href="/Vin-fraud-check">VIN Fruad Check</NavDropdown.Item> */}
//                             <NavDropdown.Item href="/not-found">Vehical Monitoring Subscription</NavDropdown.Item>
//                         </NavDropdown>

//                         {/* DROPDOWN 3 */}

//                         <NavDropdown
//                             title="What's My Car Worth"
//                             id="value-drop"
//                             className="font-medium text-gray-700 hover-dropdown"
//                         >
//                             <NavDropdown.Item href="/not-found">Car Value</NavDropdown.Item>
//                             <NavDropdown.Item href="/not-found">History Based Value</NavDropdown.Item>
//                         </NavDropdown>

//                         {/* DROPDOWN 4 */}


//                         <NavDropdown
//                             title="Tools"
//                             id="value-drop"
//                             className="font-medium text-gray-700 hover-dropdown"
//                         >
//                             <NavDropdown.Item href="/Vin-Decoder">VIN Decoder </NavDropdown.Item>
//                             <NavDropdown.Item href="/Recall-page">RecallCheck</NavDropdown.Item>
//                             <NavDropdown.Item href="/not-found">Car Care</NavDropdown.Item>
//                         </NavDropdown>



//                         {/* DROPDOWN 5 */}


//                         <NavDropdown
//                             title="Resources"
//                             id="value-drop"
//                             className="font-medium text-gray-700 hover-dropdown "
//                         >
//                             <NavDropdown.Item href="#">Learn </NavDropdown.Item>
//                             <NavDropdown.Item href="#">Support</NavDropdown.Item>
//                         </NavDropdown>


//                     </ul>

//                     {/* Mobile Toggle... (remains the same) */}
//                 </div>
//             </div>

//             <style>{`
//                 .logo-box {
//                     background-color: black;
//                     color: white;
//                     font-weight: 1000;
//                     width: 32px;
//                     height: 32px;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     font-size: 1.25rem;
//                 }

//                 /* HOVER LOGIC */
//                 @media (min-width: 992px) {
//                     .hover-dropdown:hover .dropdown-menu {
//                         display: block;
//                         margin-top: 0; /* Prevents a gap that closes the menu when moving mouse */
//                     }
//                 }

//                 /* Style Adjustments */
//                 .dropdown-toggle::after {
//                     vertical-align: middle !important;
//                 }
//                 .dropdown-item:hover {
//                     background-color: #f3f4f6;
//                     color: #2563eb;
//                 }
//                 .no-underline { text-decoration: none !important; }
//             `}</style>
//         </nav>
//     );
// }

// const NavItem = ({ text }) => (
//     <li className="px-3 py-2 cursor-pointer font-medium text-gray-700 hover:text-blue-600 transition list-none">
//         {text}
//     </li>
// );

import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="font-sans text-gray-800 relative shadow-sm z-50 bg-white">

            {/* --- Top Utility Bar (VISIBLE ON MOBILE NOW) --- */}
            {/* I removed 'hidden md:block' so this stays visible on all screens */}
            <div className="border-b border-gray-200 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 h-10 flex justify-end items-center text-xs sm:text-sm font-medium text-gray-500">
                    <a href="#" className="hover:text-blue-600 transition mr-4 sm:mr-6 no-underline text-gray-500">Dealer Login</a>
                    <a href="#" className="hover:text-blue-600 transition mr-4 sm:mr-6 no-underline text-gray-500">FR</a>
                    <button className="hover:text-blue-600 transition" aria-label="Accessibility">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="7" r="4" />
                            <path d="M12 11c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- Main Navigation Bar --- */}
            <div className="bg-white relative z-50">
                <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">

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

                    {/* --- DESKTOP MENU --- */}
                    <ul className="hidden lg:flex items-center gap-6 mb-0 list-none">
                        <NavDropdown title="Vehicle History" id="history-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item href="/vehical-history">Vehicle History Reports</NavDropdown.Item>
                            <NavDropdown.Item href="/sample-report">View a Sample Report</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Vehicle Fraud" id="fraud-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item href="/Vin-fraud">What is VIN Fraud?</NavDropdown.Item>
                            <NavDropdown.Item href="/not-found">Vehicle Monitoring</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="What's My Car Worth" id="worth-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item href="/not-found">Car Value</NavDropdown.Item>
                            <NavDropdown.Item href="/not-found">History Based Value</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Tools" id="tools-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item href="/Vin-Decoder">VIN Decoder</NavDropdown.Item>
                            <NavDropdown.Item href="/Recall-page">RecallCheck</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Resources" id="resources-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item href="#">Learn</NavDropdown.Item>
                            <NavDropdown.Item href="#">Support</NavDropdown.Item>
                        </NavDropdown>
                    </ul>

                    {/* --- MOBILE HAMBURGER BUTTON --- */}
                    <button
                        className="lg:hidden p-2 text-gray-700 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- MOBILE ACCORDION MENU --- */}
            <div className={`lg:hidden bg-white w-full border-t border-gray-200 absolute left-0 shadow-xl overflow-y-auto transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex flex-col px-6 py-2 pb-10">

                    {/* Accordion Item 1 */}
                    <MobileAccordion title="Vehicle History">
                        <a href="/vehical-history" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Vehicle History Reports</a>
                        <a href="/sample-report" className="block py-2 text-gray-600 no-underline hover:text-blue-600">View a Sample Report</a>
                    </MobileAccordion>

                    {/* Accordion Item 2 */}
                    <MobileAccordion title="Vehicle Fraud">
                        <a href="/Vin-fraud" className="block py-2 text-gray-600 no-underline hover:text-blue-600">What is VIN Fraud?</a>
                        <a href="/not-found" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Vehicle Monitoring</a>
                    </MobileAccordion>

                    {/* Accordion Item 3 */}
                    <MobileAccordion title="What's My Car Worth">
                        <a href="/not-found" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Car Value</a>
                        <a href="/not-found" className="block py-2 text-gray-600 no-underline hover:text-blue-600">History Based Value</a>
                    </MobileAccordion>

                    {/* Accordion Item 4 */}
                    <MobileAccordion title="Tools">
                        <a href="/Vin-Decoder" className="block py-2 text-gray-600 no-underline hover:text-blue-600">VIN Decoder</a>
                        <a href="/not-found" className="block py-2 text-gray-600 no-underline hover:text-blue-600">RecallCheck</a>
                        <a href="/not-found" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Car Care</a>
                    </MobileAccordion>

                    {/* Accordion Item 5 */}
                    <MobileAccordion title="Resources">
                        <a href="/learn" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Learn</a>
                        <a href="#" className="block py-2 text-gray-600 no-underline hover:text-blue-600">Support</a>
                    </MobileAccordion>

                    {/* Removed the 'Dealer Login' footer from here */}

                </div>
            </div>

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
                @media (min-width: 992px) {
                    .hover-dropdown:hover .dropdown-menu {
                        display: block;
                        margin-top: 0; 
                        border-top: 3px solid #0084ff;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                }
                .no-underline { text-decoration: none !important; }
                a:hover { text-decoration: none; }
            `}</style>
        </nav>
    );
}

// --- Helper Component for the Mobile Accordion ---
const MobileAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 flex justify-between items-center text-left text-lg font-medium text-gray-700 focus:outline-none"
            >
                {title}
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 pb-4 flex flex-col gap-1">
                    {children}
                </div>
            </div>
        </div>
    );
};