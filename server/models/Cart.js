const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
      },
    },
  ],
});

module.exports = Cart = mongoose.model('cart', CartSchema);
