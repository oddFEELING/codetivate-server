const express = require('express');
const { login, signup, getUser } = require('./controllers/switch');

const router = express.Router(); //-->  router object

//--------------------------------------->  user routes
router.post('/_api/user/signup', signup);
router.post('/_api/user/login', login);
router.post('/_api/user/get', getUser);

module.exports = router;
