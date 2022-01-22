const { Schema, model } = require('mongoose', 'Product');

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
      },
    products:[
        Product.Schema
    ]

});

const Order = model('Orders', orderSchema);

module.exports = Order;