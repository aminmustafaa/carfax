import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Removed unused 'Link'
import { ArrowLeft, Check } from 'lucide-react'; // Removed unused icons

const CheckoutPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // 1. GET DATA: Retrieve plan details & CAR DETAILS passed from previous page
    const {
        planName = "Vehicle History Report + Lien Check",
        price = 77.95,
        vin = "1FM5K8D87TESTVIN", // Default from previous page
        year = "2018",
        make = "Ford",
        model = "Mustang"
    } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    // 2. STATE FOR FORM INPUTS
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        province: 'Ontario', // Default selected value matches the select box
        postalCode: '',
        vinNo: '',
        email: '',
        confirmEmail: ''
    });

    // FIX: Pre-fill the VIN input field when the component loads using the prop passed in
    useEffect(() => {
        if (vin) {
            setFormData(prev => ({ ...prev, vinNo: vin }));
        }
    }, [vin]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. SUBMIT FUNCTION
    const handleDirectOrder = async (e) => {
        e.preventDefault();

        // Validation
        if (!termsAccepted) {
            alert("Please accept the conditions of use.");
            return;
        }
        if (formData.email !== formData.confirmEmail) {
            alert("Emails do not match!");
            return;
        }

        setLoading(true);

        const orderPayload = {
            fullName: formData.fullName,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            province: formData.province,
            postalCode: formData.postalCode,
            // FIX: Send the VIN from the FORM (formData.vinNo), not the old state.
            // This allows the user to correct the VIN if it was wrong.
            vin: formData.vinNo,
            planName: planName,
            price: price
        };

        try {
            const response = await fetch('http://localhost:5000/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderPayload),
            });

            const data = await response.json();

            if (data.success) {
                alert("✅ Success! Order saved to Database.");
                // navigate('/success'); 
            } else {
                alert("❌ Failed: " + data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("❌ Connection Error. Is your backend running?");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans pb-20 text-gray-800">

            {/* --- HEADER --- */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-black font-bold text-lg hover:opacity-70 transition"
                    >
                        <ArrowLeft className="w-6 h-6 mr-2" strokeWidth={3} />
                        Back
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* --- LEFT COLUMN: FORMS --- */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                    <form onSubmit={handleDirectOrder}>

                        {/* Customer Info Section */}
                        <div className="mb-10">
                            <h2 className="text-xl font-bold text-gray-600 mb-6">Customer Information</h2>

                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Name *</label>
                                    <input
                                        name="fullName" required
                                        value={formData.fullName} // ADDED VALUE
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Address & City Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Street Address *</label>
                                        <input
                                            name="address" required
                                            value={formData.address} // ADDED VALUE
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">City *</label>
                                        <input
                                            name="city" required
                                            value={formData.city} // ADDED VALUE
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* Country / Province / Postal Row */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Country *</label>
                                        <select className="w-full border border-gray-300 rounded-md p-2.5 bg-white outline-none focus:border-blue-500">
                                            <option>Canada</option>
                                            <option>USA</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Province *</label>
                                        <select
                                            name="province"
                                            value={formData.province} // ADDED VALUE
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-md p-2.5 bg-white outline-none focus:border-blue-500"
                                        >
                                            <option>Ontario</option>
                                            <option>Alberta</option>
                                            <option>British Columbia</option>
                                            <option>Manitoba</option>
                                            <option>New Brunswick</option>
                                            <option>Newfoundland and Labrador</option>
                                            <option>Nova Scotia</option>
                                            <option>Prince Edward Island</option>
                                            <option>Quebec</option>
                                            <option>Saskatchewan</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-600 mb-1">Postal Code *</label>
                                        <input
                                            name="postalCode" required
                                            value={formData.postalCode} // ADDED VALUE
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                {/* VIN Number */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">VIN Number *</label>
                                    <input
                                        name="vinNo" required
                                        value={formData.vinNo} // ADDED VALUE
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Emails */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Email *</label>
                                    <input
                                        name="email" required
                                        value={formData.email} // ADDED VALUE
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-600 mb-1">Confirm Email *</label>
                                    <input
                                        name="confirmEmail" required
                                        value={formData.confirmEmail} // ADDED VALUE
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full border border-gray-300 rounded-md p-2.5 outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <div className="h-px bg-gray-200 my-10"></div>

                        {/* Payment Method Section (VISUAL ONLY) */}
                        <div className="mb-8 opacity-50 pointer-events-none">
                            <h2 className="text-xl font-bold text-gray-600 mb-6">Payment Method (Mockup)</h2>
                            <div className="space-y-4">
                                <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between bg-gray-50">
                                    <div className="flex items-center">
                                        <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                                        </div>
                                        <span className="text-gray-700 text-sm">Pay with Credit Card</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start mb-8 mt-6">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-1 w-5 h-5 border-gray-300 rounded cursor-pointer"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                                I agree to Conditions of Use
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full text-white font-bold py-3 rounded-md text-lg transition-colors ${loading ? 'bg-gray-400' : 'bg-[#5fa9f7] hover:bg-[#4d95e0]'}`}
                        >
                            {loading ? "Processing..." : "Generate PDF (Free Test)"}
                        </button>
                    </form>
                </div>

                {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                    <div>
                        <h2 className="text-xl font-bold text-gray-600 mb-6">Order Summary</h2>

                        <div className="flex justify-between items-start mb-4">
                            <div className="pr-4">
                                <h3 className="font-bold text-gray-700 text-sm">{planName}</h3>
                                {/* Shows VIN currently in form, or original VIN if form is empty */}
                                <p className="text-xs text-gray-500 mt-1">VIN: {formData.vinNo || vin}</p>
                            </div>
                            <div className="font-bold text-gray-700 text-lg">${price.toFixed(2)}</div>
                        </div>

                        <ul className="space-y-1 mb-6 text-sm text-gray-600">
                            <SummaryItem icon={<Check className="text-[#88c425] w-5 h-5" />} text="Accident and damage history" />
                            <SummaryItem icon={<Check className="text-[#88c425] w-5 h-5" />} text="Recall information" />
                            <SummaryItem icon={<Check className="text-[#88c425] w-5 h-5" />} text="Free History-Based Value" />
                        </ul>

                        <div className="bg-[#f2f2f2] p-6 rounded-sm">
                            <div className="flex justify-between items-center mb-10">
                                <span className="font-bold text-gray-700 text-sm">SubTotal</span>
                                <span className="font-bold text-gray-700 text-2xl">${price.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper for list items
const SummaryItem = ({ icon, text }) => (
    <li className="flex items-center">
        <span className="mr-2">{icon}</span>
        {text}
    </li>
);

export default CheckoutPage;