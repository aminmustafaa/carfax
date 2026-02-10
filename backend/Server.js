const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors({
    origin: "*", // Allows your frontend to connect
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(helmet());
app.use(express.json());

// --- Database Connection (Optimized for Vercel) ---
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is missing in Environment Variables!");
}

// Connect to MongoDB only if not already connected
const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(MONGODB_URI);
            console.log("✅ New MongoDB Connection Established");
            createDefaultAdmin();
        } catch (error) {
            console.error("❌ MongoDB Connection Error:", error);
        }
    }
};

// Ensure DB connects on every request
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

// --- SCHEMAS ---
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
// Use existing model to prevent OverwriteModelError in serverless
const Order = mongoose.models.Order || mongoose.model('Order', OrderSchema);

const AdminSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});
const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

// --- HELPER: CREATE DEFAULT ADMIN ---
const createDefaultAdmin = async () => {
    try {
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

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

// --- AUTH MIDDLEWARE ---
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

// --- ROUTES ---
app.get('/', (req, res) => res.send('Secure Backend is Running on Vercel!'));

app.post('/api/create-order', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json({ success: true, message: "Order saved successfully", orderId: newOrder._id });
    } catch (error) {
        console.error("Order Save Error:", error);
        res.status(500).json({ success: false, error: "Failed to create order" });
    }
});

app.post('/api/admin/login', async (req, res) => {
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

app.get('/api/admin/orders', authenticateToken, async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// --- VERCEL CONFIGURATION (CRITICAL) ---
// This exports the app so Vercel can run it as a Serverless Function
module.exports = app;

// Only run app.listen if we are NOT on Vercel (e.g. running locally)
if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running locally on port ${PORT}`);
    });
}
