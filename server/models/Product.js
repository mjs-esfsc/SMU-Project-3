const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.0,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  image: {
    type: String,
  },
});

const Product = model("Product", productSchema);
module.exports = Product;
