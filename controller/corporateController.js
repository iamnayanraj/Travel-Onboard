const Corporate = require("../model/corporateModel");
const CorporateUser = require("../model/corporateUserModel");
const {
  isPresentInCache,
  getDataFromCache,
  setDataToCache,
} = require("../Cache/cache");
const SD = require("../util/SD");
const addCorporateAndUserSchemaValidation = require("../util/schemaValidation/schemaValidationService/addCorporateAndUserSchemaValidation");
const sequelize = require("../db/dbconfig");

const getAllCorporates = async (request, response) => {
  try {
    let corporates;
    if (isPresentInCache(SD.cache.CACHE_KEY_ALL_CORPORATES)) {
      corporates = getDataFromCache(SD.cache.CACHE_KEY_ALL_CORPORATES);
    } else {
      corporates = await Corporate.findAll({
        raw: true,
        nest: true,
        attributes: [
          "corporateName",
          "corporatePhoneNumber",
          "corporateAddress",
        ],
      });
      setDataToCache(SD.cache.CACHE_KEY_ALL_CORPORATES, corporates);
    }
    return response.json(corporates);
  } catch (error) {
    next(error);
  }
};

const getCorporateById = async (request, response, next) => {
  try {
    let corporate;
    if (
      isPresentInCache(SD.cache.CACHE_KEY_CORPORATE_BY_ID + request.params.id)
    ) {
      corporate = getDataFromCache(
        SD.cache.CACHE_KEY_CORPORATE_BY_ID + request.params.id
      );
    } else {
      corporate = await Corporate.findAll({
        where: {
          corporateid: request.params.id,
        },
        raw: true,
        nest: true,
        attributes: [
          "corporateName",
          "corporatePhoneNumber",
          "corporateAddress",
        ],
      });
      setDataToCache(
        SD.cache.CACHE_KEY_CORPORATE_BY_ID + request.params.id,
        corporate
      );
    }
    return response.json(corporate);
  } catch (error) {
    next(error);
  }
};

// Few modification can be done 1. Bulk create instead of loop  2. Send only limited fields in response

const addCorporateAndUsers = async (request, response, next) => {
  try {
    const transactionResult = await sequelize.transaction(async (t) => {
      addCorporateAndUserSchemaValidation(request.body, next);
      let corporate = { ...request.body };
      let users = corporate.users;
      const corporateData = JSON.parse(
        JSON.stringify(await Corporate.create(corporate, { transaction: t }))
      );
      let tempUsers = [];
      for (let i = 0; i < users.length; i++) {
        users[i].corporateId = corporateData.corporateId;
        const corporateUserData = JSON.parse(
          JSON.stringify(
            await CorporateUser.create(users[i], { transaction: t })
          )
        );
        tempUsers.push(corporateUserData);
      }
      corporateData.users = tempUsers;
      //await t.commit();
      return response.status(201).json(corporateData);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCorporates,
  getCorporateById,
  addCorporateAndUsers,
};
