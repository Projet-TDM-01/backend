const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: String,
  body: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
}, { timestamps: true });

module.exports = Notification = mongoose.model("notification", notificationSchema);
