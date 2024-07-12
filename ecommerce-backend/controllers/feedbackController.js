const Feedback = require('../models/feedbackModel');
const { classifyFeedback } = require('../services/feedbackService');

exports.createFeedback = async (req, res) => {
  try {
    const { feedback, userId, orderId } = req.body;
    const classification = await classifyFeedback(feedback);
    const newFeedback = new Feedback({ feedback, userId, orderId, classification });
    await newFeedback.save();
    res.json(newFeedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
