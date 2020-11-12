const express = require('express');
const User = require('../models/User');
const router = express.Router()
const AuthController = require('../controllers/AuthController')
router.get('/home', AuthController.checkAuthenticated ,function(req, res){
    var user = req.session.user;
    res.render('index.ejs', user)
})

module.exports = router