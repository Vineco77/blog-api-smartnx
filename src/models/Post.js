const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: "O título não pode estar vazio" },
          },
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: { msg: "O conteúdo não pode estar vazio" },
          },
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: { msg: "O autor não pode estar vazio" },
          },
        },
      },
      {
        sequelize,
        tableName: "posts",
      }
    );
  }
}

module.exports = Post;
