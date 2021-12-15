const bcrypt = require('bcryptjs');
const signup = require('./signup_controller');
const login = require('./login_controller');
const getUser = require('./get_controler');

module.exports = {
  login,
  signup,
  getUser,
};
