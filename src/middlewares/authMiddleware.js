const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Managemane of authorization
function authMiddleware(req, res, next) {
  try {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Missing token' });
  }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized - Invalid token' });
  }
}

module.exports = authMiddleware;
