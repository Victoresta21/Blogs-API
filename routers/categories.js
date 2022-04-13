const router = require('express').Router();
const JWTauth = require('../middlewares/JWTauth');
const validateCategory = require('../middlewares/validateCategory');
const { create } = require('../controllers/categories');

router.post('/', JWTauth, validateCategory, create);

module.exports = router;