const { response } = require('express')
const Product = require('../models/Product')

//Show the list of Products
const index = (req, res, next) => {
    Product.find()
    .then(response => {
        return res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Orrcured!"
        })
    })
}
//show Product using ID
const show = (req, res, next) => {
    let ProductID = req.body.ProductID
    Product.findById(ProductID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An Error Occured"
        })
    })
}
//add new Product
const store = (req, res, next) => {
    let product = new Product({
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        decription: req.body.decription,
        brandID: req.body.brandID
    })
    if(req.file){
        product.photo = req.file.path
    }
    product.save()
    .then(response => {
        res.json({
            message: 'Product Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//update an Product
const update = (req, res, next) => {
    let ProductID = req.body.ProductID

    let updatedData = {
        pid: req.body.pid,
        pname: req.body.pname,
        price: req.body.price,
        decription: req.body.decription,
        brandID: req.body.brandID
    }

    Product.findByIdAndUpdate(ProductID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Product Updated Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//delete an Product
const destory = (req, res, next) => {
    let ProductID = req.body.ProductID
    Product.findByIdAndRemove(ProductID)
    .then(() => {
        res.json({
            message: 'Product Deleted Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//exporting functions
module.exports = {
    index, show, store, update, destory
}