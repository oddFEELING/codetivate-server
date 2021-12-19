const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserAccount = require('../../models/UserModel');

const userSignup = async (req, res) => {
  let reqData = req.body;
  console.log(reqData);
  reqData.password = await bcrypt.hash(reqData.password, 10); //-->  encrypt password

  //-->  create new user with request data
  try {
    const newUser = await UserAccount.create({
      ...reqData,
    });

    //   prepare token details
    const UserData = {
      id: newUser._id,
      firstname: newUser.firstname,
      email: newUser.email,
      investments: newUser.investments,
    };

    //   encode details in jwt
    const token = jwt.sign(UserData, process.env.JWT_SECRET);

    //   send response to client
    res.json({
      status: '0k',
      message: 'User Created',
      data: UserData,
      token: token,
    });
  } catch (err) {
    // return try block fail
    res.json({
      status: 'bad',
      nessage: 'high order fail',
      token: null,
    });
    console.log(err);
  }
};

module.exports = userSignup;
