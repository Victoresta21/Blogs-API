const { Categories } = require('../models');

const errorMessages = {
  title: '"title" is required',
  categoryIds: '"categoryIds" is required',
  content: '"content" is required',
};

const notEmpty = (title, categoryIds, content) => {
  if (!title) return { code: 400, body: { message: errorMessages.title } };
  if (!categoryIds) return { code: 400, body: { message: errorMessages.categoryIds } };
  if (!content) return { code: 400, body: { message: errorMessages.content } };
  return null;
};

const categoryExist = async (categoriesArr) => {
  const arr = await Categories.findAll({
    where: {
      id: categoriesArr,
    },
  });
  if (arr.length !== categoriesArr.length) {
    return { code: 400, body: { message: '"categoryIds" not found' } };
  }
};

const validatePost = async (req, res, next) => {
  try {
    const { title, categoryIds, content } = req.body;
    const checkingEmpty = notEmpty(title, categoryIds, content);
    if (checkingEmpty) return res.status(checkingEmpty.code).send(checkingEmpty.body);

    const allExists = await categoryExist(categoryIds);
    if (allExists) {
      return res.status(allExists.code).send(allExists.body);
    }
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};

module.exports = validatePost;