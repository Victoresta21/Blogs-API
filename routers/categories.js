const router = require('express').Router();
const JWTauth = require('../middlewares/JWTauth');
const validateCategory = require('../middlewares/validateCategory');
const { create, getAll } = require('../controllers/categories');

router.post('/', JWTauth, validateCategory, create);
router.get('/', JWTauth, getAll);

module.exports = router;