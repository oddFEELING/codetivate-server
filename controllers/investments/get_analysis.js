const UserAccount = require('../../models/UserModel');
const request = require('request');

const sendAnalysis = async (req, res) => {
  const UserId = req.body.id;

  // get details from database
  const User = await UserAccount.findOne({ _id: UserId }).lean();

  const AnalyticData = User.investments.map((data) => {
    return {
      rsi: data.rsi,
      div_growth: data.div_growth,
      volatility: data.volatility,
    };
  });

  // create API call options
  const APIOptions = {
    server: 'https://codetivate-backend.herokuapp.com/_/api/get_analytics/data',
    method: 'POST',
    json: { AnalyticData },
  };

  //-->  make API request
  request(APIOptions, (err, res, body) => {
    if (err) {
      res.json({ status: 'bad', message: `Error --> ${err}`, data: null });
      console.log(err);
    } else if (req.statusCode === 200) {
      res.json({ status: 'ok', message: 'success', data: body });
      console.log(body);
    } else {
      res.json({
        status: 'bad',
        message: `Returned a status code of ${res.statusCode}`,
      });

      console.log(res.statusCode);
    }
  });
};
