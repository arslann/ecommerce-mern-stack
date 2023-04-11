const express = require('express');
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require('../../controller/product');

const { check } = require('express-validator');

const router = express.Router();

// @route GET api/products
// @desc Get all products
// @access public
router.get('/', getProducts);

// @route GET api/products/:id
// @desc Get a product by id
// @access public
router.get('/:id', getProduct);

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

// @route DELETE api/products/:id
// @desc Delete a product by id
// @access private
router.delete('/:id', deleteProduct);

// @route PATCH api/products/:id
// @desc Update a product by id
// @access private
router.patch('/:id', updateProduct);

module.exports = router;
