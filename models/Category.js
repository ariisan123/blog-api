module.exports = (sequelize, type) =>
  sequelize.define(
    'Category',
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: type.STRING
      }
    },
    {
      tableName: 'categories',
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      paranoid: true
    }
  );
