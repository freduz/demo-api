const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const AppError = require('../utils/appError');

const filterBody = (bodyData) => {
  // eslint-disable-next-line array-callback-return
  Object.keys(bodyData).map((el) => {
    if (el === 'role') delete bodyData[el];
  });
  return bodyData;
};

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

exports.signUp = catchAsync(async (req, res, next) => {
  const filteredData = filterBody(req.body);

  const newUser = await User.create(filteredData);
  // eslint-disable-next-line no-underscore-dangle
  const token = createToken(newUser._id);
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

// eslint-disable-next-line consistent-return
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Please provide the email and password', 400));
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password is provided', 401));
  }

  const token = createToken(user.id);
  res.status(200).json({
    status: 'success',
    token,
  });
});
