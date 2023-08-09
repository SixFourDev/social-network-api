const User = require('../models/user'); // Import the User model

const getAllUsers = async (req, res) => {
    try {
        // Use find() method to find all users
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ err: 'An error occurred while fetching users.' });
    }
};

const getUserById = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Use findById to get a user by their Id
        const user = await User.findById(userId)
          .populate('thoughts')
          .populate('friends');
    
        if (!user) {
          return res.status(404).json({ error: 'User not found.' });
        }
    
        res.json(user);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
      }
};

const createUser = async (req, res) => {
    try {
        // Use create method to create a new user
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: 'Error creating user.' });
    }
};

const updateUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        // Use findByIdAndUpdate method to update a user
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
            new: true, // Return the updated user
            runValidators: true, // Validate the updated data
        });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error updating user.' });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        // Use findByIdAndDelete method to delete a user
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        res.json({ message: 'User deleted successfully.' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting user.' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
