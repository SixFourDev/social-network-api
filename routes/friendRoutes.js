const router = require('express').Router();

 // Import the functions from friendController
const { 
    addFriend, 
    removeFriend 
} = require('../controllers/friendController');

// POST route to add a new friend
router.post('/:userId/friends/:friendId', addFriend); // Use the imported function

// DELETE route to remove a friend
router.delete('/:userId/friends/:friendId', removeFriend); // Use the imported function

module.exports = router;
