const Thought = require('../models/thought');

const getAllThoughts = async (req, res) => {
    try {
        // Use find() method to find all Thoughts
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ error: 'An error has occurred while fetching thoughts' });
    }
};

const getThoughtById = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    
    try {
        // Use findById() to get a Thought by their Id
        const thought = await Thought.findById(thoughtId);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json({ error: 'An error has occurred while fetching thought' });
    }
};

const createThought = async (req, res) => {
    try {
        // Use create() method to create a new thought
        const newThought = await Thought.create(req.body);
        res.status(201).json(newThought);
    } catch (error) {
        res.status(400).json({ error: 'Error creating new thought.' });
    }
};

const updateThought = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    try {
        // Use findByIdAndUpdate() method to update a user
        const updatedThought = await Thought.findByIdAndUpdate(thoughtId, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedThought) {
            return res.status(404).json({ error: 'Thought not found.' });
        }
        res.json(updatedThought);
    } catch (error) {
        res.status(400).json({ error: 'Error updating thought.' });
    }
};

const deleteThought = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    try {
        // Use findByIdAndDelete() method to update a thought
        const deletedThought = await Thought.findByIdAndDelete(thoughtId);
        if (!deletedThought) {
            return res.status(404).json({ error: 'Thought not found.' });
        }
        res.json({ message: 'Thought deleted successfully.' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting thought.' });
    }
};

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
};
