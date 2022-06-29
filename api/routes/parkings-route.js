const router = require("express").Router();
const { getAllParkings,
  getParkingById,
  searchNearestParking,
  calculateDistance,
  createParking,
  advancedSearch } = require("../../controllers/parkings-controller")

router.post("/create", createParking)
router.get("/", getAllParkings)
router.get("/:id", getParkingById)
router.get("/search/:address", searchNearestParking)
router.post("/distance", calculateDistance)
router.post("/advanced-search", advancedSearch)

module.exports = router;