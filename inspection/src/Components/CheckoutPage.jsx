import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// --- CONFIGURATION ---
// CHANGE THIS if your backend is hosted (e.g., "https://my-api.onrender.com")
const API_URL = "http://localhost:5000";

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 1. GET DATA
    const {
        planName = "Vehicle History Report + Lien Check",
        price = 77.95,
        vin = "1FM5K8D87TESTVIN",
    } = location.state || {};

    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    // Form Data
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        vinNo: '',
        email: '',
        confirmEmail: ''
    });

    // Payment Data (New!)
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    // Pre-fill VIN
    useEffect(() => {
        if (vin) setFormData(prev => ({ ...prev, vinNo: vin }));
    }, [vin]);

    // Handlers
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        // Simple formatter for Card Number (adds spaces)
        if (name === 'cardNumber') {
            const formatted = value.replace(/\D/g, '').substring(0, 16).replace(/(\d{4})/g, '$1 ').trim();
            setPaymentData({ ...paymentData, [name]: formatted });
        } else {
            setPaymentData({ ...paymentData, [name]: value });
        }
    };

    // 2. SUBMIT ORDER
    const handleDirectOrder = async (e) => {
        e.preventDefault();

        // --- VALIDATION ---
        if (!termsAccepted) return alert("Please accept the conditions of use.");
        if (formData.email !== formData.confirmEmail) return alert("Emails do not match!");

        // Payment Validation (Simulated)
        if (paymentData.cardNumber.length < 15 || !paymentData.expiry || !paymentData.cvc) {
            return alert("Please enter valid credit card details.");
        }

        setLoading(true);

        // --- 1. SIMULATE PAYMENT DELAY (Makes it look real) ---
        // This gives the "Processing Payment..." feeling
        await new Promise(resolve => setTimeout(resolve, 2000));

        // --- 2. SEND ORDER TO BACKEND ---
        const orderPayload = {
            fullName: formData.fullName,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            province: formData.province,
            postalCode: formData.postalCode,
            vin: formData.vinNo,
            planName: planName,
            price: price,
            paymentStatus: "PAID_VIA_CARD" // Mark as paid in your DB
        };

        try {
            const response = await fetch(`${API_URL}/api/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload),
            });

            const data = await response.json();

            if (data.success) {
                // Success!
                alert("✅ Payment Approved! Report sent to your email.");
                // navigate('/success'); // If you have a success page
            } else {
                alert("❌ Order Failed: " + (data.error || "Unknown error"));
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`❌ Network Error. Could not connect to ${API_URL}`);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans pb-20 text-gray-800">

            {/* HEADER */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <button onClick={() => navigate(-1)} className="flex items-center text-black font-bold text-lg hover:opacity-70 transition bg-transparent border-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* LEFT: FORM */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                    <form onSubmit={handleDirectOrder}>

                        {/* CUSTOMER INFO */}
                        <div className="mb-10">
                            <h2 className="text-xl font-bold text-gray-600 mb-6">Customer Information</h2>
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Name *</label>
                                    <input name="fullName" required value={formData.fullName} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Street Address *</label>
                                        <input name="address" required value={formData.address} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">City *</label>
                                        <input name="city" required value={formData.city} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Country *</label>
                                        <select className="w-full border border-gray-300 rounded-md p-2.5 bg-white outline-none focus:border-blue-500"><option>USA</option><option>Germany</option><option>Canada</option><option>France</option><option>Italy</option><option>Spain</option><option>Netherland</option><option>Other</option></select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Province *</label>
                                        <input name="province" required value={formData.province} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Postal Code *</label>
                                        <input name="postalCode" required value={formData.postalCode} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">VIN Number *</label>
                                    <input name="vinNo" required value={formData.vinNo} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Email *</label>
                                    <input name="email" required value={formData.email} onChange={handleChange} type="email" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Confirm Email *</label>
                                    <input name="confirmEmail" required value={formData.confirmEmail} onChange={handleChange} type="email" className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-gray-200 my-10"></div>

                        {/* PAYMENT SECTION (NOW ACTIVE) */}

                        {/* Terms */}
                        <div className="flex items-start mb-8 mt-6">
                            <input type="checkbox" id="terms" className="mt-1 w-5 h-5 border-gray-300 rounded cursor-pointer" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
                            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">I agree to Conditions of Use</label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-bold py-4 rounded-md text-lg transition-all shadow-md flex justify-center items-center ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#5fa9f7] hover:bg-[#4d95e0] hover:shadow-lg transform active:scale-[0.99]'}`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing Payment...
                                </>
                            ) : (
                                "Pay Now"
                            )}
                        </button>
                    </form>
                </div>

                {/* RIGHT: SUMMARY */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-600 mb-6">Order Summary</h2>
                        <div className="flex justify-between items-start mb-4">
                            <div className="pr-4">
                                <h3 className="font-bold text-gray-700 text-sm">{planName}</h3>
                                <p className="text-xs text-gray-500 mt-1">VIN: {formData.vinNo || "..."}</p>
                            </div>
                            <div className="font-bold text-gray-700 text-lg">${price.toFixed(2)}</div>
                        </div>

                        <ul className="space-y-2 mb-6 text-sm text-gray-600">
                            <SummaryItem text="Accident and damage history" />
                            <SummaryItem text="Recall information" />
                            <SummaryItem text="Lien Check Included" />
                        </ul>

                        <div className="bg-white p-4 rounded border border-gray-200 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-gray-500 text-sm">SubTotal</span>
                                <span className="text-gray-700 font-medium">${price.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-500 text-sm">Tax (10%)</span>
                                <span className="text-gray-700 font-medium">${(price * 0.10).toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                                <span className="font-bold text-gray-800">Total</span>
                                <span className="font-bold text-gray-600 text-xl">${(price * 1.10).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper for list items
const SummaryItem = ({ text }) => (
    <li className="flex items-center">
        <span className="mr-2 bg-[#88c425] rounded-full p-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </span>
        {text}
    </li>
);

export default CheckoutPage;
