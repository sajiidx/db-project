const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
router.get('/register',AuthController.checkNotAuthenticated , (req, res, next) => {
    res.render('register.ejs')
})
router.post('/register',AuthController.checkNotAuthenticated , AuthController.register)

router.get('/login', AuthController.checkNotAuthenticated, (req, res, next) => {
    res.render('login.ejs')
})
router.post('/login', AuthController.checkNotAuthenticated , AuthController.login)

router.get('/logout',(req, res, next) => {
    req.session.user = null
    req.session = null
    res.redirect('/api/login')
})

module.exports = router