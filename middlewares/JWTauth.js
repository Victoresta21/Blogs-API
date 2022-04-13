const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWTauth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send({ message: 'Token not found' });
    const decoded = jwt.verify(token, secret);
    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = JWTauth;