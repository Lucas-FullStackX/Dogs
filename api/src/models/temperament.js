const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("temperament", {
    id: {
      type: DataTypes.DECIMAL,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  });
};
