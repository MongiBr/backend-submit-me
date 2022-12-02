const mongoose = require("mongoose");

const FeedBackSchema = new mongoose.Schema(
 {
  fullName: {
   type: String,
  },
  anonyme: {
   type: Boolean,
   default: false,
  },
  sender: {
   type: String,
  },
  getSickAndDiscover: {
   type: String,
  },
  experience: {
   type: String,
  },
  traitement: {
   type: String,
  },
  advise: {
   type: String,
  },
 },
 { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedBackSchema);
