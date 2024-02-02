const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Generates a JWT token for a user.
 *
 * @param {string} userId - The unique identifier of the user.
 * @returns {string} A JWT token string that can be used for authenticated requests.
 */
function generateToken(userId) {
  return jwt.sign({ user: userId }, JWT_SECRET, { expiresIn: '12h' });
}

/**
 * Middleware that verifies the JWT token on the request.
 * If the token is valid, it attaches the decoded user information to the request and calls next to proceed.
 * If the token is invalid, it sends a 401 Unauthorized response.
 *
 * @param {object} req - The request object from Express.
 * @param {object} res - The response object from Express.
 * @param {function} next - The next middleware function in the stack.
 */

function verifyToken(req, res, next) {
  try {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
      const bearerToken = bearerHeader.split(' ')[1];
      jwt.verify(bearerToken, JWT_SECRET, (error, decoded) => {
        if (error) {
          return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }
        req.user = decoded.user;
        next();
      });
    } else {
      return res.status(401).json({ error: 'Unauthorized - Missing token' });
    }
  } catch (error) {
    console.error('Error verifying JWT token:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
