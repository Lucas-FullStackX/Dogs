const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    years: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
