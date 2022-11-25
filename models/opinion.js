'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class opinion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.restaurant, {
        as: "restaurant",
        foreignKey: "restaurante_id",
      });

      this.belongsTo(models.user, {
        as: "usuario",
        foreignKey: "usuario_id",
      });
    }
  }
  opinion.init({
    restaurante_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'opinion',
  });
  return opinion;
};