'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plate extends Model {
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

      this.belongsTo(models.category,
        {
          as: 'category',
          foreignKey: 'categoria_id'
        }
      );

      this.hasMany(models.plateImage,
        {
            as: 'plato_imagen',
            foreignKey: 'plato_id'
        }
      );
    }
  }
  plate.init({
    restaurante_id: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    ingredientes: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    aptoVegano: DataTypes.BOOLEAN,
    aptoCeliaco: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'plate',
  });
  return plate;
};