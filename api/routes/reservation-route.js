const router = require("express").Router();
const { getAllReservations, createReservation } = require("../../controllers/reservation-controller")

router.get("/:userid", getAllReservations)
router.post("/create", createReservation)

module.exports = router;