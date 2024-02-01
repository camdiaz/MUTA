const express = require('express');
const collectionsController = require('../controllers/collectionControler');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Middleware de autenticación
router.use(authorization.verifyToken);

// Routes protected
router.route('/collections')
  .get(collectionsController.getAllCollections)
  .post(collectionsController.createCollection);

router.route('/collections/:id')
  .get(collectionsController.getCollection)
  .put(collectionsController.updateCollection)
  .delete(collectionsController.deleteCollection);

module.exports = router;

