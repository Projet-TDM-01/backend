const router = require("express").Router();

router.use("/auth", require("./auth-route"))
router.use("/parkings", require("./parkings-route"))
router.use("/reservations", require("./reservation-route"))
router.use("/user", require("./user-router"))

module.exports = router;