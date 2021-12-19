const UserAccount = require('../../models/UserModel');

//--------------------------------------->  Get investments
const getInvestments = async (req, res) => {
  const UserId = req.body.id;
  console.log(UserId);

  //-->  try to fetch data
  try {
    const User = await UserAccount.findOne({ _id: UserId }).lean();

    res.json({
      status: 'ok',
      message: 'Data fetched',
      data: User.investments,
    });
  } catch (err) {
    //   return failed data
    res.json({
      status: 'bad',
      message: `Error --> ${err}`,
      data: null,
    });

    console.log(err);
  }
};

module.exports = getInvestments;
