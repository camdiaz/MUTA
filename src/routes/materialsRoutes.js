// materialsRoutes.js
const express = require('express');
const materialsController = require('../controllers/materialController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Authentication middleware
router.use(authorization.verifyToken);

// Routes protected
router.route('/materials')
  .get(materialsController.getAllMaterials)
  .post(materialsController.createMaterial)

router.route('/materials/:id')
  .get(materialsController.getMaterial)
  .put(materialsController.updateMaterial)
  .delete(materialsController.deleteMaterial)

module.exports = router;
