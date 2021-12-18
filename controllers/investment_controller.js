const UserAccount = require('../models/UserModel');

//--------------------------------------->  add investments
const addInvestments = async (req, res) => {
  const ReqData = req.body;
  console.log(`The user data is`);
  console.log(User);
  const UserId = ReqData.id;

  // -->  try Update entry
  try {
    await UserAccount.updateOne(
      { _id: UserId },
      { $set: { investments: [...investments, ReqData.data] } },
      { returnOriginal: false }
    )
      .then((res) => {
        console.log(`Entry updated`);
      })
      .catch((err) => {
        console.log(`Error updating entry`);
      });
  } catch (err) {
    throw err;
  }

  try {
    const User = await UserAccount.findOne({ _id: User })
      .then((res) => {
        res.json({ status: 'ok', message: 'Data found', data: res });
      })
      .then((err) => {
        res.json({ status: 'bad', message: `Error --> ${err}` });
      });
  } catch (err) {
    throw err;
  }
};

module.exports = addInvestments;
