const validateCategory = async (req, res, next) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: '"name" is required' });
    }
    next();
  } catch (err) {
    return res.status(500).send({ message: 'Something went wrong.' });
  }
};

module.exports = validateCategory;