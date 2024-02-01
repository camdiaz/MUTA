'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Asociaciones
      Collection.belongsTo(models.Material, { foreignKey: 'materialId', as:"Material"});

    }
  }
  Collection.init({
    materialId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    collectionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};