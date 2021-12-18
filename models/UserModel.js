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
    investments: {
      type: Array,
      default: [
        {
          investment_type: { type: String, default: 'stocks' },
          ticker_name: { type: String, default: 'TSLA' },
          quantity: { type: Number, default: 'stocks' },
          invested_amount: { type: Number, default: 'stocks' },
        },
      ],
    },
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
