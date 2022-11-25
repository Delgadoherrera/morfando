'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
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

      this.belongsTo(models.user,
        {
          as: 'usuario',
          foreignKey: 'usuario_id'
        }
      );
    }
  }
  favorite.init({
    restaurante_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};