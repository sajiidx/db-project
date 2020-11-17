const express = require('express');
const User = require('../models/User');
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const ProductController = require('../controllers/ProductController')
const Product = require('../models/Product')



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var Result;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testdb");
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    Result = result;
    db.close();
  });
}); 

router.get('/home', AuthController.checkAuthenticated ,function(req, res){
    var user = req.session.user;
    var Products = Result
    res.render('homepage.pug', {user, Products})
})

module.exports = router