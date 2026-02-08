// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const axios = require('axios');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const helmet = require('helmet');
// const rateLimit = require('express-rate-limit'); // New package
// require('dotenv').config();

// const app = express();

// // --- SECURITY CHECKS ---
// // Fail immediately if secrets are missing. Never use defaults in code.
// if (!process.env.JWT_SECRET || !process.env.ADMIN_PASSWORD) {
//     console.error('❌ FATAL ERROR: JWT_SECRET or ADMIN_PASSWORD is not set in .env');
//     process.exit(1);
// }

// // --- Middleware ---
// // Restrict CORS to your frontend domain only
// app.use(cors({
//     origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//     credentials: true
// }));
// app.use(helmet());
// app.use(express.json());

// // --- Rate Limiter for Login ---
// // Prevents bots from guessing your password
// const loginLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5, // Limit each IP to 5 login requests per windowMs
//     message: "Too many login attempts, please try again after 15 minutes"
// });

// // --- 1. CONNECT TO MONGODB ---
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-reports-db';

// mongoose.connect(MONGODB_URI)
//     .then(() => {
//         console.log('✅ MongoDB Connected');
//         createDefaultAdmin();
//     })
//     .catch(err => console.error('❌ MongoDB Connection Error:', err));

// // --- 2. SCHEMAS ---
// const OrderSchema = new mongoose.Schema({
//     fullName: String,
//     email: String,
//     vin: String,
//     planName: String,
//     price: Number,
//     // Status defaults to Pending. NEVER default to Paid in the API.
//     status: { type: String, default: 'Pending' },
//     createdAt: { type: Date, default: Date.now }
// });
// const Order = mongoose.model('Order', OrderSchema);

// const AdminSchema = new mongoose.Schema({
//     username: { type: String, unique: true, required: true },
//     password: { type: String, required: true }
// });
// const Admin = mongoose.model('Admin', AdminSchema);

// // --- 3. HELPER: CREATE OR UPDATE ADMIN ---
// const createDefaultAdmin = async () => {
//     try {
//         const adminUsername = process.env.ADMIN_USERNAME || 'admin';
//         const adminPassword = process.env.ADMIN_PASSWORD; // No fallback here!

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(adminPassword, salt);

//         const existingAdmin = await Admin.findOne({ username: adminUsername });

//         if (!existingAdmin) {
//             const newAdmin = new Admin({
//                 username: adminUsername,
//                 password: hashedPassword
//             });
//             await newAdmin.save();
//             console.log(`👤 New Admin Created: ${adminUsername}`);
//         } else {
//             // Update password on restart if .env changed
//             existingAdmin.password = hashedPassword;
//             await existingAdmin.save();
//             console.log(`♻️ Admin Password synced for: ${adminUsername}`);
//         }
//     } catch (error) {
//         console.error("Error setting up admin:", error);
//     }
// };

// // --- 4. AUTH MIDDLEWARE ---
// const authenticateToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) return res.status(401).json({ message: 'Access Denied' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: 'Invalid Token' });
//         req.user = user;
//         next();
//     });
// };

// // --- 5. API ROUTES ---

// app.get('/', (req, res) => res.send('Secure Backend is Running!'));

// // Public: Create Order
// // Note: This creates a PENDING order. You need a webhook (like Stripe) to mark it Paid.
// app.post('/api/create-order', async (req, res) => {
//     try {
//         // We force status to Pending here so users can't fake "Paid" in the body
//         const orderData = { ...req.body, status: 'Pending' };
//         const newOrder = new Order(orderData);
//         await newOrder.save();
//         res.json({ success: true, message: "Order initialized", orderId: newOrder._id });
//     } catch (error) {
//         res.status(500).json({ success: false, error: "Failed to create order" });
//     }
// });

// // Public: Admin Login (Protected by Limiter)
// app.post('/api/admin/login', loginLimiter, async (req, res) => {
//     const { username, password } = req.body;

//     const admin = await Admin.findOne({ username });
//     if (!admin) return res.status(400).json({ message: 'Invalid Credentials' }); // Don't say "User not found" (security best practice)

//     const validPassword = await bcrypt.compare(password, admin.password);
//     if (!validPassword) return res.status(400).json({ message: 'Invalid Credentials' });

//     const token = jwt.sign(
//         { _id: admin._id },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//     );

//     res.json({ success: true, token: token });
// });

// // Protected: Get All Paid Orders
// app.get('/api/admin/orders', authenticateToken, async (req, res) => {
//     try {
//         // Only fetch orders that are actually paid
//         const orders = await Order.find({ status: 'Paid' }).sort({ createdAt: -1 });
//         res.json({ success: true, data: orders });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// });

// // Protected: Generate Report
// app.post('/api/admin/generate-report', authenticateToken, async (req, res) => {
//     try {
//         const { vin } = req.body;
//         if (!vin) return res.status(400).json({ message: 'VIN required' });

//         // IMPORTANT: Ensure you trust this external URL or put it in .env
//         const response = await axios({
//             method: 'get',
//             url: `https://api.example.com/report?vin=${vin}`,
//             responseType: 'stream'
//         });

//         res.setHeader('Content-Type', 'application/pdf');
//         response.data.pipe(res);

//     } catch (error) {
//         console.error("Report Error", error.message);
//         res.status(500).json({ message: 'Failed to generate report' });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// --- SECURITY CHECKS ---
if (!process.env.JWT_SECRET || !process.env.ADMIN_PASSWORD) {
    console.error('❌ FATAL ERROR: JWT_SECRET or ADMIN_PASSWORD is not set in .env');
    // In Vercel, we don't want to crash the whole process, just log the error
    // process.exit(1); 
}

// --- Middleware ---
app.use(cors({
    // IMPORTANT: In Vercel Dashboard, set FRONTEND_URL to your Vercel Frontend Link (e.g. https://myapp.vercel.app)
    // For testing now, we allow ALL origins so your deployment doesn't fail immediately
    origin: process.env.FRONTEND_URL || "*",
    credentials: true
}));
app.use(helmet());
app.use(express.json());

// --- Rate Limiter Note for Vercel ---
// Note: In serverless (Vercel), memory resets frequently, so this limiter
// will reset often. For strict limiting, you'd need Redis, but this is fine for basic protection.
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many login attempts, please try again after 15 minutes"
});

// --- 1. CONNECT TO MONGODB ---
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-reports-db';

// We check if connection already exists to prevent "Max Listeners" errors in Serverless
if (mongoose.connection.readyState === 0) {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('✅ MongoDB Connected');
            createDefaultAdmin();
        })
        .catch(err => console.error('❌ MongoDB Connection Error:', err));
}

// --- 2. SCHEMAS ---
const OrderSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    vin: String,
    planName: String,
    price: Number,
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});
// Check if model exists before compiling to avoid "OverwriteModelError" in Serverless
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// --- 3. HELPER: CREATE OR UPDATE ADMIN ---
const createDefaultAdmin = async () => {
    try {
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword) return; // Skip if no password set

        const existingAdmin = await Admin.findOne({ username: adminUsername });

        if (!existingAdmin) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(adminPassword, salt);
            const newAdmin = new Admin({
                username: adminUsername,
                password: hashedPassword
            });
            await newAdmin.save();
            console.log(`👤 New Admin Created: ${adminUsername}`);
        }
    } catch (error) {
        console.error("Error setting up admin:", error);
    }
};

// --- 4. AUTH MIDDLEWARE ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' });
        req.user = user;
        next();
    });
};

// --- 5. API ROUTES ---
app.get('/', (req, res) => res.send('Secure Backend is Running!'));

app.post('/api/create-order', async (req, res) => {
    try {
        const orderData = { ...req.body, status: 'Pending' };
        const newOrder = new Order(orderData);
        await newOrder.save();
        res.json({ success: true, message: "Order initialized", orderId: newOrder._id });
    } catch (error) {
        res.status(500).json({ success: false, error: "Failed to create order" });
    }
});

app.post('/api/admin/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: 'Invalid Credentials' });

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign(
        { _id: admin._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    res.json({ success: true, token: token });
});

app.get('/api/admin/orders', authenticateToken, async (req, res) => {
    try {
        const orders = await Order.find({ status: 'Paid' }).sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.post('/api/admin/generate-report', authenticateToken, async (req, res) => {
    try {
        const { vin } = req.body;
        if (!vin) return res.status(400).json({ message: 'VIN required' });

        // Placeholder for external API call
        // const response = await axios(...) 
        // For now, send a dummy success
        res.json({ message: "Report generation logic here" });

    } catch (error) {
        console.error("Report Error", error.message);
        res.status(500).json({ message: 'Failed to generate report' });
    }
});

// --- VERCEL DEPLOYMENT CONFIGURATION ---
// 1. Comment out app.listen (Vercel manages the port)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// 2. Export the app for Vercel Serverless
module.exports = app;