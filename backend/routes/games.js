const express = require('express');
const router = express.Router();

const { createCategory, showCategory } = '../controllers/Category.js';
const { auth, isAdmin } = require('../middlewares/AuthMidddleware');

router.post('/createcategory',createCategory, auth, isAdmin);
router.get('/showcategory',showCategory);