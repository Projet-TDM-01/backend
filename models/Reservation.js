const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  // contains the date && hour
  dateReservation: { type: Date, required: true },
  numero: { type: Number, required: true },
  numeroPlace: { type: Number, required: true },
  parking: { type: mongoose.Schema.Types.ObjectId, ref: 'parking' }
}, { timestamps: true });

module.exports = Reservation = mongoose.model("reservation", reservationSchema);
