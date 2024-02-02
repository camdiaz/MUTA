const express = require('express');
const recyclingRoute  = require('./../controllers/recyclingController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Authentication middleware
router.use(authorization.verifyToken);
router.post('/recycling/route', recyclingRoute);

module.exports = router;