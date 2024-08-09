const express = require('express');
const router = express.Router();


const { adminLogin } = require('../../controllers/adminAuth/adminController');
const { auth, isAdmin } = require('../../middlewares/AuthMidddleware');

router.post('/adminlogin', isAdmin, adminLogin);

module.exports = router;