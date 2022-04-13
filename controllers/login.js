const { completeLogin } = require('../services/login');

const login = async (req, res, next) => {
  try {
    const { code, body } = await completeLogin(req.body);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};