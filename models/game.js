'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    currentQuestion: DataTypes.STRING,
    currentAnswer: DataTypes.STRING,
    currentWrongAnswer: DataTypes.STRING,
    currentCategory: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.GamePlayers, {foreign_key: 'gameId'})
  };
  return Game;
};