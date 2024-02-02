const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         email:
 *           type: string
 *         name:
 *           type: string
 *         password:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /user/create:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     description: Registers a new user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *             properties:
 *               username:
 *                 type: string
 *                 description: The desired username for the new account.
 *               password:
 *                 type: string
 *                 description: The password for the new account.
 *               email:
 *                 type: string
 *                 description: The email address for the new account.
 *             example:
 *               username: "newuser"
 *               password: "password123"
 *               email: "newuser@example.com"
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Invalid input data.
 *       409:
 *         description: Username or email already exists.
 */

/**
 * @openapi
 * /user/login:
 *   post:
 *     tags:
 *       - Users
 *     summary: User login
 *     description: Authenticates a user and returns an access token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *             example:
 *               username: "existinguser"
 *               password: "password123"
 *     responses:
 *       200:
 *         description: Authentication successful. Returns access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Authentication failed. Incorrect username or password.
 */

// These routes are not protected by authentication
router.post('/user/create', userController.createUser);
router.post('/user/login', userController.loginUser);

module.exports = router;
