const Order = require('../models/Order');
const { validationResult } = require('express-validator');
const Product = require('../models/Product');

module.exports.getOrders = async (req, res) => {
  try {
    const Orders = await Order.find().sort({ date: -1 });
    res.json(Orders);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.getOrdersForUser = async (req, res) => {
  try {
    const order = await Order.find({ user: req.user.id }).populate('product', [
      'title',
      'image',
      'price',
    ]);

    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.createOrder = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // const product = await Product.findById(productId);

    const newOrder = new Order({
      userId: req.user.id,
      address: req.body.address,
    });

    req.body.products.forEach((productId) => {
      newOrder.products.unshift({ product: productId });
    });

    res.json(newOrder);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const id = req.params.id;

    await Order.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Order is deleted successfully.',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};
