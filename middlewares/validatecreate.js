const checks = require('./validateschema');

const validateCreate = async (req, res, next) => {
  try {
    const checkErrors = await checks(req.body);
    if (checkErrors) {
      const { code, body } = checkErrors;
      return res.status(code).send(body);
    }
    next();
  } catch (err) {
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};

module.exports = validateCreate;
