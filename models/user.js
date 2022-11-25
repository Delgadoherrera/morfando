'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.restaurant,
        {
            as: 'restaurante',
            foreignKey: 'usuario_id'
        }
      );
      this.hasOne(models.userImage,
        {
            as: 'usuario_imagen',
            foreignKey: 'id'
        }
      );

      this.hasMany(models.favorite, {
        as: "favorite",
        foreignKey: "usuario_id",
      });
    }
  }
  user.init({
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    nombre: DataTypes.STRING,
    duenio: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};