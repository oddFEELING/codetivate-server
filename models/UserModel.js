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
    investments: [
      {
        investment_type: String,
        ticker_name: String,
        quantity: Number,
        invested_amount: Number,
        rsi: Number,
        div_growth: Number,
        volatility: Number,
      },
    ],
    analysis: {
      port_perf: Number,
      total_div: Number,
      avg_rsi: Number,
    },
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
