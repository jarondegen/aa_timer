'use strict';

const { foreign_key } = require("inflection");

module.exports = (sequelize, DataTypes) => {
  const GamePlayers = sequelize.define('GamePlayers', {
    gameId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  GamePlayers.associate = function(models) {
    GamePlayers.belongsTo(models.Player, {foreign_key: 'playerId'})
    GamePlayers.belongsTo(models.Game, {foreign_key: 'gameId'})
  };
  return GamePlayers;
};