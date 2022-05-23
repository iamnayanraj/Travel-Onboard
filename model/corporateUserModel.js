const Sequelize = require("sequelize");
const sequelize = require("../db/dbconfig");

const CorporateUser = sequelize.define(
  "CorporateUser",
  {
    corporateUserId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    corporateId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserPhoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserAddress: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    corporateUserUserName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    corporateUserPassword: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserIdProof: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserCreatedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserModifiedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateUserIsActive: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = CorporateUser;
