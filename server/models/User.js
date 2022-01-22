const { Schema, model } = require('mongoose', 'Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  orders: [
    Order.Schema
  ],

  address:{
    type: String,
    required: true,
    trim: true,
  },
  phone:{
    type: String,
    required: true,
    trim: true,
  }

});

const User = model('User', userSchema);

module.exports = User;
