const { createPost, getAllPosts } = require('../services/post');

const create = async (req, res, next) => {
  try {
    const { code, body } = await createPost(req.body, req.user);
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const { code, body } = await getAllPosts();
    return res.status(code).json(body);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
};