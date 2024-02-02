const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();

// These routes are not protected by authentication
router.post('/user/create', userController.createUser);
router.post('/user/login', userController.loginUser);

module.exports = router;
