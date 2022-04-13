const router = require('express').Router();
const { create } = require('../controllers/users');
const validateCreate = require('../middlewares/validatecreate');

router.post('/', validateCreate, create);

module.exports = router;