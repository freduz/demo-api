/* eslint-disable object-curly-newline */
const createUser = async (req, res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    res.status(204).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        data: null,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, getAllUsers, getUser, deleteUser, updateUser };
