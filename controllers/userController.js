const User = require('../models/user');
const catchAsync = require('../utils/catchAsync');
const factoryMethods = require('./handlerFactory');

const getAllUsers = factoryMethods.getAllDocument(User);
const getUser = factoryMethods.getDocument(User);
const deleteUser = factoryMethods.deleteDocument(User);
const updateUser = factoryMethods.updateDocument(User);
const createUser = factoryMethods.createDocument(User);

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
};
