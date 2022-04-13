const router = require('express').Router();
const { login } = require('../controllers/login');
const { validateLogin } = require('../middlewares/validatecreate');

router.post('/', validateLogin, login);

module.exports = router;