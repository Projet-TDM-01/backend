const Joi = require("joi");

function registerValidation(data) {
  const schema = new Joi.object({
    nom: Joi.string().required().min(3).max(255),
    prenom: Joi.string().required().min(3).max(255),
    numero: Joi.string().required().min(6).max(255),
    email: Joi.string().required().min(6).max(255).email(),
    password: Joi.string().required().min(6).max(255),
    photoLink: Joi.string(),
  });
  return schema.validate(data);
}

function loginValidation(data) {
  const schema = new Joi.object({
    email: Joi.string().required().max(255).email(),
    password: Joi.string().required().min(6).max(255),
  });
  return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
