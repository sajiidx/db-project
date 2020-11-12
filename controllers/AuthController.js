const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPassword){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        })
        user.save()
        .then(user => {
            return res.redirect('/api/login');
        })
        .catch(error => {
            return res.redirect('/api/register');
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{username:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    req.session.user = user; //or whatever
                    return res.redirect('/home')                
                }
                else{
                    res.status(401).send();
                    return res.redirect('/api/login')
                }
            })
        }
        else{
            res.json({
                message: 'No Such User Found!'
            })
        }
    })
}
function checkAuthenticated(req, res, next) {
    if (req.session.user != null) {
      return next()
    }
    res.redirect('/api/login')
}
  
function checkNotAuthenticated(req, res, next) {
    if (req.session.user != null) {
        return res.redirect('/home')
    }
    next()
}
module.exports = {
    register, login, checkAuthenticated, checkNotAuthenticated
}