const Product = require('../models/Product');
const { validationResult } = require('express-validator');

module.exports.addProduct = async (req, res) => {
  //Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.getProducts = async (req, res) => {
  try {
    const Products = await Product.find().sort({ date: -1 });
    res.json(Products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);

    if (!product) return res.status(404).json({ msg: 'Product not found' });

    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Product is deleted successfully.',
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};
