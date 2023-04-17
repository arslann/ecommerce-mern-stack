const User = require('../models/User');

module.exports = async function (req, res, next) {
  console.log(req.user);

  try {
    let user = await User.findById(req.user.id).select('isAdmin');

    if (!user.isAdmin)
      return res.status(401).json({ msg: 'authrozition denied' });

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
};
