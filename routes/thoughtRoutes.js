const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../controllers/thoughtController');

const {
    createReaction,
    deleteReaction
} = require('../controllers/reactionController');

// GET route to get all thoughts
router.get('/', getAllThoughts);

// GET route to get a single thought by its _id
router.get('/:thoughtId', getThoughtById);

// POST route to create a new thought
router.post('/', createThought);

// PUT route to update a thought by its _id
router.put('/:thoughtId', updateThought);

// DELETE route to remove a thought by its _id
router.delete('/:thoughtId', deleteThought);

// POST route to add a reaction to a thought
router.post('/:thoughtId/reactions', createReaction);

// DELETE route to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;