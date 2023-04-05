const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
    },
  ],
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'pending',
  },
  timestamps: true,
});
