const Parking = require("../models/Parking")
const axios = require("axios")

const createParkingService = async (parking) => {
  try {
    const newParking = await Parking.create(parking)
    return {
      code: 200,
      data: newParking
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

const getAllParkingsService = async () => {
  try {
    const parkingsList = await Parking.find({})
    return {
      code: 200,
      data: parkingsList
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

const getParkingByIdService = async (parkingId) => {
  try {
    let parking = await Parking.findById(parkingId)

    const dateStart = new Date()
    dateStart.setHours(0)
    dateStart.setMinutes(0)
    dateStart.setSeconds(0)

    const dateEnd = new Date()
    dateEnd.setHours(0)
    dateEnd.setMinutes(0)
    dateEnd.setSeconds(0)
    dateEnd.setMilliseconds(0)
    dateEnd.setHours(24)
    dateEnd.setUTCDate(dateEnd.getDate() + 1)

    const reservationsForTheDay = await Reservation.find({
      dateEntree: {
        $gte: dateStart
      },
      dateSortie: {
        $lte: dateEnd
      },
      parking: parking.id
    })

    let data = JSON.parse(JSON.stringify(parking));
    data.reserved = reservationsForTheDay.length
    return {
      code: 200,
      data
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

const searchParkingByNameService = async (searchTerm) => {
  try {
    const regex = new RegExp(searchTerm, 'i')
    const parkingsList = await Parking.find({ nom: { $regex: regex } });
    return {
      code: 200,
      data: parkingsList
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

const calculateDistanceService = async (departLat, departLag, destLat, destLag) => {
  const url = `https://api.tomtom.com/routing/1/calculateRoute/${departLat},${departLag}:${destLat},${destLag}/json?key=${process.env.TOMTOM_APIKEY}`
  try {

    const response = await axios.get(url)
    const summary = response.data.routes[0].summary
    const { travelTimeInSeconds, lengthInMeters } = summary
    return { code: 200, data: { travelTimeInSeconds, lengthInMeters } }
  } catch (e) {
    console.error(e);
    return { code: 500, data: { msg: "Server error..." } }
  }
}

module.exports = {
  getAllParkingsService,
  searchParkingByNameService,
  getParkingByIdService,
  calculateDistanceService,
  createParkingService
}