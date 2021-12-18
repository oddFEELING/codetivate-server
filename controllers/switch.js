const signup = require('./signup_controller');
const login = require('./login_controller');
const getUser = require('./get_controler');
const { addInvestments, getInvestments } = require('./investment_controller');

module.exports = {
  login,
  signup,
  getUser,
  getInvestments,
  addInvestments,
};
