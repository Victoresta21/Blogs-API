const { userChecks, loginChecks } = require('./validateschema');

const validateCreate = async (req, res, next) => {
  try {
    const checkErrors = await userChecks(req.body);
    if (checkErrors) {
      const { code, body } = checkErrors;
      return res.status(code).send(body);
    }
    next();
  } catch (err) {
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};

const validateLogin = async (req, res, next) => {
  try {
    const checkErrors = await loginChecks(req.body);
    if (checkErrors) {
      const { code, body } = checkErrors;
      return res.status(code).send(body);
    }
    next();
  } catch (err) {
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};

module.exports = {
  validateCreate,
  validateLogin,
};
