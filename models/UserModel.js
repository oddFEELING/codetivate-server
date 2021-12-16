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
    stocks: {
      type: Array,
      default: [],
    },
    crypto: {
      type: Array,
      default: [],
    },
    forex: {
      type: Array,
      default: [],
    },
  },
  { collection: 'users' }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
