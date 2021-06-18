// import * as connectWithDatabase from './connectWithDatabase.js';
const User = require("../data/repositories/users.js");

// const path = "./users.json";
class AuthService {
  async login(userData) {
    const user = await User.findByEmail(userData.email);
    if (!user) {
      throw Error("User not found");
    } else if (user.password !== userData.password) {
      throw Error("Password incorrect!");
    }
    return user;
  }
}

module.exports = new AuthService();
