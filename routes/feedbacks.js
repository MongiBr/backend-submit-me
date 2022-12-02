const router = require("express").Router();

const Feedback = require("../models/Feedback");

//new feedback

router.post("/", async (req, res) => {
 console.log(req.body);
 const newFeedback = new Feedback(req.body);
 try {
  const savedConversation = await newFeedback.save();
  res.status(200).json(savedConversation);
 } catch (err) {
  console.log(err);
  res.status(500).json(err);
 }
});

//get all feebacks

router.get("/", async (req, res) => {
 try {
  const feedbacks = await Feedback.find().sort({ updatedAt: -1 });

  res.status(200).json(feedbacks);
 } catch (err) {
  res.status(500).json(err);
 }
});

module.exports = router;
