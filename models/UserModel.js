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
        investment_type: {
          type: String,
          default: 'Stocks',
        },
        ticker_name: {
          type: String,
          default: 'TLSA',
        },
        quantity: {
          type: Number,
          default: 3000,
        },
        invested_amount: {
          type: Number,
          default: 1000,
        },
      },
    ],
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
