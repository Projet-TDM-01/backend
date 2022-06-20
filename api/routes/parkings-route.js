const router = require("express").Router();
const { getAllParkings, getParkingById, searchParkingByName, calculateDistance, createParking } = require("../../controllers/parkings-controller")

router.post("/create", createParking)
router.get("/", getAllParkings)
router.get("/:id", getParkingById)
router.post("/search", searchParkingByName)
router.post("/distance", calculateDistance)

module.exports = router;