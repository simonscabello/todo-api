const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied.' });
  }

  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied.' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(400).json({ message: 'Access denied.' });
  }
};

module.exports = authenticate;
