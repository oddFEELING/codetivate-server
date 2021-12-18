const UserAccount = require('../models/UserModel');

//--------------------------------------->  add investments
const addInvestments = async (req, res) => {
  const ReqData = req.body;
  console.log(ReqData);
  const UserId = ReqData.id;
  console.log(UserId);

  // -->  try Update entry
  try {
    const newUser = await UserAccount.findOneAndUpdate(
      { _id: UserId },
      { $push: { investments: [ReqData.data] } },
      { returnOriginal: false }
    )
      .lean()
      .catch((err) => {
        res.json({ status: 'bad', message: `Error --> ${err}`, data: null });
      });

    res.json({
      status: 'ok',
      message: 'Update complete',
      data: newUser,
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
