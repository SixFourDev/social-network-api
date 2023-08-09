const mongoose = require('mongoose');

// Import the User and Thought models
const User = require('./user');
const Thought = require('./thought');

// Export the models
module.exports = {
    User,
    Thought,
};