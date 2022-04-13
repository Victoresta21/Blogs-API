const { createCategory } = require('../services/categories');

const create = async (req, res, next) => {
  try {
    const { code, body } = await createCategory(req.body);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};