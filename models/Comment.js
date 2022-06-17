const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  parking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parking'
  }
}, { timestamps: true });

module.exports = Comment = mongoose.model("comment", commentSchema);
