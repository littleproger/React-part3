// import * as connectWithDatabase from "./connectWithDatabase.js";
const UsersModel = require('../data/repositories/users.js');

// const path = "./users.json";

class UserService {
  async getAll() {
    return await UsersModel.getAll();
  }

  async getOne(id) {
    return await UsersModel.getById(id);
  }

  async update(id, dataToUpdate) {
    return await UsersModel.updateById(id, dataToUpdate);
  }

  async delete(id) {
    return await UsersModel.deleteById(id);
  }

  async add(user) {
    return await UsersModel.createUser(user);
  }

  // search(search) {
  //   return UsersModel.search(search);
  //   if (!item) {
  //     throw Error("User not found!");
  //   }
  //   return item;
  // }
}

module.exports = new UserService();
