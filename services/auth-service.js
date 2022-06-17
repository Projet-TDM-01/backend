const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const loginService = async ({ email, password }) => {

  try {
    const user = await User.findOne({ email });
    if (!user) return { code: 400, data: { msg: "User doesn't exist" } };

    const passwordValidation = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordValidation)
      return { code: 400, data: { msg: "Email or Password is incorrect" } };

    // create token
    const token = jwt.sign({ id: user.id }, process.env.AUTH_TOKEN_SECRET, {
      expiresIn: 36000,
    });

    return {
      code: 200,
      data: {
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        numero: user.numero,
        email: user.email,
        token
      }
    }
  } catch (e) {
    console.error(e);
    return { code: 500, data: { msg: "Could not login" } };
  }
}

const registerService = async (data) => {
  // verify existence of the email
  const userExist = await User.findOne({ email: data.email });
  if (userExist) return { code: 400, data: { msg: "Email already exist" } }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  const newUser = new User({
    nom: data.nom,
    prenom: data.prenom,
    numero: data.numero,
    email: data.email,
    photoLink: data.photoLink,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.AUTH_TOKEN_SECRET,
      {
        expiresIn: 36000,
      }
    );
    return {
      code: 200,
      data: {
        id: savedUser.id,
        nom: savedUser.nom,
        prenom: savedUser.prenom,
        numero: savedUser.numero,
        email: savedUser.email,
        token
      }
    }
  } catch (e) {
    console.error(e);
    return { code: 500, data: { msg: "Could not register" } };
  }
}

module.exports = {
  loginService,
  registerService
}