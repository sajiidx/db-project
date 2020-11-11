const express = require('express');
const User = require('../models/User');
const router = express.Router()

router.get('/home', function(req, res){
    var user = req.session.user;
    res.render('home.ejs', user)
})

module.exports = router