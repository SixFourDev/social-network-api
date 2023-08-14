const express = require('express');
const router = express.Router();
const ReactionController = require('../controllers/reactionController');

// POST route to create a reaction for a thought
router.post('/:thoughtId/reactions', ReactionController.createReaction);

// DELETE route to remove a reaction by its reactionId
router.delete('/:thoughtId/reactions/:reactionId', ReactionController.deleteReaction);

module.exports = router;
