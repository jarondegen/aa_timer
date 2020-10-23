const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Game } = require('../../models')



router.post('/new', asyncHandler(async function (req, res, next) {
    const { name } = req.body 
    console.log(name)
    const newGame = await Game.create({name});

    res.json(newGame);
}));

router.post('/update', asyncHandler(async function (req, res, next) {
    const { name, currentQuestion, currentAnswer, 
            currentCategory, currentWrongAnswer } = req.body
    const game = await Game.findOne({ where: {name} });
    await game.update({currentQuestion, currentAnswer, 
        currentCategory, currentWrongAnswer})
    res.json(game);
}));


router.get('/:id', asyncHandler(async function (req, res, next) {
    const id = req.params.id
    const game = await Game.findByPk(id);
    res.json(game);
}));


module.exports = router;