const UserAccount = require('../models/UserModel');

//--------------------------------------->  Get investments
const getInvestments = async (req, res) => {
  const UserId = req.body.id;
  console.log(UserId);

  //-->  try to fetch data
  try {
    await UserAccount.findOne({ _id: UserId })
      .lean()
      .then((res) => {
        res.json({
          status: 'ok',
          message: 'Data fetched',
          data: res.investments,
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
    console.log(err);
  }
};

module.exports = getInvestments;
