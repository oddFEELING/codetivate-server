const signup = require('./signup_controller');
const login = require('./login_controller');
const getUser = require('./get_controler');
const addInvestments = require('./investment_controller');
const getInvestments = require('./get_investment.js');

module.exports = {
  login,
  signup,
  getUser,
  getInvestments,
  addInvestments,
};
