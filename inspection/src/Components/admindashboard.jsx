// // ============================================
// // REACT COMPONENT: Admin Dashboard with Login
// // ============================================
// // File: src/components/AdminDashboard.jsx

// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [loginError, setLoginError] = useState('');

//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [generatingVin, setGeneratingVin] = useState(null);

//     // Check if already logged in
//     useEffect(() => {
//         const authToken = sessionStorage.getItem('adminAuth');
//         if (authToken === 'authenticated') {
//             setIsAuthenticated(true);
//             fetchOrders();
//         }
//     }, []);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoginError('');

//         // console.log('🔐 Attempting login with:', { username, password });

//         try {
//             const response = await fetch('http://localhost:5000/api/admin/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password })
//             });

//             console.log('📡 Response status:', response.status);
//             const data = await response.json();
//             console.log('📦 Response data:', data);

//             if (data.success) {
//                 console.log('✅ Login successful!');
//                 setIsAuthenticated(true);
//                 sessionStorage.setItem('adminAuth', 'authenticated');
//                 fetchOrders();
//             } else {
//                 console.log('❌ Login failed:', data.message);
//                 setLoginError(data.message || 'Invalid credentials');
//                 setPassword('');
//             }
//         } catch (err) {
//             console.error('🚨 Login error:', err);
//             setLoginError('Connection failed. Is the server running on port 5000?');
//             setPassword('');
//         }
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         sessionStorage.removeItem('adminAuth');
//         setUsername('');
//         setPassword('');
//         setOrders([]);
//     };

//     const fetchOrders = async () => {
//         try {
//             setLoading(true);
//             setError(null);

//             const response = await fetch('http://localhost:5000/api/admin/orders');
//             const data = await response.json();

//             if (data.success) {
//                 setOrders(data.data);
//             } else {
//                 setError(data.message || 'Failed to fetch orders');
//             }
//         } catch (err) {
//             setError('Failed to fetch orders');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleGenerateReport = async (vin) => {
//         try {
//             setGeneratingVin(vin);

//             const response = await fetch('http://localhost:5000/api/admin/generate-report', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ vin })
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to generate report');
//             }

//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `report_${vin}.pdf`);
//             document.body.appendChild(link);
//             link.click();
//             link.remove();
//             window.URL.revokeObjectURL(url);
//         } catch (err) {
//             alert(`Error: Failed to generate report`);
//         } finally {
//             setGeneratingVin(null);
//         }
//     };

//     // Login Screen
//     if (!isAuthenticated) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
//                 <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
//                     <div className="text-center mb-8">
//                         <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
//                         <p className="text-gray-600 mt-2">Enter your credentials to access the dashboard</p>
//                     </div>

//                     <div className="space-y-6">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
//                             <input
//                                 type="text"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                                 placeholder="Enter username"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
//                             <input
//                                 type="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
//                                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
//                                 placeholder="Enter password"
//                             />
//                         </div>

//                         {loginError && (
//                             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
//                                 {loginError}
//                             </div>
//                         )}

//                         <button
//                             onClick={handleLogin}
//                             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//                         >
//                             Login
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Dashboard
//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <div className="text-lg">Loading orders...</div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="bg-white shadow-sm border-b">
//                 <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//                     <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//                     <button
//                         onClick={handleLogout}
//                         className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
//                     >
//                         Logout
//                     </button>
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 py-8">
//                 {error && (
//                     <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//                         {error}
//                         <button
//                             onClick={fetchOrders}
//                             className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                         >
//                             Retry
//                         </button>
//                     </div>
//                 )}

//                 <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                     <div className="px-6 py-4 bg-gray-50 border-b">
//                         <h2 className="text-xl font-semibold text-gray-800">Paid Orders ({orders.length})</h2>
//                     </div>

//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">VIN Number</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {orders.length === 0 ? (
//                                 <tr>
//                                     <td colSpan="3" className="px-6 py-8 text-center text-gray-500">No paid orders found</td>
//                                 </tr>
//                             ) : (
//                                 orders.map((order) => (
//                                     <tr key={order._id} className="hover:bg-gray-50">
//                                         <td className="px-6 py-4 text-sm text-gray-900">{order.email}</td>
//                                         <td className="px-6 py-4 text-sm text-gray-900 font-mono">{order.vin}</td>
//                                         <td className="px-6 py-4 text-sm">
//                                             <button
//                                                 onClick={() => handleGenerateReport(order.vin)}
//                                                 disabled={generatingVin === order.vin}
//                                                 className={`px-4 py-2 rounded text-white font-medium ${generatingVin === order.vin ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//                                                     }`}
//                                             >
//                                                 {generatingVin === order.vin ? 'Generating...' : 'Generate Report'}
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, LogOut, Loader, Lock } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();

    // State for Login
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State for Dashboard
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [generatingPdfId, setGeneratingPdfId] = useState(null);

    // 1. CHECK LOGIN STATUS ON LOAD
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            setIsAuthenticated(true);
            fetchOrders(token); // Fetch immediately if logged in
        }
    }, []);

    // 2. LOGIN FUNCTION
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                // SAVE TOKEN TO BROWSER
                localStorage.setItem('adminToken', data.token);
                setIsAuthenticated(true);
                fetchOrders(data.token); // Load data
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Connection error. Is backend running?');
        }
        setLoading(false);
    };

    // 3. LOGOUT FUNCTION
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        setIsAuthenticated(false);
        setOrders([]);
        setUsername('');
        setPassword('');
    };

    // 4. FETCH ORDERS (SECURELY)
    const fetchOrders = async (token) => {
        try {
            // FIX: We must send the token in the headers!
            const response = await fetch('http://localhost:5000/api/admin/orders', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 401 || response.status === 403) {
                // If token is invalid/expired, force logout
                handleLogout();
                return;
            }

            const data = await response.json();
            if (data.success) {
                setOrders(data.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // 5. GENERATE PDF FUNCTION
    const generateReport = async (vin) => {
        setGeneratingPdfId(vin);
        const token = localStorage.getItem('adminToken');

        try {
            const response = await fetch('http://localhost:5000/api/admin/generate-report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Send Token here too!
                },
                body: JSON.stringify({ vin })
            });

            if (response.ok) {
                // Create a download link for the PDF
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Report_${vin}.pdf`;
                document.body.appendChild(a);
                a.click();
                a.remove();
            } else {
                alert("Failed to generate report");
            }
        } catch (error) {
            alert("Error downloading PDF");
        }
        setGeneratingPdfId(null);
    };

    // --- RENDER LOGIN SCREEN ---
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <Lock className="w-8 h-8 text-blue-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-blue-300"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // --- RENDER DASHBOARD (LOGGED IN) ---
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800 flex items-center">
                        <FileText className="mr-2 text-blue-600" />
                        Admin Dashboard
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-gray-600 hover:text-red-600 transition"
                    >
                        <LogOut className="w-5 h-5 mr-2" />
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                        <h2 className="font-semibold text-gray-700">Paid Orders</h2>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {orders.length} Orders
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VIN</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {orders.map((order) => (
                                    <tr key={order._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{order.fullName}</div>
                                            <div className="text-sm text-gray-500">{order.email}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                                            {order.vin}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            ${order.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                onClick={() => generateReport(order.vin)}
                                                disabled={generatingPdfId === order.vin}
                                                className="text-blue-600 hover:text-blue-900 flex items-center disabled:opacity-50"
                                            >
                                                {generatingPdfId === order.vin ? (
                                                    <Loader className="w-4 h-4 animate-spin mr-1" />
                                                ) : (
                                                    <FileText className="w-4 h-4 mr-1" />
                                                )}
                                                Generate PDF
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {orders.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-10 text-center text-gray-400">
                                            No orders found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;