const { userSchema, loginSchema } = require('./Joischema');

const userChecks = async (data) => {
  const result = userSchema.validate(data);
  if ('error' in result) {
    const { message } = result.error.details[0];
    return { code: 400, body: { message } };
  }
  return null;
};

const loginChecks = async (data) => {
  const result = loginSchema.validate(data);
  if ('error' in result) {
    const { message } = result.error.details[0];
    return { code: 400, body: { message } };
  }
  return null;
};

module.exports = {
  userChecks,
  loginChecks,
};
