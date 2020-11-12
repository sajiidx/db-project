const express = require('express')
const router = express.Router()

const AuthAdmin = require('../controllers/AuthAdminController')

router.get('/login', (req, res, next) => {
    res.render('login.ejs',{message: "Admin"})
})
router.post('/login', AuthAdmin.login)

router.get('/:uname/home', (req, res, next)=>{
    var uname = req.params.username
    res.render('home.ejs',req.session.admin)
})



module.exports = router