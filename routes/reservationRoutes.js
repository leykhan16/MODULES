const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/reservation', (req, res) => {
    res.sendFile('reservation.html', { root: 'public' });
});

router.post('/reserve', (req, res) => {
    const { date, time } = req.body;

    // Dummy logic to save reservation data
    const reservations = JSON.parse(fs.readFileSync('data/reservations.json', 'utf8'));
    reservations.push({ date, time });
    fs.writeFileSync('data/reservations.json', JSON.stringify(reservations, null, 2), 'utf8');

    // Dummy logic to send confirmation emails
    sendEmail('Reservation Confirmation', `Your reservation for ${date} at ${time} is confirmed.`, 'student@example.com');
    sendEmail('New Reservation', `A new reservation is made for ${date} at ${time}.`, 'labattendant@example.com');

    res.send('Reservation successful');
});

// Dummy function to simulate sending emails
function sendEmail(subject, body, recipient) {
    console.log(`Email sent to ${recipient} with subject: ${subject}\nBody: ${body}`);
}

module.exports = router;
