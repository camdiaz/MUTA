const express = require('express');
const { recyclingRoute }  = require('../controllers/recyclingController');
const authorization = require('../middlewares/authorization');

const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     RecyclingMaterial:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: "plástico"
 *         peso:
 *           type: number
 *           example: 14
 *         valor:
 *           type: number
 *           example: 7
 *     RecyclingRequest:
 *       type: object
 *       required:
 *         - materials
 *         - maxPeso
 *       properties:
 *         materials:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/RecyclingMaterial'
 *         maxPeso:
 *           type: number
 *           example: 50
 *     RecyclingResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Optimal recycling route"
 *         ruta:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "vidrio"
 *               peso:
 *                 type: string
 *                 example: "1 Kg"
 *         valorTotal:
 *           type: number
 *           example: 4
 */
/**
 * @openapi
 * /recycling/route:
 *   post:
 *     tags:
 *       - Recycling Route
 *     summary: Perform a recycling operation
 *     description: Submits recycling data to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecyclingRequest'
 *     responses:
 *       201:
 *         description: Recycling data successfully submitted.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RecyclingResponse'
 *       400:
 *         description: Bad request. The request body is missing required fields or contains invalid data.
 *       401:
 *         description: Unauthorized. User is not authenticated.
 */

// Authentication middleware
router.use(authorization.verifyToken);
router.post('/recycling/route', recyclingRoute);

module.exports = router;