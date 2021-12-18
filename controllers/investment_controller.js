const UserAccount = require('../models/UserModel');

//--------------------------------------->  add investments
const addInvestments = async (req, res) => {
  const ReqData = req.body;
  console.log(`The user data is`);
  console.log(User);
  const UserId = ReqData.id;

  // -->  try Update entry
  try {
    const newUser = await UserAccount.findOneAndUpdate(
      { _id: UserId },
      { $set: { investments: [...investments, ReqData.data] } },
      { returnOriginal: false }
    ).lean();

    res.json({
      status: 'ok',
      message: 'Update complete',
      data: newUser.investments,
    });
  } catch (err) {
    res.json({
      status: 'bad',
      message: 'Update failed',
      data: null,
    });
    console.log(err);
  }
};

module.exports = addInvestments;
