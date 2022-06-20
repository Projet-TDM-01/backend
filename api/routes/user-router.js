const router = require("express").Router();
const { rateParking } = require("../../controllers/user-controller")

router.post("/rate/:parking_id", rateParking)

module.exports = router;