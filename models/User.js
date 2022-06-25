const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: {
    type: String, required: true
  },
  prenom: {
    type: String, required: true
  },
  numero: {
    type: String, required: true
  },
  email: {
    type: String, unique: true, required: true
  },
  password: {
    type: String, required: true
  },
  photoLink: { type: String, default: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" }
}, { timestamps: true });

module.exports = User = mongoose.model("user", userSchema);
