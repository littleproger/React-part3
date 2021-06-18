"use strict";

module.exports = {
  up: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface
          .bulkInsert(
            "Users",
            [
              {
                name: "admin",
                surname: "admin",
                email: "admin@admin.com",
                password: "admin",
                avatar:
                  "https://www.pikpng.com/pngl/b/80-805523_default-avatar-svg-png-icon-free-download-264157.png",
                createdAt:new Date(),
                updatedAt:new Date(),
              },
            ],
            { transaction, returning: true }
          ),
      ])
    ),
  down: async (queryInterface) =>
    queryInterface.sequelize.transaction((transaction) =>
      Promise.all([
        queryInterface.bulkDelete("Users", null, { transaction }),
      ])
    ),
};
