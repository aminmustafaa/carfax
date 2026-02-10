import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link
import { NavDropdown } from 'react-bootstrap';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Helper to close menu when a link is clicked
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="font-sans text-gray-800 relative shadow-sm z-50 bg-white">

            {/* --- Top Utility Bar --- */}
            <div className="border-b border-gray-200 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 h-10 flex justify-end items-center text-xs sm:text-sm font-medium text-gray-500">
                    <Link to="/admin-dashboard" className="hover:text-blue-600 transition mr-4 sm:mr-6 no-underline text-gray-500">Dealer Login</Link>
                    <Link to="/fr" className="hover:text-blue-600 transition mr-4 sm:mr-6 no-underline text-gray-500">FR</Link>
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
                    <Link to="/" className="flex items-center gap-0.5 group no-underline">
                        <span className="logo-box">C</span>
                        <span className="logo-box">A</span>
                        <span className="logo-box">R</span>
                        <span className="logo-box">F</span>
                        <span className="logo-box">A</span>
                        <span className="logo-box">X</span>
                        <span className="text-red-600 text-3xl ml-1 leading-none">🍁</span>
                    </Link>

                    {/* --- DESKTOP MENU --- */}
                    <ul className="hidden lg:flex items-center gap-6 mb-0 list-none">
                        <NavDropdown title="Vehicle History" id="history-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item as={Link} to="/vehical-history">Vehicle History Reports</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sample-report">View a Sample Report</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Vehicle Fraud" id="fraud-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item as={Link} to="/Vin-fraud">What is VIN Fraud?</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/not-found">Vehicle Monitoring</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="What's My Car Worth" id="worth-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item as={Link} to="/not-found">Car Value</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/not-found">History Based Value</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Tools" id="tools-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item as={Link} to="/Vin-Decoder">VIN Decoder</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Recall-page">RecallCheck</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Resources" id="resources-drop" className="font-medium text-gray-700 hover-dropdown">
                            <NavDropdown.Item as={Link} to="/learn">Learn</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Support">Support</NavDropdown.Item>
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
                        <Link to="/vehical-history" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Vehicle History Reports</Link>
                        <Link to="/sample-report" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">View a Sample Report</Link>
                    </MobileAccordion>

                    {/* Accordion Item 2 */}
                    <MobileAccordion title="Vehicle Fraud">
                        <Link to="/Vin-fraud" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">What is VIN Fraud?</Link>
                        <Link to="/not-found" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Vehicle Monitoring</Link>
                    </MobileAccordion>

                    {/* Accordion Item 3 */}
                    <MobileAccordion title="What's My Car Worth">
                        <Link to="/not-found" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Car Value</Link>
                        <Link to="/not-found" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">History Based Value</Link>
                    </MobileAccordion>

                    {/* Accordion Item 4 */}
                    <MobileAccordion title="Tools">
                        <Link to="/Vin-Decoder" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">VIN Decoder</Link>
                        <Link to="/Recall-page" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">RecallCheck</Link>
                        <Link to="/not-found" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Car Care</Link>
                    </MobileAccordion>

                    {/* Accordion Item 5 */}
                    <MobileAccordion title="Resources">
                        <Link to="/learn" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Learn</Link>
                        <Link to="/Support" onClick={closeMenu} className="block py-2 text-gray-600 no-underline hover:text-blue-600">Support</Link>
                    </MobileAccordion>

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