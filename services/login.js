const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
};

const completeLogin = async (newUser) => {
  try {
    const user = await Users.findOne({ where: newUser });
    if (!user) {
      return {
        code: 400,
        body: { message: 'Invalid fields' },
      };
    }
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return {
      code: 200,
      body: { token },
    };
  } catch (e) {
    console.error(e.message);
    return { code: 500, body: { message: 'something went wrong.' } };
  }
};

module.exports = { completeLogin };