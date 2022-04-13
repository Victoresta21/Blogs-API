const router = require('express').Router();
const { create, getAll, findOne } = require('../controllers/users');
const JWTauth = require('../middlewares/JWTauth');
const { validateCreate } = require('../middlewares/validatecreate');

router.post('/', validateCreate, create);
router.get('/', JWTauth, getAll);
router.get('/:id', JWTauth, findOne);

module.exports = router;