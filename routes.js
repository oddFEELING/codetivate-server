const express = require('express');
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
  res.send(
    'Welcome to the Codetivate backend API root route....updates coming soon.'
  );
});
//--------------------------------------->  user routes
router.post('/_api/user/signup', signup);
router.post('/_api/user/login', login);
router.post('/_api/user/get', getUser);
router.post('/_api/user/add_investment', addInvestments);
router.post('/_api/user/get_investment', getInvestments);
router.get('/_api/user/add_investment', addInvestments);

//--------------------------------------->  analysis routes
// router.post('/_api/analysis/data');
//--------------------------------------->

module.exports = router;
