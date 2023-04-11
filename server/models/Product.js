const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  stock: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model('product', ProductSchema);
