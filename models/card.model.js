const Joi = require('joi');
carSchema = Joi.object().keys({
  name: Joi.string().regex(/^[a-zA-Z ]*$/).required(),
  pan: Joi.string().required(),
  limit: Joi.number().integer().required(),
  balance: Joi.number().integer()
});
module.exports = carSchema;