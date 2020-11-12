const { Double } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    pid:{
        type: String,
        required: true,
        default: Date.now,
        unique: true
    },
    pname:{
        type: String,
        required: true,
    },
    price:{
        type: Double,
        required: true
    },
    description:{
        type: String
    },
    brandID:[
        { type: Schema.Types.ObjectId, ref: 'Brand'}
    ]
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product