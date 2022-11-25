'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.restaurant,
        {
          as: 'restaurante',
          foreignKey: 'restaurante_id'
        }
      );
    }
  }
  address.init({
    restaurante_id: DataTypes.INTEGER,
    numero: DataTypes.INTEGER,
    calle: DataTypes.STRING,
    barrio: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    pais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};