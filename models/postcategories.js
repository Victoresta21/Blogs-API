const PostsCategories = (sequelize, _DataTypes) => {
  const Posts = sequelize.define('PostsCategories', {}, { timestamps: false });
  Posts.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: Posts,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: Posts,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return Posts;
};

module.exports = PostsCategories;
