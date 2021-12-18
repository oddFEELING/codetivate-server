const UserAccount = require('../models/UserModel');

const getANalysis = async (req, res) => {
  const UserData = req.body.id;

  // try to fertch data
  try {
    const User = await UserAccount.findOne({ _id: UserData });

    const analysisData = {
      rsi: User.investments.rsi,
      div_growth: User.investments.div_growth,
      volatility: User.investments.volatility,
    };

    //   send data
    res.json({ status: 'ok', message: 'Data found', data: analysisData });
  } catch (err) {
    //   catch a fail
    res.json({ status: 'bad', message: 'error getting user', data: null });
    console.log(`Error --> ${err}`);
  }
};
