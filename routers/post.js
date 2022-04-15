const router = require('express').Router();
const JWTauth = require('../middlewares/JWTauth');
const validatePost = require('../middlewares/validatePost');
const { create } = require('../controllers/post');

router.post('/', JWTauth, validatePost, create);

module.exports = router;
