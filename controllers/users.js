const { createUser, getAllUsers, findUser } = require('../services/user');

const create = async (req, res, next) => {
  try {
    const { code, body } = await createUser(req.body);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const { code, body } = await getAllUsers();
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const { code, body } = await findUser(req.params.id);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
  findOne,
};
