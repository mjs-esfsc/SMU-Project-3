const { Schema, model } = require('mongoose');
const Order = require('./Order');

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
    Order
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

//const User = model('User', userSchema);

module.exports = userSchema;
