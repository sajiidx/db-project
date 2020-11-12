const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brandSchema = new Schema({
    bid:{
        type: String,
        required: true,
        unique: true
    },
    brand_name:{
        type: String,
        required: true
    }
})

const Brand = mongoose.model('Brand', brandSchema)
module.exports = Brand