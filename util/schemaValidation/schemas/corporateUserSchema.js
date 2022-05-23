const Joi = require("joi");

const schema = Joi.object({
  corporateUserName: Joi.string().max(50).required(),
  corporateUserPhoneNumber: Joi.string().max(10).required(),
  corporateUserAddress: Joi.string(),
  corporateUserCreatedBy: Joi.string().max(50).required(),
  corporateUserModifiedBy: Joi.string().max(50).required(),
  corporateUserUserName: Joi.string().max(50).required(),
  corporateUserPassword: Joi.string().max(50).required(),
  corporateUserIdProof: Joi.string().max(50).required(),
  corporateUserIsActive: Joi.number().integer().required(),
});

module.exports = schema;
