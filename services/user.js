const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
};

const createUser = async (newUser) => {
  try {
    const user = await Users.create(newUser);
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return {
      code: 201,
      body: { token },
    };
  } catch (e) {
    return { code: 409, body: { message: 'User already registered' } };
  }
};

const getAllUsers = async () => {
  try {
    const allUsers = await Users.findAll({ attributes: { exclude: ['password'] } });
    return {
      code: 200,
      body: allUsers,
    };
  } catch (e) {
    return { code: 409, body: { message: 'User already registered' } };
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
