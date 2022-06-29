const Parking = require("../models/Parking")
const Rate = require("../models/Rate")

const rateParkingService = async ({ parkingId, note, comment, userId }) => {
  try {
    const parking = await Parking.findById(parkingId)
    if (!parking) return { code: 400, data: { msg: "Parking doesn't exist" } }

    const rate = await Rate.create({
      comment,
      note,
      user: userId,
      parking: parkingId
    })

    return {
      code: 200,
      data: rate
    }
  } catch (e) {
    console.error(e);
    return {
      code: 500,
      data: {
        msg: "Server error..."
      }
    }
  }
}

module.exports = { rateParkingService }