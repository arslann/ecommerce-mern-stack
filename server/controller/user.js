const { validationResult } = require('express-validator');

const User = require('../models/User');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_TOKEN = '12345';

module.exports.registerUser = async (req, res) => {
  //Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }

    // Create new user instances
    user = new User({
      name,
      email,
      password,
    });

    // Encrpyt user password
    const salt = bcrypt.genSaltSync(10);

    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Return JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      JWT_TOKEN,
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};
