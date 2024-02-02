// materialsRoutes.js
const express = require('express');
const materialController = require('../controllers/materialController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Authentication middleware
router.use(authorization.verifyToken);

// Routes protected by authentication
router.route('/materials')
  .get(materialController.getAllMaterials)
  .post(materialController.createMaterial)

router.route('/materials/:id')
  .get(materialController.getMaterial)
  .put(materialController.updateMaterial)
  .delete(materialController.deleteMaterial)

module.exports = router;
