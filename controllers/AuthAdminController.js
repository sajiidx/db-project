const User = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Admin.findOne({$or: [{email:username},{username:username}]})
    .then(admin =>{
        if(admin){
            bcrypt.compare(password, admin.password, function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: admin.firstname}, 'verySecretValue', {expiresIn: '1h'})
                    req.session.admin = admin
                    req.params.uname = admin.username
                    return res.redirect('/' + admin.username + '/home')                
                }
                else{
                    res.status(401).send();
                    return res.redirect('/admin/login')
                }
            })
        }
        else{
            res.json({
                message: 'Admin not Authorized! '
            })
        }
    })
}

module.exports = {
    login }