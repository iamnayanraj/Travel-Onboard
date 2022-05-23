const Sequelize = require("sequelize");
const sequelize = require("../db/dbconfig");

const Corporate = sequelize.define(
  "Corporate",
  {
    corporateId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // When DB column name is diffenrent than that of model attribute name use field property
    // Make sure ur API fields name and,model field name and other places in code like
    //schema are uniform

    corporateName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "corporateName", // corporateName is table column name
    },
    corporatePhoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateAddress: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    corporateCreatedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateModifiedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    corporateIsActive: {
      type: Sequelize.INTEGER,
      default: false,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Corporate;
