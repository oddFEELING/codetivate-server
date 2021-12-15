const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  const reqData = req.body;
  const token = reqData.token;

  // try to decode the jwt
  try {
    const UserData = jwt.decode(token);

    //   return decoded token
    res.json({
      status: 'ok',
      message: 'User found',
      data: UserData,
    });
  } catch (err) {
    //   response for faild decode
    res.json({
      status: 'bad',
      message: 'high order fail',
      data: null,
    });
    throw Error(err);
  }
};

module.exports = getUser;
