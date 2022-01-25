const { Schema, model } = require('mongoose');
const Product = require('./Product');
const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
      },
    products:[
        Product
    ]

});

//const Order = model('Orders', orderSchema);

module.exports = orderSchema;