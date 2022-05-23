const Joi = require("joi");

const schema = Joi.object({
  corporateName: Joi.string().min(1).max(50).required(),
  corporatePhoneNumber: Joi.string().max(10).required(),
  corporateAddress: Joi.string(),
  corporateCreatedBy: Joi.string().max(50).required(),
  corporateModifiedBy: Joi.string().max(50).required(),
  corporateIsActive: Joi.number().integer().required(),
  users: Joi.array().required(),
});

module.exports = schema;
