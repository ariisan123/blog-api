const { Post, Category } = require('../database');
const isImgUrl = require('image-url-validator').default;

module.exports = {
  async validPicture(req, res, next) {
    if (req.body.picture) {
      try {
        const validUrl = await isImgUrl(req.body.picture);
        if (!validUrl)
          res.status(400).json({ msg: `picture has not a valid url` });
      } catch (err) {
        res.status(500).send();
      }
      return next();
    } else {
      res.status(400).json({ msg: 'Please send picture url' });
    }
  },
  verifyCategory(req, res, next) {
    if (req.body.category_id && typeof req.body.category_id === 'number') {
      return next();
    } else {
      res.status(400).json({ msg: 'category must be an ID number' });
    }
  },
  verifyTitleContent(req, res, next) {
    if (
      req.body.title &&
      req.body.content &&
      req.body.title.length >= 3 &&
      req.body.content.length >= 3
    ) {
      return next();
    } else {
      res.status(400).json({ msg: 'No title/content sent' });
    }
  },
  async newPost(req, res) {
    try {
      const post = await Post.create(req.body);
      if (post) res.status(201).send();
    } catch (error) {
      res.status(500).json({ ...error });
    }
  },
  async deletePost(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Post.destroy({ where: { id } });
      if (deleted) res.status(200).json({ msg: 'Post deleted' });
      res.status(404).json({ msg: 'Post not found' });
    } catch (error) {
      res.status(500).send();
    }
  },
  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const updated = await Post.update(req.body, { where: { id } });
      if (updated[0]) res.status(200).json({ msg: 'post updated' });
      res.status(404).json({ msg: 'post not found' });
    } catch (err) {
      res.status(500).send();
    }
  },
  async getPost(req, res) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id, {
        attributes: ['id', 'title', 'content', 'created_at'],
        include: { model: Category, as: 'category', attributes: ['name'] }
      });
      if (post) res.status(200).json({ data: post.dataValues });
      res.status(404).json({ msg: 'Post not found' });
    } catch (err) {
      res.status(500).send();
    }
  },
  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        include: { model: Category, as: 'category', attributes: ['name'] },
        order: [['created_at', 'DESC']]
      });
      if (posts) res.status(200).json({ data: posts });
    } catch (err) {
      res.status(500).send();
    }
  }
};
