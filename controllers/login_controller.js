const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserAccount = require('../models/UserModel.js');

const userLogin = async (req, res) => {
  let reqData = req.body;
  console.log(reqData);

  try {
    //   get user with email
    const User = await UserAccount.findOne({ email: reqData.email }).lean();

    // check password encryption
    if (await bcrypt.compare(reqData.password, User.password)) {
      const UserData = {
        id: User._id,
        firstname: User.firstname,
        email: User.email,
      };

      // sign new jwt token
      const token = jwt.sign(UserData, process.env.JWT_SECRET);

      // respond with json and data
      res.json({
        status: 'ok',
        message: 'logged in',
        data: UserData,
        token: token,
        investments: User.investments,
      });
    } else {
      // send fail message for password
      req.json({
        status: 'bad',
        message: 'Incorrect email or password',
        token: null,
      });
    }
  } catch (err) {
    //   send fail message for try block
    res.json({
      status: 'bad',
      message: 'Higherorder error',
      token: null,
    });

    throw Error(err);
  }
};

module.exports = userLogin;
