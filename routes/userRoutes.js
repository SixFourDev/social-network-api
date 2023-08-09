const express = require('express');
const router = express.Router();

// Import functions from userController
const getAllUsers = require('../controllers/userController');
const getUserById = require('../controllers/userController');
const createUser = require('../controllers/userController');
const updateUser = require('../controllers/userController');
const deleteUser = require('../controllers/userController');

// Define routes for /api/users
router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
