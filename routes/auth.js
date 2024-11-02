const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        return res.json({ token: '46853522-7e553ac516ff80f313457db92' });
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});

module.exports = router;
