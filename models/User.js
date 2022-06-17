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
  }
}, { timestamps: true });

module.exports = User = mongoose.model("user", userSchema);
