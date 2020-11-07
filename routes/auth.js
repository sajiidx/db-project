const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
router.get('/register', (req, res, next) => {
    res.render('register.ejs')
})
router.post('/register', AuthController.register)

router.get('/login', (req, res, next) => {
    res.render('login.ejs')
})
router.post('/login', AuthController.login)

module.exports = router