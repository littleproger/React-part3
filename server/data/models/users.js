const DataTypes = require('sequelize');

const createUserModel = (orm) => {
  const UserModel = orm.define(
    'User',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      avatar: {
        type: DataTypes.STRING,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: 'Users',
    }
  );

  return UserModel;
};

module.exports = createUserModel;
