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
const PORT = process.env.PORT || 5000; // Render automatically sets this port

// --- SECURITY CHECKS ---
if (!process.env.JWT_SECRET) {
    console.error('⚠️ WARNING: JWT_SECRET is not set. Auth will fail.');
}

// --- Middleware ---
app.use(cors({
    // Allow your Vercel Frontend to talk to this Render Backend
    origin: "*", // For development/presentation, allow all. Change to specific URL later for security.
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(helmet());
app.use(express.json());

// --- Rate Limiter ---
// On Render, this stays in memory longer, so it works better than on Vercel
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: "Too many login attempts, please try again after 15 minutes"
});

// --- 1. CONNECT TO MONGODB ---
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/car-reports-db';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB Connected');
        createDefaultAdmin(); // Create admin account if it doesn't exist
    })
    .catch(err => console.error('❌ MongoDB Connection Error:', err));


// --- 2. SCHEMAS ---
const OrderSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    vin: String,
    planName: String,
    price: Number,
    paymentStatus: { type: String, default: 'Unpaid' },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// --- 3. HELPER: CREATE DEFAULT ADMIN ---
const createDefaultAdmin = async () => {
    try {
        // You can set these in Render "Environment Variables" settings
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'; // Default fallback

        const existingAdmin = await Admin.findOne({ username: adminUsername });
        if (!existingAdmin) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(adminPassword, salt);
            await new Admin({
                username: adminUsername,
                password: hashedPassword
            }).save();
            console.log(`👤 Default Admin Created: ${adminUsername}`);
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
app.get('/', (req, res) => res.send('Secure Backend is Running on Render!'));

// Create Order Route
app.post('/api/create-order', async (req, res) => {
    try {
        console.log("Received Order:", req.body); // Debug log
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json({ success: true, message: "Order saved successfully", orderId: newOrder._id });
    } catch (error) {
        console.error("Order Save Error:", error);
        res.status(500).json({ success: false, error: "Failed to create order" });
    }
});

// Admin Login
app.post('/api/admin/login', loginLimiter, async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(400).json({ message: 'Invalid Credentials' });

        const validPassword = await bcrypt.compare(password, admin.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid Credentials' });

        const token = jwt.sign({ _id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ success: true, token });
    } catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Get Orders (Protected)
app.get('/api/admin/orders', authenticateToken, async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// --- START SERVER (REQUIRED FOR RENDER) ---
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});