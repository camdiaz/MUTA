const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

function generateToken(userId) {
  return jwt.sign({ user: userId }, JWT_SECRET, { expiresIn: '12h' });
}

function verifyToken(req, res, next) {
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
}

module.exports = {
  generateToken,
  verifyToken,
};
