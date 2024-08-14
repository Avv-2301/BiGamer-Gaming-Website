const express = require('express');
const router = express.Router();

const { createCategory, showCategory } = require('../controllers/Category.js')
const { auth, isAdmin } = require('../middlewares/AuthMidddleware');
const {createGame} = require('../controllers/Games.js');

router.post('/createcategory',createCategory, auth, isAdmin);
router.get('/showcategory',showCategory);


router.post('/creategame', auth, isAdmin, createGame);


module.exports = router;