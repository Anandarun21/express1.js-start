// app.js

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Register routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/contactus', contactUsRoutes);

// Define success route
app.use('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// 404 handling
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start server
app.listen(5002, () => {
    console.log('Server is running on port 5002');
});
