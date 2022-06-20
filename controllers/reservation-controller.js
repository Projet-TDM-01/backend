const { getAllReservationsService, createReservationService } = require("../services/reservation-service")

const getAllReservations = async (req, res) => {
  const { code, data } = await getAllReservationsService(req.params.userid)
  return res.status(code).json(data)
}

const createReservation = async (req, res) => {
  const { code, data } = await createReservationService(req.body);
  return res.status(code).json(data)
}

module.exports = { getAllReservations, createReservation }