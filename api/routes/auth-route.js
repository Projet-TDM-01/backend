const router = require("express").Router();
const { login, register, exist } = require("../../controllers/auth-controller")


router.post("/login", login)
router.post("/register", register)
router.post("/exist", exist)

module.exports = router;