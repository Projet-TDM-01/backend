const router = require("express").Router();
const { rateParking, getParkingRate } = require("../../controllers/user-controller")

router.post("/rate", rateParking)
router.get("/parking-rate/:parkingId", getParkingRate)

module.exports = router;