const express = require('express');
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
} = require('../../controller/product');

const { check } = require('express-validator');

const router = express.Router();

// @route GET api/products
// @desc Get all products
// @access public
router.get('/', getProducts);

// @route Post api/products
// @desc Create a product
// @access private
router.post(
  '/',
  [
    check('title', 'Please include a title').notEmpty(),
    check('description', 'Please include description').notEmpty(),
    check('price', 'Please include a price').isNumeric(),
  ],
  addProduct
);

// @route GET api/products/:id
// @desc Get a product by id
// @access public
router.get('/:id', getProduct);

// @route DELETE api/products/:id
// @desc Delete a product by id
// @access private
router.delete('/:id', deleteProduct);

module.exports = router;
