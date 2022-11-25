"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        as: "usuario",
        foreignKey: "usuario_id",
      });
      this.hasOne(models.address, {
        as: "address",
        foreignKey: "id",
      });
      this.hasMany(models.hour, {
        as: "hour",
        foreignKey: "restaurante_id",
      });

      this.hasMany(models.plate, {
        as: "plates",
        foreignKey: "restaurante_id",
      });

      this.hasMany(models.restaurantImage, {
        as: "restaurantImage",
        foreignKey: "id",
      });

      this.hasMany(models.opinion, {
        as: "opinion",
        foreignKey: "restaurante_id",
      });

      this.hasMany(models.favorite, {
        as: "favorite",
        foreignKey: "restaurante_id",
      });

      this.hasMany(models.category, {
        as: "category",
        foreignKey: "restaurante_id",
      });
    }
  }
  restaurant.init(
    {
      usuario_id: DataTypes.INTEGER,
      nombre: DataTypes.STRING,
      latitud: DataTypes.DECIMAL,
      longitud: DataTypes.DECIMAL,
      cerradoTemporalmente: DataTypes.BOOLEAN,
      tipoDeComida: DataTypes.STRING,
      rangoPrecio: DataTypes.INTEGER,
      calificacion: DataTypes.INTEGER,
      activo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "restaurant",
    }
  );
  return restaurant;
};
