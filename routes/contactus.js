// contactus.js

const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'contactus.html'));
});

router.post('/submit', (req, res, next) => {
    // Handle form submission here, save data or perform other operations
    res.redirect('/success');
});

module.exports = router;
