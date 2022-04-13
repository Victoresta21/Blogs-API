const { createUser } = require('../services/user');

const create = async (req, res, next) => {
  try {
    const { code, body } = await createUser(req.body);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
