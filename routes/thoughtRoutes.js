const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../controllers/thoughtController');

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

module.exports = router;