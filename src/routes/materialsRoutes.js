const express = require('express');
const router = express.Router();
const materialsController = require('../controllers/materialController');
const authenticateToken = require('../middlewares/authMiddleware');

// Authentication middleware
router.use(authenticateToken);
router
  .get('/materials', materialsController.getAllMaterials)
  .get('/materials/:id', materialsController.getOneMaterial)
  .post('/materials', materialsController.createMaterial)
  .put('/materials/:id', materialsController.updateMaterial)
  .delete('/materials/:id', materialsController.deleteMaterial)

module.exports = router;
