"use strict";
const { UserModel } = require("../models/index.js");

class User {
  async getById(id) {
    const user = await UserModel.findByPk(id);
    return user.dataValues;
  }

  async getAll() {
    const users = await UserModel.findAll();
    return users.map((user) => user.dataValues);
  }

  async createUser(data) {
    const user = await UserModel.create(data);
    return user.dataValues;
  }

  async findByEmail(email) {
    const user = await UserModel.findOne({
      where: { email },
    });
    return user && user.dataValues;
  }

  async updateById(id, data) {
    const [, [user]] = await UserModel.update(data, {
      where: { id },
      returning: true,
    });
    return user.dataValues;
  }

  async deleteById(id) {
    const deletedRows = await UserModel.destroy({
      where: { id },
    });

    return Boolean(deletedRows);
  }
}
module.exports = new User();
