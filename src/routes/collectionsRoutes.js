const express = require('express');
const router = express.Router();
const collectionsController = require('../controllers/collectionControler');
const authenticateToken = require('../middlewares/authMiddleware');

// Authentication middleware
router.use(authenticateToken);
router
  .get('/collections', collectionsController.getAllCollections)
  .get('/collections/:id', collectionsController.getOneCollection)
  .post('/collections', collectionsController.createCollection)
  .put('/collections/:id', collectionsController.updateCollection)
  .delete('/collections/:id', collectionsController.deleteCollection)

module.exports = router;
