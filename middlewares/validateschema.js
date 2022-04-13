const schema = require('./Joischema');

const checks = async (data) => {
  const result = schema.validate(data);
  if ('error' in result) {
    const { message } = result.error.details[0];
    return { code: 400, body: { message } };
  }
  return null;
};

module.exports = checks;
