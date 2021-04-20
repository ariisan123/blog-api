const {
  validPicture,
  verifyCategory,
  newPost,
  verifyTitleContent,
  deletePost,
  updatePost,
  getPost,
  getAllPosts
} = require('../middlewares/Post');

const router = require('express').Router();

router
  .route('/')
  .get(getAllPosts)
  .post(validPicture, verifyCategory, verifyTitleContent, newPost);

router.route('/:id').delete(deletePost).patch(updatePost).get(getPost);

module.exports = router;
