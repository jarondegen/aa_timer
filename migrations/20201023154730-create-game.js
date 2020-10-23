'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      currentQuestion: {
        allowNull: true,
        type: Sequelize.STRING
      },
      currentAnswer: {
        allowNull: true,
        type: Sequelize.STRING
      },
      currentWrongAnswer: {
        allowNull: true,
        type: Sequelize.STRING
      },
      currentCategory: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Games');
  }
};