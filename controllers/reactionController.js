const Thought = require('../models/thought');

const createReaction = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    try {
        // Find the thought by its ID
        const thought = await Thought.findById(thoughtId);

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found.' });
        }
        // Add the new reaction to the thought's reactions array
        thought.reactions.push(req.body);
        const updatedThought = await thought.save();

        res.status(201).json(updatedThought);
    } catch (error) {
        res.status(400).json({ error: 'Error creating new reaction.' });
    }
};

const deleteReaction = async (req, res) => {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId;
    try {
        // Find the thought by its ID
        const thought = await Thought.findById(thoughtId);
        
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found.' });
        }

        // Find the index of the reaction to be deleted
        const reactionIndex = thought.reactions.findIndex(
            (reaction) => reaction._id.toString() === reactionId
        );

        // If reaction not found, return an error
        if (reactionIndex === -1) {
            return res.status(404).json({ error: 'Reaction not found.' });
        }

        // Remove the reaction from the array
        thought.reactions.splice(reactionIndex, 1);
        const updatedThought = await thought.save();

        res.json(updatedThought);
    } catch (error) {
        res.status(400).json({ error: 'Error deleting reaction.' });
    }
};


module.exports = {
    createReaction,
    deleteReaction
};
