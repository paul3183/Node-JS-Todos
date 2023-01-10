const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define("categories", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    unique: true,
    type: DataTypes.STRING,
    allowNull: false,
  },

},
  {
    timestamps: false,  //para que el tiempo 
  });

module.exports = Categories;