const DataTypes = require('sequelize');

const createMessageModel = (orm) => {
  const MessageModel = orm.define(
    'Message',
    {
      userId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      user: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'Messages',
    }
  );

  return MessageModel;
};

module.exports = createMessageModel;
