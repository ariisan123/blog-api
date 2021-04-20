require('./dotenv');
const Sequelize = require('sequelize');
const postModel = require('./models/Post');
const categoryModel = require('./models/Category');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

const Post = postModel(sequelize, Sequelize);
const Category = categoryModel(sequelize, Sequelize);

Post.belongsTo(Category, { as: 'category', foreignKey: 'category_id' });
Category.hasMany(Post, {
  as: 'posts'
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('DB sincronizada correctamente');
    Category.bulkCreate([
      {
        name: 'offtopic'
      },
      {
        name: 'tecno'
      },
      {
        name: 'software'
      },
      { name: 'memes' }
    ]);
  })
  .catch((err) => console.log(err));

module.exports = { Post, Category };
