'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Bookmark.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "userId field is required"
        },
        notEmpty: {
          msg: "userId field is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "status field is required"
        },
        notEmpty: {
          msg: "status field is required"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "title field is required"
        },
        notEmpty: {
          msg: "title field is required"
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "iamge_url field is required"
        },
        notEmpty: {
          msg: "iamge_url field is required"
        }
      }
    },
    mal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "mal_id field is required"
        },
        notEmpty: {
          msg: "mal_id field is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};