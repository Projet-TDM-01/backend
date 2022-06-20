const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  // contains the date && hour
  dateEntree: { type: Date, required: true },
  dateSortie: { type: Date, required: true },
  numeroPlace: { type: Number, required: true },
  parking: { type: mongoose.Schema.Types.ObjectId, ref: 'parking' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
}, { timestamps: true });

module.exports = Reservation = mongoose.model("reservation", reservationSchema);
