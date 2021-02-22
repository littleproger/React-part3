const connectWithDatabase = require('./connectWithDatabase');

const path = "./users.json";
class AuthService {
    login(userData) {
        const user = connectWithDatabase.search(userData,path);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }
}

module.exports = new AuthService();