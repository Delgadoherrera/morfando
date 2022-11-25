'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.restaurant,
        {
          as: 'restaurante',
          foreignKey: 'restaurante_id'
        }
      );
    }
  }
  hour.init({
    restaurante_id: DataTypes.INTEGER,
    dia: DataTypes.STRING,
    horaDesde: DataTypes.TIME,
    horaHasta: DataTypes.TIME,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'hour',
  });
  return hour;
};