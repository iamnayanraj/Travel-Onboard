const corporateSchema = require("../schemas/corporateSchema");
const corporateUserSchema = require("../schemas/corporateUserSchema");
const addCorporateAndUserSchemaValidation = async (data, next) => {
  try {
    const corporateAndUser = data;
    const users = corporateAndUser.users;
    await corporateSchema.validateAsync(corporateAndUser);
    users.forEach(async (user) => {
      await corporateUserSchema.validateAsync(user);
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addCorporateAndUserSchemaValidation;
