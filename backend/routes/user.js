const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

router.post('/register' , async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const newUser = new User ({ username });
    const user = await User.register(newUser, password);
    res.json('Created an account!');
})

router.post('/login', passport.authenticate('local') 
,async (req , res) => {
    
    res.json('Logged In!');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.json('Logged Out!');
})

module.exports = router;