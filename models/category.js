'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
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

      this.hasMany(models.plate, {
        as: "plates",
        foreignKey: "categoria_id",
      });
    }
  }
  category.init({
    restaurante_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'category',
  });
  return category;
};