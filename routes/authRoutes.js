const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/login', (req, res) => {
    res.sendFile('login.html', { root: 'public' });
});

router.post('/login', (req, res) => {
    const { matriculationNumber, surname } = req.body;

    const users = JSON.parse(fs.readFileSync('data/users.json', 'utf8'));
    const user = users.find(u => u.matriculationNumber === matriculationNumber && u.surname === surname);

    if (user) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

module.exports = router;
