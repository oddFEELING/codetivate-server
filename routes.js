const express = require('express');
const {
  addInvestments,
  getInvestments,
} = require('./controllers/investments/inv_switch');
const { login, signup, getUser } = require('./controllers/users/user_switch');

const router = express.Router(); //-->  router object

const welcomeMessage = {
  status: 'ok',
  message:
    'Welcome to the oddSPACE team backend API for the codetivate hackathon',
  routes: [
    {
      route: '/_api/user/signup',
      method: 'POST',
    },
    {
      route: '/_api/user/login',
      method: 'POST',
    },
    {
      route: '/_api/user/get',
      method: 'POST',
    },
  ],
};
//--------------------------------------->  home route
router.get('/', (req, res) => {
  res.send(
    `  <div>
      <h3>Status: ${welcomeMessage.status}</h3>
      <h1>${welcomeMessage.message}</h1>
      ${welcomeMessage.routes.map((data) => {
        return `<h2>
            Route: ${data.route} method: ${data.method}
          </h2>`;
      })}
    </div>`
  );
});
//--------------------------------------->  user routes
router.post('/_api/user/signup', signup);
router.post('/_api/user/login', login);
router.post('/_api/user/get', getUser);
router.post('/_api/user/add_investment', addInvestments);
router.post('/_api/user/get_investment', getInvestments);

//--------------------------------------->  analysis routes
router.post('/_api/send_analytics/data', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Send analytics route is under construction',
  });
});
router.post('/_/api/get_analytics/data', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Get analytics route is under construction',
  });
});
//--------------------------------------->

module.exports = router;
