const { rateParkingService, getParkingRateService } = require("../services/user-service")

const rateParking = async (req, res) => {
  const { note } = req.body;
  if (note > 5) return res.status(400).json({ msg: "Rate should be < or = 5" })
  const { code, data } = await rateParkingService(req.body)
  return res.status(code).json(data)
}
const getParkingRate = async (req, res) => {
  const parkingId = req.params.parkingId;
  const { code, data } = await getParkingRateService(parkingId)
  return res.status(code).json(data)
}

module.exports = { rateParking, getParkingRate }