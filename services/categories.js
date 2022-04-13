const { Categories } = require('../models');

const createCategory = async (newCategory) => {
  try {
    const categoryCreated = await Categories.create(newCategory);
    return {
      code: 201,
      body: categoryCreated,
    };
  } catch (e) {
    return { code: 500, body: { message: 'Something went wrong' } };
  }
};

module.exports = {
  createCategory,
};
