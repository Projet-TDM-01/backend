const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  imglink: String,
  nom: { type: String, required: true },
  commune: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  horraireOuver: { type: Date, required: true },
  horraireFerm: { type: Date, required: true },
  tarifHeure: { type: Number, required: true },
  placesOccup: { type: Number, required: true },
  note: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = Parking = mongoose.model("parking", parkingSchema);
