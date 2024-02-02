const express = require('express');
const recyclingRoute  = require('./../controllers/recyclingController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * tags:
 *   name: Recycling
 *   description: Operations related to recycling
 */

/**
 * @openapi
 * /recycling/route:
 *   post:
 *     tags:
 *       - Recycling
 *     summary: Perform a recycling operation
 *     description: Submits recycling data to the system.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - materialId
 *               - quantity
 *             properties:
 *               materialId:
 *                 type: string
 *                 description: The unique identifier for the material being recycled.
 *               quantity:
 *                 type: number
 *                 description: The amount of material being recycled.
 *             example:
 *               materialId: "12345"
 *               quantity: 10
 *     responses:
 *       201:
 *         description: Recycling data successfully submitted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     materialId:
 *                       type: string
 *                       example: "12345"
 *                     quantity:
 *                       type: number
 *                       example: 10
 *                 message:
 *                   type: string
 *                   example: "Recycling data recorded successfully."
 *       400:
 *         description: Bad request. The request body is missing required fields or contains invalid data.
 *       401:
 *         description: Unauthorized. User is not authenticated.
 */


// Authentication middleware
router.use(authorization.verifyToken);
router.post('/recycling/route', recyclingRoute);

module.exports = router;