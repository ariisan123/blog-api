const router = require('express').Router();
const postRoute = require('./posts');

router.use('/posts', postRoute);

module.exports = router;
