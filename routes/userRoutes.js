const express = require('express');
const router = express.Router();

// Import functions from userController
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');


// Define routes for /api/users
router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;
