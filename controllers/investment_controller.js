const UserAccount = require('../models/UserModel');

//--------------------------------------->  add investments
const addInvestments = async (req, res) => {
  const ReqData = req.body;
  console.log(`The user data is`);
  console.log(ReqData);
  const UserId = ReqData.id;
  console.log(UserId);

  // -->  try Update entry
  try {
    const newUser = await UserAccount.findOneAndUpdate(
      { _id: UserId },
      { $set: { investments: [...investments, ReqData.data] } },
      { returnOriginal: false }
    )
      .lean()
      .catch((err) => {
        res.json({ status: 'bad', message: `Error --> ${err}`, data: null });
      });

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
