const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();

router.post('/user/create', userController.createUser);
router.post('/user/login', userController.loginUser);

module.exports = router;
