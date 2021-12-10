const mongoose = require('mongoose');
const validator = require('validator');

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
    type: Number,
    required: [true, 'Please provide the mobile number'],
    validate: {
      validator: validator.isMobilePhone({ options: ['en-IN'] }),
      message: 'Please provide the valid phone number',
    },
  },
  countryCode: {
    type: String,
    required: [true, 'should provide the country code'],
  },
});

module.exports = mongoose.model('User', userSchema);
