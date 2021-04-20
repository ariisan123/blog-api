module.exports = (sequelize, type) =>
  sequelize.define(
    'Post',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: type.STRING
      },
      content: {
        type: type.TEXT
      },
      picture: {
        type: type.STRING
      }
    },
    {
      tableName: 'posts',
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      paranoid: true
    }
  );
