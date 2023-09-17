const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
