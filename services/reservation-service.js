const Parking = require("../models/Parking");
const Reservation = require("../models/Reservation");
const User = require("../models/User");

const getAllReservationsService = async (userId) => {
  try {
    const reservations = await Reservation.find({ user: userId }).populate("parking")
    return {
      code: 200,
      data: reservations
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

const createReservationService = async ({ userId, parkingId, dateEntree, dateSortie }) => {
  try {

    const parking = await Parking.findById(parkingId)
    if (!parking) return { code: 400, data: { msg: "Parking doesn't exist" } }

    let dateStart = new Date(dateEntree)
    let dateEnd = new Date(dateSortie)

    if (parking.horraireOuver > dateStart.getHours() || parking.horraireFerm < dateEnd.getHours())
      return { code: 400, data: { msg: "Parking n'est pas ouvert" } }

    const reservationsForTheDay = await Reservation.find({
      dateEntree: {
        $gte: dateEntree
      },
      dateSortie: {
        $lte: dateSortie
      },
      parking: parkingId
    })

    if (reservationsForTheDay.length >= parking.nbPlace) return { code: 400, data: { msg: "No places available" } }

    const reservation = await Reservation.create(
      {
        user: userId,
        parking: parkingId,
        dateEntree,
        dateSortie,
        numeroPlace: parking.nbPlace - reservationsForTheDay.length + 1
      }
    )

    if (!reservation) return { code: 400, data: { msg: "Can't create reservation" } }



    return {
      code: 200,
      data: {
        _id: reservation._id,
        dateEntree: reservation.dateEntree,
        dateSortie: reservation.dateSortie,
        numeroPlace: reservation.numeroPlace,
        parking: parking
      }
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


module.exports = { getAllReservationsService, createReservationService }