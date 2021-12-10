/* eslint-disable func-names */
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'User must have a username field'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide the valid email',
    },
  },
  password: {
    type: String,
    minlength: 8,
    required: [true, 'Please provide the password'],
    select: false,
  },
  confirmPassword: {
    type: String,
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: 'Password does not match',
    },
  },
  mobile: {
    type: String,
    required: [true, 'Please provide the mobile number'],
    validate: {
      validator(el) {
        return validator.isMobilePhone(el, 'en-IN');
      },
      message: 'Please provide the valid mobile number',
    },
  },
  countryCode: {
    type: String,
    required: [true, 'should provide the country code'],
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin', 'user'],
  },
});

userSchema.methods.checkPassword = async function (
  hashedPassword,
  plainPassword
) {
  // eslint-disable-next-line no-return-await
  return await bcrypt.compare(hashedPassword, plainPassword);
};

// eslint-disable-next-line consistent-return
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

module.exports = mongoose.model('User', userSchema);
