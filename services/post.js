const { PostsCategories, BlogPosts, Users, Categories } = require('../models');

const createPost = async ({ title, content, categoryIds }, { id }) => {
  try {
    const creatingPost = await BlogPosts.create({
      title, content, userId: id,
    });

    const postId = creatingPost.dataValues.id;
    const arrInfos = categoryIds.map((categoryId) => {
      const obj = { postId, categoryId };
      return obj;
    });
    await PostsCategories.bulkCreate(arrInfos);
    return { code: 201, body: { id: postId, userId: id, title, content } };
  } catch (e) {
    console.error(e.message);
    return { code: 500, body: { message: 'Algo deu errado' } };
  }
};

const getAllPosts = async () => {
  const allUsers = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return {
    code: 200,
    body: allUsers,
  };
};

module.exports = {
  createPost,
  getAllPosts,
};