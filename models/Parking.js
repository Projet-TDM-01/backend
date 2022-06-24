const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  imglink: String,
  nom: { type: String, required: true },
  commune: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  horraireOuver: { type: Number, required: true },
  horraireFerm: { type: Number, required: true },
  tarifHeure: { type: Number, required: true },
  nbPlace: { type: Number, required: true }
}, { timestamps: true });

module.exports = Parking = mongoose.model("parking", parkingSchema);