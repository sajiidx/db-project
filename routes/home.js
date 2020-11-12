const express = require('express');
const User = require('../models/User');
const router = express.Router()

router.get('/home', function(req, res){
    var user = req.session.user;
    res.render('index.ejs', user)
})

module.exports = router