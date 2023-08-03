const express = require('express');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');
const {
  getOrders,
  getOrdersForUser,
  createOrder,
  deleteOrder,
} = require('../../controller/order');
const router = express.Router();

// @route GET api/orders
// @desc Get all orders for the user
// @access private
router.get('/', auth, getOrders);

// @route GET api/orders/user
// @desc Get order for specified user
// @access private
router.get('/user', auth, getOrdersForUser);

// @route POST api/orders
// @desc Create an order
// @access private
router.post(
  '/',
  auth,
  [
    check('products', 'products can not be empty').notEmpty(),
    check('address', 'please include an address').notEmpty(),
  ],
  createOrder
);

// @route DELETE api/orders/:id
// @desc Delete an order
// @access private
router.delete('/:id', auth, deleteOrder);

module.exports = router;
