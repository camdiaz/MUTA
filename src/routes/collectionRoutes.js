const express = require('express');
const collectionController = require('../controllers/collectionControler');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Documentation with swagger

/**
 * @openapi
 * tags:
 *   name: Collections
 *   description: Operations related to collections
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
 *                 $ref: '#components/responses/collections'
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
 *             $ref: '#omponents/schemas/collections'
 *     responses:
 *       201:
 *         description: The created collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/collections'
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
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/omponents/schemas/collections'
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
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/responses/collections'
 *     responses:
 *       200:
 *         description: The updated collection.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/responses/collections'
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
 *           type: string
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

