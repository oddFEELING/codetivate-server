const express = require('express');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const {
  login,
  signup,
  getUser,
  addInvestments,
  getInvestments,
} = require('./controllers/switch');

const router = express.Router(); //-->  router object

//--------------------------------------->  home route
router.get('/', (req, res) => {
  res.jsom({ status: 'ok', message: 'Welcome to oddSPACE team backend' });
});
//--------------------------------------->  user routes
router.post('/_api/user/signup', signup);
router.post('/_api/user/login', login);
router.post('/_api/user/get', getUser);
router.post('/_api/user/add_investment', addInvestments);
router.post('/_api/user/get_investment', getInvestments);

//--------------------------------------->  analysis routes
router.get('/_api/send_analytics/data', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Send analytics route is under construction',
  });
});
router.get('-/api/get_analytics/data', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Get analytics route is under construction',
  });
});
//--------------------------------------->

module.exports = router;
