const express = require('express');
const router = express.Router();

const { signUp, login } = require('../controllers/Auth');

const {auth} = require('../middlewares/AuthMidddleware');


router.post('/login',auth, login);

router.post('/signup', signUp);

module.exports = router;