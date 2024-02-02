// materialsRoutes.js
const express = require('express');
const materialController = require('../controllers/materialController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Documentation with swagger

/**
 * @openapi
 * tags:
 *   name: Materials
 *   description: Operations related to materials
 */

/**
 * @openapi
 * /materials:
 *   get:
 *     tags:
 *       - Materials
 *     summary: Get all materials
 *     description: Retrieve a list of all materials.
 *     responses:
 *       200:
 *         description: A list of materials.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/responses/materials'
 *   post:
 *     tags:
 *       - Materials
 *     summary: Create a new material
 *     description: Create a new material with the given data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/materials'
 *     responses:
 *       201:
 *         description: The created material.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/materials'
 */

/**
 * @openapi
 * /materials/{id}:
 *   get:
 *     tags:
 *       - Materials
 *     summary: Get a single material
 *     description: Retrieve details of a specific material by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the material.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the material.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/responses/materials'
 *   put:
 *     tags:
 *       - Materials
 *     summary: Update a material
 *     description: Update an existing material identified by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the material to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/materials'
 *     responses:
 *       200:
 *         description: The updated material.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/materials'
 *   delete:
 *     tags:
 *       - Materials
 *     summary: Delete a material
 *     description: Delete a specific material by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the material to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Material deleted successfully.
 */

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
