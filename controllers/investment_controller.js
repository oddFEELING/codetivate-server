const UserAccount = require('../models/UserModel');

//--------------------------------------->  add investments
export const addInvestments = async (req, res) => {
  const User = req.body;
  const UserId = User.id;
  try {
    const User = await UserAccount.findOneAndUpdate(
      { _id: UserId },
      { $set: { investments: [...investments, User.data] } },
      { returnOriginal: false }
    )
      .then((res) => {
        res.json({ status: 'ok', message: 'Data updated', data: res });
      })
      .catch((err) => {
        res.json({ status: 'bad', message: `Error --> ${err}`, data: res });
      });
  } catch (err) {
    throw err;
  }
};

//--------------------------------------->  Get investments
export const getInvestments = async (req, res) => {
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
