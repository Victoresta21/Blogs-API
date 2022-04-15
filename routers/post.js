const router = require('express').Router();
const JWTauth = require('../middlewares/JWTauth');
const validatePost = require('../middlewares/validatePost');
const { create, getAll } = require('../controllers/post');

router.post('/', JWTauth, validatePost, create);
router.get('/', JWTauth, getAll);

module.exports = router;
