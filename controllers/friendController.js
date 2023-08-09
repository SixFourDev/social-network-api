// Import the User model
const User = require('../models/user');

const addFriend = async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    
    try {
        // Use findByIdAndUpdate to add a friend to the user's friends array
        const updatedUser = await User.findByIdAndUpdate(userId, {
            // $addToSet ensures no duplicate friend IDs
            $addToSet: { friends: friendId }
        }, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error adding friend.' });
    }
};

const removeFriend = async (req, res) => {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    
    try {
        // Use findByIdAndUpdate to remove a friend from the user's friends array
        const updatedUser = await User.findByIdAndUpdate(userId, {
            $pull: { friends: friendId }
        }, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found.' });
        }
        
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error removing friend.' });
    }
};

module.exports = {
    addFriend,
    removeFriend
};
