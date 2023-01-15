const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const products  = new Schema({
   name: String,
   total:Number,
   category: String,
    price:Number
});

const productmodel = mongoose.model('products',products);
module.exports = productmodel;