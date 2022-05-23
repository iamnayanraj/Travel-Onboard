const CorporateUser = require("../model/corporateUserModel");

const {
  isPresentInCache,
  getDataFromCache,
  setDataToCache,
} = require("../Cache/cache");
const SD = require("../util/SD");

const getAllCorporateUsers = async (request, response) => {
  try {
    let corporateusers;
    if (isPresentInCache(SD.cache.CACHE_KEY_ALL_CORPORATE_USERS)) {
      corporateusers = getDataFromCache(SD.cache.CACHE_KEY_ALL_CORPORATE_USERS);
    } else {
      corporateusers = await CorporateUser.findAll({
        raw: true,
        nest: true,
      });
      setDataToCache(SD.cache.CACHE_KEY_ALL_CORPORATE_USERS, corporateusers);
    }
    return response.json(corporateusers);
  } catch (error) {
    next(error);
  }
};

const getCorporateUserById = async (request, response) => {
  try {
    let corporateuser;
    if (
      isPresentInCache(
        SD.cache.CACHE_KEY_CORPORATE_USER_BY_ID + request.params.id
      )
    ) {
      corporateuser = getDataFromCache(
        SD.cache.CACHE_KEY_CORPORATE_USER_BY_ID + request.params.id
      );
    } else {
      corporateuser = await CorporateUser.findAll({
        where: {
          corporateuserid: request.params.id,
        },
        raw: true,
        nest: true,
      });
      setDataToCache(
        SD.cache.CACHE_KEY_CORPORATE_USER_BY_ID +
          request.params.id +
          " response",
        corporateuser
      );
    }
    return response.json(corporateuser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCorporateUsers,
  getCorporateUserById,
};
