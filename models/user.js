const { Schema } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Match for valid email address
        match: /^\S+@\S+\.\S+$/,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            // Reference Thought model
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            // Reference to User model
            ref: 'User',
        },
    ],
});

// Create and export User model
module.exports = mongoose.model('User', userSchema);