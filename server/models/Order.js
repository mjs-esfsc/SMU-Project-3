const { Schema, model } = require('mongoose', 'Product');

const orderSchema = new Schema({
    purchaseDate: {
        type: String,
        required: true,
        trim: true,
      },
    products:[
        Product.Schema
    ]

});

const Order = model('Orders', orderSchema);

module.exports = Order;