const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            reactionId: {
                type: mongoose.Types.ObjectId, // Update this line
                default: new mongoose.Types.ObjectId(), // Update this line
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280,
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAt) => createdAt.toLocaleString(),
            },
        },
    ],
});

// Virtual property for formatted timestamp
thoughtSchema.virtual('formattedCreatedAt').get(function () {
    return this.createdAt.toLocaleString();
});

// Virtual property for reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create and export Thought model
module.exports = mongoose.model('Thought', thoughtSchema);