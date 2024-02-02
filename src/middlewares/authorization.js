const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET  = process.env.JWT_SECRET;

function generateToken(userId) {
  const token = jwt.sign({ user: userId }, JWT_SECRET, { expiresIn: '12h' });
  return token;
}

function verifyToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
