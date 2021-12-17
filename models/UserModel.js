const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//-->  set user schema
const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    investmensts: [
      {
        type: String,
      },
    ],
    stocks: {
      ticker_name: String,
      quantity: Number,
      invested_amount: Number,
    },
    crypto: {
      ticker_name: String,
      quantity: Number,
      invested_amount: Number,
    },
    forex: {
      ticker_name: String,
      invested_amount: Number,
    },
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
