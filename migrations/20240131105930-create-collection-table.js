'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Collections', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         materialId: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
               model: 'Materials',
               key: 'id',
            },
            onDelete: 'CASCADE',
         },
         quantity: {
            allowNull: false,
            type: Sequelize.INTEGER
         },
         collectionDate: {
            allowNull: false,
            type: Sequelize.DATE
         },
         createdAt: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
         }
      });
   },
   async down(queryInterface) {
      await queryInterface.dropTable('Collections');
   }
};