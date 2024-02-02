const express = require('express');
const collectionController = require('../controllers/collectionControler');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     Collections:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         materialId:
 *           type: integer
 *           format: int64
 *         quantity:
 *           type: integer
 *           format: int64
 *         collectionDate:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /collections:
 *   get:
 *     tags:
 *       - Collections
 *     summary: Get all collections
 *     description: Retrieve a list of all collections.
 *     responses:
 *       200:
 *         description: A list of collections.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *   post:
 *     tags:
 *       - Collections
 *     summary: Create a new collection
 *     description: Create a new collection with the given data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: The created collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Collections'
 */

/**
 * @openapi
 * /collections/{id}:
 *   get:
 *     tags:
 *       - Collections
 *     summary: Get a single collection
 *     description: Retrieve details of a specific collection by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the collection.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Collections'
 *   put:
 *     tags:
 *       - Collections
 *     summary: Update a collection
 *     description: Update an existing collection identified by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the collection to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: The updated collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Collections'
 *   delete:
 *     tags:
 *       - Collections
 *     summary: Delete a collection
 *     description: Delete a specific collection by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the collection to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Collection deleted successfully.
 */

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

