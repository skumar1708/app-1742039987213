const express = require('express');
const { createGame, getGame, updateGame } = require('../controllers/gameController');
const router = express.Router();

router.post('/', createGame);
router.get('/:id', getGame);
router.put('/:id', updateGame);

module.exports = router;