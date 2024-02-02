const express = require('express');
const collectionController = require('../controllers/collectionControler');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Authentication middleware
router.use(authorization.verifyToken);

// Routes protected by authentication
router.route('/collections')
  .get(collectionController.getAllCollections)
  .post(collectionController.createCollection);

router.route('/collections/:id')
  .get(collectionController.getCollection)
  .put(collectionController.updateCollection)
  .delete(collectionController.deleteCollection);

module.exports = router;

