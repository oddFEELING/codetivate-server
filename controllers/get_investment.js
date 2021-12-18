const UserAccount = require('../models/UserModel');

//--------------------------------------->  Get investments
const getInvestments = async (req, res) => {
  const UserId = req.body.id;

  //-->  try to fetch data
  try {
    const User = await UserAccount.findOne({ _id: UserId })
      .lean()
      .then((res) => {
        res.json({
          status: 'ok',
          message: 'Data fetched',
          data: User.investments,
        });
      })
      .catch((err) => {
        res.json({
          status: 'bad',
          message: `Error --> ${err}`,
          data: null,
        });
      });
  } catch (err) {
    throw err;
  }
};

module.exports = getInvestments;
