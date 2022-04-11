const BlogPosts = (sequelize, DataTypes) => {
  const blog = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blog.associate = (models) => {
    blog.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };

  return blog;
};

module.exports = BlogPosts;
