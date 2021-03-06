const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
