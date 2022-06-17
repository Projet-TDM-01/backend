const { loginService, registerService } = require("../services/auth-service")

const login = async (req, res) => {
  res.send("login")
}

const register = async (req, res) => { }

module.exports = {
  login,
  register
}