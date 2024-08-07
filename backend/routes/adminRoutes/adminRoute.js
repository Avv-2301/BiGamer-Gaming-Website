const express = require('express');
const router = express.Router();


const { login } = require('../../controllers/adminAuth/adminController');
const { auth } = require('../../middlewares/AuthMidddleware');

router.post('/adminlogin', auth, login);

module.exports = router;