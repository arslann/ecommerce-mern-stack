const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { testAuth, loginUser } = require('../../controller/auth');
const { check } = require('express-validator');
const adminAuth = require('../../middleware/adminAuth');

// @route GET api/auth
// @desc Test route
// @access public
router.get('/', [auth], testAuth);

// @route POST api/auth
// @desc Login user
// @access public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  loginUser
);

module.exports = router;
